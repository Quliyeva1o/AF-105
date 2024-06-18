import {  useNavigate, useHistory,  useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Detail = () => {
  const { id } = useParams();
  const history = useHistory();
  const navigate = useNavigate();

  const { data } = useFetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  return (
    <>
      {data && (
        <>
          <div>Detail: id {id}</div>
          <h1
            style={{ textDecoration: data.completed ? "line-through" : "none" }}
          >
            {data?.title}
          </h1>
          <button
            onClick={() => {
            //   navigate("/todos");
            history.push("/todos");
            // window.history.back();
            }}
          >
            go back
          </button>
        </>
      )}
    </>
  );
};

export default Detail;
