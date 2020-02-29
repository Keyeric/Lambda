import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  social: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    margin: "auto",
    padding: "auto",
    ["@media (max-width: 1280px)"]: {
      flexDirection: "column",
      justifyContent: "space-around"
    },
    ["@media (max-width: 600px)"]: {
      display: "none"
    },
    "& div": {
      margin: "0.5rem 0",
      ["@media (max-width: 1280px)"]: {
        fontSize: "1.5rem"
      }
    },
    "& a": {
      textDecoration: "none",
      color: "black",
      textShadow: "0.05rem 0.05rem #fff8f0",
      fontSize: "3rem",
      margin: "auto",
      ["@media (max-width: 600px)"]: {
        padding: "-3rem",
        fontSize: "2.3rem",
        marginLeft: "0",
        marginRight: "0"
      }
    }
  },
  icons: {
    display: "none",
    ["@media (max-width: 600px)"]: {
      display: "flex",
      flexDirection: "row",
      maxWidth: "100%"
    },
    "& div": {
      ["@media (max-width: 600px)"]: {
        maxWidth: "100%",
        width: "50%",
        margin: "1.5rem 1.5rem"
      },
      "& a": {
        ["@media (max-width: 600px)"]: {
          maxWidth: "100%",
          fontSize: "3rem",
          //⬇DOUBLE CHECK THIS LATER
          padding: "0.1rem",
          //⬆DOUBLE CHECK THIS LATER
          margin: "0"
        },
        "& span": {
          display: "none"
        }
      }
    }
  }
});

export default function Social() {
  const classes = useStyles();
  return (
    <section>
      <section className={classes.social}>
        {/* GitHub here */}
        <div>
          <a
            href="https://github.com/Keyeric?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="fab fa-github-square"
          >
            GitHub
          </a>
        </div>

        {/* LinkedIn here */}
        <div>
          <a
            href="https://linkedin.com/in/Keyeric/"
            target="_blank"
            rel="noopener noreferrer"
            className="fab fa-linkedin"
          >
            LinkedIn
          </a>
        </div>

        {/* YouTube here */}
        <div>
          <a
            href="https://youtube.com/c/GothKazu"
            target="_blank"
            rel="noopener noreferrer"
            className="fab fa-youtube"
          >
            YouTube
          </a>
        </div>

        {/* Medium here */}
        <div>
          <a
            href="https://medium.com/@keyeric"
            target="_blank"
            rel="noopener noreferrer"
            className="fab fa-medium"
          >
            edium
          </a>
        </div>
      </section>

      <section className={classes.icons}>
        <div>
          {/* GitHub here */}
          <div>
            <a
              href="https://github.com/Keyeric?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="fab fa-github-square"
              a
            >
              <span>Link to Key eric's Github repositories</span>
            </a>
          </div>

          {/* LinkedIn here */}
          <div>
            <a
              href="https://linkedin.com/in/Keyeric/"
              target="_blank"
              rel="noopener noreferrer"
              className="fab fa-linkedin"
              a
            >
              <span>Link to Key eric's Linked in profile</span>
            </a>
          </div>
        </div>
        <div>
          {/* YouTube here */}
          <div>
            <a
              href="https://youtube.com/c/GothKazu"
              target="_blank"
              rel="noopener noreferrer"
              className="fab fa-youtube"
              a
            >
              <span>Link to Key eric's you tube page</span>
            </a>
          </div>

          {/* Medium here */}
          <div>
            <a
              href="https://medium.com/@keyeric"
              target="_blank"
              rel="noopener noreferrer"
              className="fab fa-medium"
              a
            >
              <span>Link to Key eric's medium account</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
