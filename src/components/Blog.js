import React from "react";
import Text from "./Text";
import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({ blog: {} });

export default function Blog() {
  // const classes = useStyles();
  return (
    <div className="Blog">
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
        Blog
      </Typography>
      <Text />
    </div>
  );
}
