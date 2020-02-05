import React from "react";
import {Card} from "reactstrap";
import Lesson from "./Lesson"

export default function Text(){
    return(
        <Card className= "Text">
            <div className = "Symphinity">
                <h3>Build Week 1: 
                    <br />
                    <br />
                    <img src = "./images/SymphinityBanner.png" alt="Symphinity" />
                </h3>

                <p>
                    I originally wanted to write this on a blog (Medium account linked below), however I did not have a
                    blog at the time, and when i created one, it was a bit late to write in the same manner i would've
                    preffered to.
                <br />
                <br />
                Future blog posts will be posted to Medium and then linked here.
                </p>

                <br />

                <p>
                    For my first build week i was tasked with creating an about page from scratch for the "Spotify Song 
                    Suggester" project. At first i had significant difficulty with this request due to not having a design
                    file or example. However all my troubles were all in my head.
                </p>

                <br />

                <p>
                    Before I even began working, I had already decided that I was so bad at design that this would be a train
                    wreck. It took me a few hours to realize that even though design isnt my best area, doing nothing would be
                    worse as a failing grade is the worst case scenario.
                </p>

                <br />

                <p>
                    So I began designing what I figured would be a "at least I tried" attempt. However as I worked, moving things around and changing sizes and order, I began
                    trying harder and harder to the point where I was not satisfied with the 10 developers (including myself)
                    being paired up in 5 rows of 2.
                </p>

                <br />

                <p>
                    Our Project Lead Andre and our single Back End developer Daniel were the only
                    ones of their titles and i could not stand it. I don't have OCD but I've picked up tendencies from the many
                    people in my life who do. 
                </p>

                <br />

                <p>
                    So I tried my BEST to get those two on their on rows at all display sizes. I tried many things that i won't 
                    get into too many details for, due to the non-programming audience. Just know that i spent at least 6 hours
                    on this one effect. While it may not be glamorous or extravagent, its mine and it got me an A+ on my portion
                    of the grade.
                </p>

                <br />

                <p>
                    I suppose the lesson I learned in this, my very first Build Week in Lambda School, is that: 
                </p>

                <Lesson />

                <div>
                    <img src = "./images/SymphinityAbout.png" alt= "Symphinity example" />
                </div>
                
            </div>
        </Card>
    );
}