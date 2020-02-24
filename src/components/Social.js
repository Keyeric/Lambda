import React from "react";

export default function Social(){
    return(
        <section className="Social">

            {/* GitHub here */}
            <div>
                <a href="https://github.com/Keyeric?tab=repositories" target="_blank" rel="noopener noreferrer" className="fab fa-github-square">GitHub</a>
            </div>

            {/* LinkedIn here */}
            <div>
                <a href="https://linkedin.com/in/Keyeric/" target="_blank" rel="noopener noreferrer" className="fab fa-linkedin">LinkedIn</a>
            </div>

            {/* YouTube here */}
            <div>
                <a href="https://youtube.com/c/GothKazu" target="_blank" rel="noopener noreferrer" className="fab fa-youtube">YouTube</a>
            </div>

            {/* Medium here */}
            <div>
                <a href="https://medium.com/@keyeric" target="_blank" rel="noopener noreferrer" className="fab fa-medium">Medium</a>
            </div>
                
        </section>
    );
}