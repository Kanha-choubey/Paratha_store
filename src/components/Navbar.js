import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Image from "../Image/2085.jpg";

export default function Navbar() {
  const Items = useSelector((state) => state.cart);

  return (
    <Box className="nav" sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "blue" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={Image} height={30} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/"}>Apna-store</Link>
          </Typography>
          <Button color="inherit">
            <Link to={"/Cart"}>CART ( {Items.length} ) </Link>{" "}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
