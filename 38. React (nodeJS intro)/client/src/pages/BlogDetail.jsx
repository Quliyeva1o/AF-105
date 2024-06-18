import { Link, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import controller from "../services/api/requests";
import { endpoints } from "../services/api/constants";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Swal from "sweetalert2";
import moment from "moment";

const BlogDetail = () => {
  const { id } = useParams();
  const token = Cookies.get("token");
  const user = useSelector((state) => state.user);
  const [blog, setBlog] = useState({});
  const [comment, setComment] = useState("");
  const [isSensitive, setIsSensitive] = useState(false);
  const [users, setUsers] = useState([]);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    controller.getOne(endpoints.blogs, id, token).then((res) => {
      setBlog({ ...res.data });
    });
    controller.getAll(endpoints.tags, token).then((res) => {
      setTags([...res.data]);
    });
  }, [token, id]);

  useEffect(() => {
    controller.getAll(endpoints.users, token).then((res) => {
      setUsers([...res.data]);
    });
  }, [token]);

  return (
    <div style={{ width: "80%", margin: "20px auto" }}>
      <Grid container spacing={6}>
        <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
          <Card>
            <CardMedia
              sx={{ height: 250 }}
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
              <hr style={{ display: "block", margin: "10px 0" }} />
              {blog?.tagIds?.map((tagId) => {
                const currentTag = tags?.find((x) => x._id == tagId);
                return (
                  <span
                    style={{
                      marginRight: "12px",
                      color: "gray",
                      fontWeight: "bold",
                    }}
                    key={tagId}
                  >
                    #{currentTag?.title}
                  </span>
                );
              })}
              <hr style={{ display: "block", margin: "10px 0" }} />
              <i>
                by{" "}
                <b>{users.find((x) => x._id == blog.journalistId)?.username}</b>
              </i>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link to={"/user"}>Go Back</Link>
              </Button>
              <div
                style={{ color: "red", margin: "0px 13px", display: "flex" }}
              >
                <FavoriteIcon />
                <span>{blog?.likes?.length}</span>
              </div>
              <ChatBubbleIcon /> <span>{blog?.comments?.length}</span>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
          <h3 style={{ textAlign: "center" }}>Comments Section</h3>
          {/* comment form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (token) {
                const newComment = {
                  userId: user.id,
                  content: comment,
                  createdAt: new Date(),
                  isSensitive: isSensitive,
                };
                controller.patch(endpoints.blogs, blog._id, {
                  comments: [...blog.comments, newComment],
                });
                setBlog((currentBlog) => {
                  return {
                    ...currentBlog,
                    comments: [...currentBlog.comments, newComment],
                  };
                });
                setComment("");
                setIsSensitive(false);
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "comment posted successfully",
                  showConfirmButton: false,
                  timer: 1000,
                });
              } else {
                Swal.fire({
                  position: "top-end",
                  icon: "warning",
                  title: "log In to add comment",
                  showConfirmButton: false,
                  timer: 1000,
                });
              }
            }}
            style={{ display: "flex", gap: "14px", marginTop: "10px" }}
          >
            <TextField
              onChange={(e) => setComment(e.target.value)}
              placeholder="share comment"
              type="text"
              value={comment}
              required
            />
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    value={isSensitive}
                    onChange={(e) => {
                      setIsSensitive(e.target.checked);
                    }}
                  />
                }
                label="Is Sensitive"
              />
            </FormGroup>
            <Button type="submit" color="warning" variant="contained">
              share
            </Button>
          </form>
          {/* comments */}
          <List
            sx={{
              width: "100%",
              maxHeight: "500px",
              overflowY: "auto",
              bgcolor: "background.paper",
            }}
          >
            {blog.comments &&
              blog.comments.toReversed().map((comment, idx) => {
                const currentUser = users.find((x) => x._id == comment.userId);
                return (
                  currentUser && (
                    <React.Fragment key={idx}>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            alt={currentUser.username}
                            src={currentUser.src}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={currentUser.username}
                          secondary={
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <div>
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                ></Typography>
                                <span
                                  style={{
                                    cursor: "pointer",
                                    filter: comment.isSensitive
                                      ? "blur(2px)"
                                      : "blur(0px)",
                                  }}
                                >
                                  {" "}
                                  — {comment.content}
                                </span>
                                <br />
                                <i>
                                  {moment(comment.createdAt).format(
                                    "MM Do YY, h:mm a"
                                  )}
                                </i>
                              </div>
                              {user.id == blog.journalistId &&
                                comment.userId != user.id && (
                                  <Button
                                    onClick={() => {
                                      Swal.fire({
                                        title: "Report User",
                                        input: "text",
                                        inputAttributes: {
                                          autocapitalize: "off",
                                        },
                                        showCancelButton: true,
                                        confirmButtonText: "Report",
                                        showLoaderOnConfirm: true,
                                        preConfirm: async (reason) => {
                                          controller.post(endpoints.reports, {
                                            reportId: user.id,
                                            reportedId: comment.userId,
                                            reason: reason,
                                            comment: comment.content
                                          }, token);
                                        },
                                        allowOutsideClick: () =>
                                          !Swal.isLoading(),
                                      }).then((result) => {
                                        if (result.isConfirmed) {
                                          Swal.fire({
                                            title: `User Reported Successfully`,
                                          });
                                        }
                                      });
                                    }}
                                    variant="outlined"
                                    color="primary"
                                  >
                                    report
                                  </Button>
                                )}
                              {comment.userId == user.id && (
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
                                        const updatedComments = [
                                          ...blog.comments.filter(
                                            (x) =>
                                              x.createdAt != comment.createdAt
                                          ),
                                        ];
                                        controller.patch(
                                          endpoints.blogs,
                                          blog._id,
                                          {
                                            comments: updatedComments,
                                          }
                                        );
                                        setBlog((currentBlog) => {
                                          return {
                                            ...currentBlog,
                                            comments: updatedComments,
                                          };
                                        });
                                        Swal.fire({
                                          title: "Deleted!",
                                          text: "Your file has been deleted.",
                                          icon: "success",
                                        });
                                      }
                                    });
                                  }}
                                  variant="contained"
                                  color="error"
                                >
                                  delete
                                </Button>
                              )}
                            </div>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </React.Fragment>
                  )
                );
              })}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default BlogDetail;
