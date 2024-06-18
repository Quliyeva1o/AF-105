import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import controller from "../services/api/requests";
import { endpoints } from "../services/api/constants";
import { Grid, TextField, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const Blogs = () => {
  const token = Cookies.get("token");
  const [blogs, setBlogs] = useState([]);
  const [query, setQuery] = useState("");
  const user = useSelector((state) => state.user);

  useEffect(() => {
    controller.getAll(endpoints.blogs, token).then((resp) => {
      setBlogs([...resp.data]);
    });
  }, [token]);
  const filteredBlogs = blogs.filter((x) =>
    x.title.toLowerCase().trim().includes(query.toLowerCase().trim())
  );
  return (
    <div style={{ width: "80%", margin: "20px auto" }}>
      <h2 style={{ textAlign: "center" }}>Blogs</h2>
      <TextField
        style={{ marginBottom: "20px" }}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search blog"
      />
      <Grid container spacing={6}>
        {filteredBlogs &&
          filteredBlogs.map((blog) => {
            return (
              <Grid item key={blog._id} xs={12} sm={12} md={6} lg={4} xl={4}>
                <Card sx={{ maxHeight: "420px" }} style={{ overflowY: "auto" }}>
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
                    {token && (
                      <Button
                        onClick={() => {
                          let updatedLikes = [...blog.likes];
                          if (blog.likes.find((x) => x.userId == user.id)) {
                            updatedLikes = blog.likes.filter(
                              (x) => x.userId !== user.id
                            );
                            Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: "blog disliked",
                              showConfirmButton: false,
                              timer: 1000,
                            });
                          } else {
                            updatedLikes.push({ userId: user.id });
                            Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: "blog liked",
                              showConfirmButton: false,
                              timer: 1000,
                            });
                          }
                          setBlogs((currentBlogs) => {
                            return currentBlogs.map((x) => {
                              if (x._id == blog._id) {
                                x.likes = [...updatedLikes];
                              }
                              return x;
                            });
                          });
                          controller.patch(endpoints.blogs, blog._id, {
                            likes: [...updatedLikes],
                          });
                        }}
                        style={{ color: "red" }}
                        size="small"
                      >
                        {blog.likes.find((x) => x.userId == user.id) ? (
                          <FavoriteIcon />
                        ) : (
                          <FavoriteBorderIcon />
                        )}
                        <sup>{blog?.likes?.length}</sup>
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Blogs;
