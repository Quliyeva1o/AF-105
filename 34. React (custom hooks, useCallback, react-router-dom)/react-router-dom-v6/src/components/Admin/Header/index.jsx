import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <header>
      <AppBar style={{ backgroundColor: "red" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React-Router-Dom (Admin)
          </Typography>
          <Button color="inherit">
            <Link to={"/admin"}>Dashboard</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/admin/add-category"}>Add Category</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/admin/categories"}>Categories</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default AdminHeader;
