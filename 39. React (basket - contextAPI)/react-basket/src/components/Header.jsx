import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {BasketContext} from "../context/basketContext";

const Header = () => {
  const{basket} = useContext(BasketContext);
  return (
    <>
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
            Basket App
          </Typography>
          <Button color="inherit">
            <Link style={{color:'white'}} to={"/"}>Home</Link>
          </Button>
          <Button color="inherit">
            <Link style={{color:'white'}} to={"/basket"}>Basket <sup>{basket.length}</sup></Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
