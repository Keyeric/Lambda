import React from "react";
import Social from "./Social";
import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({ media: {} });

export default function Media() {
  // const classes = useStyles();
  return (
    <section className="Media">
      <br />
      <Typography
        variant="h2"
        style={{
          textDecoration: "underline",
          color: "#fff8f0",
          textShadow: "0.1rem 0.1rem #53131e",
          fontSize: "2rem",
          marginBottom: "1.5rem"
        }}
      >
        Social Media
      </Typography>
      <Social />
      <br />
    </section>
  );
}
