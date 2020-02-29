import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  top: {
    textShadow: "0.1rem 0.1rem #990000",
    "& a": {
      color: "white",
      textDecoration: "none",
      fontSize: "4rem",
      ["@media (max-width: 960px)"]: {
        fontSize: "3.5rem"
      },
      ["@media (max-width: 600px)"]: {
        fontSize: "3rem"
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
      <Typography variant="h1">
        <a href="https://keyeric.com">Welcome</a>
      </Typography>
    </header>
  );
}
