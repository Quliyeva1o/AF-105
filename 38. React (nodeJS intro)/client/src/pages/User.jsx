import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import controller from "../services/api/requests.js";
import { endpoints } from "../services/api/constants";
import Cookies from "js-cookie";
import { Button, Grid, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";

const User = () => {
  const navigate = useNavigate();
  const userLocal = JSON.parse(localStorage.getItem("user"));
  const data = useSelector((state) => state.user);
  const [user, setUser] = useState({});
  const [journalistBlogs, setJournalistBlogs] = useState([]);
  const token = Cookies.get("token");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!userLocal.id) {
      navigate("/sign-in");
    }
  }, [navigate, userLocal]);

  useEffect(() => {
    const token = Cookies.get("token");
    controller.getOne(endpoints.users, data.id, token).then((res) => {
      setUser(res.data);
    });
  }, [data]);

  useEffect(() => {
    controller.getAll(endpoints.blogs, token).then((res) => {
      const response = res.data.filter((x) => x.journalistId == data.id);
      setJournalistBlogs([...response]);
    });
  }, [token, data]);

  const filteredJournalistBlogs = journalistBlogs.filter((x) =>
    x.title.toLowerCase().trim().includes(query.toLowerCase().trim())
  );

  return (
    <div style={{ width: "80%", margin: "0 auto", marginBottom: "50px" }}>
      {user && (
        <>
          <h2>username: {user.username}</h2>
          <h2>email: {user.email}</h2>
          <h2>role: {user.role}</h2>
          <hr />
          <img
            style={{ objectFit: "cover", borderRadius: "50rem" }}
            width={150}
            height={150}
            src={user.src}
            alt={user.username}
            title={user.username}
          />
          <hr />
          <Button
            sx={{ margin: "10px 15px" }}
            variant="contained"
            color="primary"
          >
            update profile
          </Button>
          <Button
            sx={{ margin: "10px 15px" }}
            variant="contained"
            color="primary"
          >
            update password
          </Button>
          {user.role == "journalist" && (
            <Button
              sx={{ margin: "10px 15px" }}
              variant="contained"
              color="primary"
            >
              <Link style={{ color: "white" }} to={"/add-blog"}>
                add blog
              </Link>
            </Button>
          )}
        </>
      )}
      <hr />
      {user.role == "journalist" && (
        <div>
          <h2 style={{ textAlign: "center" }}>{user.username} blogs</h2>
          <TextField
            sx={{ marginBottom: "15px" }}
            placeholder="search blog"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <Grid container spacing={5}>
            {filteredJournalistBlogs &&
              filteredJournalistBlogs.map((blog) => {
                return (
                  <Grid
                    item
                    key={blog._id}
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={4}
                  >
                    <Card
                      sx={{ maxHeight: "420px" }}
                      style={{ overflowY: "auto" }}
                    >
                      <CardMedia
                        sx={{ height: 200 }}
                        image={blog.src}
                        title={blog.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {blog.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {blog.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">
                          <Link to={`/blogs/${blog._id}`}>Detail</Link>
                        </Button>
                        <Button variant="outlined" size="small">
                          <Link to={`/blog/edit/${blog._id}`}>Edit</Link>
                        </Button>
                        <Button
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
                                controller.delete(
                                  endpoints.blogs,
                                  blog._id,
                                  token
                                );
                                setJournalistBlogs((currentBlogs) => {
                                  return currentBlogs.filter(
                                    (x) => x._id != blog._id
                                  );
                                });
                                Swal.fire({
                                  title: "Deleted!",
                                  text: "Your file has been deleted.",
                                  icon: "success",
                                });
                              }
                            });
                          }}
                          variant="outlined"
                          color="error"
                          size="small"
                        >
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default User;
