import React from "react";
import {Link} from "react-router-dom";

export default function Social(){
    return(
        <section className="Social">

            {/* GitHub here */}
            <div>
                <Link to="https://github.com/Keyeric?tab=repositories" target="_blank" className="fab fa-github-square">GitHub</Link>
            </div>

            {/* LinkedIn here */}
            <div>
                <Link to="https://linkedin.com/in/Keyeric/" target="_blank" className="fab fa-linkedin">LinkedIn</Link>
            </div>

            {/* YouTube here */}
            <div>
                <Link to="https://youtube.com/c/GothKazu" target="_blank" className="fab fa-youtube">YouTube</Link>
            </div>

            {/* Medium here */}
            <div>
                <Link to="https://medium.com/@keyeric" target="_blank" className="fab fa-medium">Medium</Link>
            </div>
                
        </section>
    );
}