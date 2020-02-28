import React from "react";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({ root: {} });

export default function Social() {
  // const classes = useStyles();
  return (
    <section>
      <section className="Social">
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

      <section className="Social Icons">
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
