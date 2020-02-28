import React from "react";
import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({ lesson: {} });

export default function Lesson() {
  // const classes = useStyles();
  return (
    <Typography variant="body1" className="Lesson">
      You never know what you can do, until you do it.
      <br />
      Telling yourself what you can and can't do is a recipe for failure.
    </Typography>
  );
}
