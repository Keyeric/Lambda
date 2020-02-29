import React from "react";
import Text from "./Text";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  blog: {
    backgroundColor: "#990000",
    borderTop: "0.3rem solid black",
    paddingTop: "0.5rem",
    borderBottom: "0.3rem solid black",
    paddingBottom: "5rem",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff8f0",
    textShadow: "0.1rem 0.1rem #53131e",
    "& h2": {
      textDecoration: "underline",
      color: "#fff8f0",
      textShadow: "0.1rem 0.1rem #53131e",
      fontSize: "2rem",
      marginBottom: "1.5rem",
      ["@media (max-width: 600px)"]: {
        fontSize: "1.5rem"
      }
    }
  }
});

export default function Blog() {
  const classes = useStyles();
  return (
    <div className={classes.blog}>
      <br />
      <Typography variant="h2">Blog</Typography>
      <Text />
    </div>
  );
}
