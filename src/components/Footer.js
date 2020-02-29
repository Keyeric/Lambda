import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  address: {
    fontSize: "0.9rem",
    paddingTop: "5rem",
    backgroundImage: "linear-gradient(#990000, #2f2f31)",
    "& a": {
      textDecoration: "none",
      color: "black",
      ["@media (max-width: 1280px)"]: {
        fontSize: "1.2rem"
      },
      ["@media (max-width: 600px)"]: {
        fontSize: "1rem"
      }
    }
  }
});

export default function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <address className={classes.address}>
        <a href="mailto: keyeric.bristol@gmail.com">
          keyeric.bristol@gmail.com
        </a>
        <br />
        <a href="tel:(240) 528-0810">(240) 528-0810</a>
        <br />
        Phoenix, Arizona
        <br /> USA
        <br />
      </address>
    </footer>
  );
}
