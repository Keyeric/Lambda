import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Lesson from "./Lesson";

const useStyles = makeStyles({
  text: {
    width: "80%",
    background: "black",
    padding: "3%"
  },
  symphinity: {
    color: "#fff8f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "5rem",
    ["@media (max-width: 1280px)"]: {
      flexDirection: "column"
    },
    ["@media (max-width: 600px)"]: {
      fontSize: "1rem"
    },
    "& h4": {
      fontSize: "1.4rem"
    },
    "& p": {
      ["@media (max-width: 960px)"]: {
        fontSize: "0.9rem"
      },
      ["@media (max-width: 600px)"]: {
        fontSize: "0.6rem"
      }
    }
  }
});

export default function Text() {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.text}>
      <CardContent className={classes.symphinity}>
        <Typography variant="h4">
          Build Week 1:
          <br />
          <img src="./images/SymphinityBanner.png" alt="Symphinity" />
        </Typography>

        <Typography variant="body1">
          I originally wanted to write this on a blog (Medium account linked
          below), however I did not have a blog at the time, and when I created
          one, it was a bit late to write in the same manner that I would've
          preferred to.
          <br />
          Future blog posts will be posted to Medium and then linked here.
        </Typography>

        <br />

        <Typography variant="body1">
          For my first build week I was tasked with creating an about page from
          scratch for the "Spotify Song Suggester" project. At first I had
          significant difficulty with this request due to not having a design
          file or example. However all my troubles were all in my head.
        </Typography>

        <br />

        <Typography variant="body1">
          Before I even began working, I had already decided that I was so bad
          at design that this would be a train wreck. It took me a few hours to
          realize that even though design isn't my best area, doing nothing
          would be worse as a failing grade is the worst case scenario.
        </Typography>

        <br />

        <Typography variant="body1">
          So I began designing what I figured would be a "at least I tried"
          attempt. However as I worked, moving things around and changing sizes
          and order, I began trying harder and harder to the point where I was
          not satisfied with the 10 developers (including myself) being paired
          up in 5 rows of 2.
        </Typography>

        <br />

        <Typography variant="body1">
          Our Project Lead Andre and our single Back End developer Daniel were
          the only ones of their titles and I could not stand it. I don't have
          OCD but I've picked up tendencies from the many people in my life who
          do.
        </Typography>

        <br />

        <Typography variant="body1">
          So I tried my BEST to get those two on their own rows at all display
          sizes. I tried many things that I won't get into too many details for,
          due to the non-programming audience. Just know that I spent at least 6
          hours on this one effect. While it may not be glamorous or
          extravagant, its mine and it got me an A+ on my portion of the grade.
        </Typography>

        <br />

        <Typography variant="body1">
          I suppose the lesson I learned in this, my very first Build Week in
          Lambda School, is that:
        </Typography>

        <Lesson />

        <div>
          <img src="./images/SymphinityAbout.png" alt="Symphinity example" />
        </div>
      </CardContent>
    </Card>
  );
}
