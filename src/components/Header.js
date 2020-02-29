import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  top: {
    textShadow: "0.1rem 0.1rem #990000",
    "& a": {
      color: "white",
      textDecoration: "none",
      letterSpacing: "0.1rem",
      margin: "150px",
      padding: "10px",
      fontSize: "3rem",
      ["@media (max-width: 500px)"]: {
        fontSize: "2rem",
        margin: "0",
        padding: "0"
      }
    }
  }
});

export default function Header() {
  const classes = useStyles();
  return (
    <header className={classes.top}>
      {/* Beginning of the site */}
      <br />
      <Typography varaint="h1">
        <a href="https://keyeric.com">Welcome</a>
      </Typography>
    </header>
  );
}
