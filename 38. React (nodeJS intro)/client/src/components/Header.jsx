import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../services/redux/slices/userSlice";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News App
        </Typography>
        <Button color="inherit">
          <Link style={{ color: "white" }} to={"/"}>
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link style={{ color: "white" }} to={"/blogs"}>
            Blogs
          </Link>
        </Button>
        {user.id && user.role == "journalist" && (
          <>
            <Button color="inherit">
              <Link style={{ color: "white" }} to={"/add-blog"}>
                Add Blog
              </Link>
            </Button>
          </>
        )}
        {user.id && (
          <>
            <Button color="inherit">
              <Link
                style={{ color: user.role == "client" ? "white" : "red" }}
                to={"/user"}
              >
                User
              </Link>
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
                  confirmButtonText: "Yes, log out!",
                }).then(async (result) => {
                  if (result.isConfirmed) {
                    await dispatch(logout());
                    Cookies.remove('token');
                    Swal.fire({
                      title: "Logged Out!",
                      icon: "success",
                    });
                  }
                });
              }}
              color="inherit"
            >
              Log Out
            </Button>
          </>
        )}
        {!user.id && (
          <>
            <Button color="inherit">
              <Link style={{ color: "white" }} to={"/sign-in"}>
                Sign In
              </Link>
            </Button>
            <Button color="inherit">
              <Link style={{ color: "white" }} to={"/sign-up"}>
                Sign Up
              </Link>
            </Button>
          </>
        )}
      
      </Toolbar>
    </AppBar>
  );
};

export default Header;
