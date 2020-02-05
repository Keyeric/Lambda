import React from "react"; 

export default function Header(){
    return(
        <header className="top">
            <img className="menu-button" src="./images/menu.png" alt="Menu button"/>
            {/* Beginning of the site */}
            <br />

            <h1><a href="https://keyeric.com">Welcome to<br />Key's webpage!!</a></h1>
        </header>
    );
}