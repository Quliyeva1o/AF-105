import { Button, Input, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import controller from "../../services";
import { endpoints } from "../../services/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const notify = () =>
    toast.success("Cast Added", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  const [newCast, setNewCast] = useState({
    fullName: "",
    age: "",
    country: "",
  });
  const showModal = (id) => {
    setCurrentId(id);
    setOpen(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newActor = {
      id: new Date().valueOf(),
      fullName: newCast.fullName,
      age: newCast.age,
      country: newCast.country,
    };
    controller.getOne(endpoints.movies, currentId).then((res) => {
      const currentCast = res.cast;

      controller.patch(endpoints.movies, currentId, {
        cast: [...currentCast, newActor],
      });
    });
    setOpen(false);
    setNewCast({ fullName: "", age: "", country: "" });
    notify();
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  useEffect(() => {
    controller.getAll(endpoints.movies).then((res) => {
      setMovies([...res.data]);
    });
  }, []);
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      showSorterTooltip: {
        target: "full-header",
      },
      filters: movies.map((movie) => {
        console.log("movie: ", {
          text: movie.title,
          value: movie.title,
        });
        return {
          text: movie.title,
          value: movie.title,
        };
      }),
      onFilter: (value, record) => record.title.indexOf(value) === 0,
      sorter: (a, b) => a.title.localeCompare(b.title),
      sortDirections: ["descend"],
    },
    {
      title: "Release Year",
      dataIndex: "releaseYear",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.releaseYear - b.releaseYear,
    },
    {
      title: "Poster",
      dataIndex: "poster",
      render: (source) => {
        return <img src={source} width={"50"} height={"50"} />;
      },
    },
    {
      title: "Genre",
      dataIndex: "genre",
      filters: movies.map((movie) => {
        return {
          text: movie.genre,
          value: movie.genre,
        };
      }),
      onFilter: (value, record) => record.genre.indexOf(value) === 0,
    },
    {
      title: "Delete",
      render: (record) => {
        console.log("record: ", record);
        return (
          <Button
            type="primary"
            danger
            onClick={() => {
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then((result) => {
                if (result.isConfirmed) {
                  console.log(record.id);
                  controller.delete(endpoints.movies, record.id);
                  setMovies((movies) => {
                    return movies.filter((x) => x.id != record.id);
                  });
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                }
              });
            }}
          >
            delete
          </Button>
        );
      },
    },
    {
      title: "Add Cast",
      render: (record) => {
        console.log("record: ", record);
        return (
          <Button type="primary" onClick={() => showModal(record.id)}>
            add cast
          </Button>
        );
      },
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      <Table
        columns={columns}
        dataSource={movies}
        onChange={onChange}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
      />
      {/* add cast modal */}
      <Modal
        title="Add Cast Modal"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          disabled: true,
        }}
        cancelButtonProps={{
          disabled: true,
        }}
        footer={null}
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            onChange={(e) => {
              setNewCast({ ...newCast, fullName: e.target.value });
            }}
            value={newCast.fullName}
            style={{ marginBottom: "10px" }}
            type="text"
            placeholder="actor full name"
          />
          <Input
            onChange={(e) => {
              setNewCast({ ...newCast, age: e.target.value });
            }}
            value={newCast.age}
            style={{ marginBottom: "10px" }}
            type="number"
            min={0}
            placeholder="actor age"
          />
          <Input
            onChange={(e) => {
              setNewCast({ ...newCast, country: e.target.value });
            }}
            value={newCast.country}
            style={{ marginBottom: "10px" }}
            type="text"
            placeholder="actor country"
          />
          <Button type="primary" htmlType="submit">
            add
          </Button>
        </form>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default Movies;
