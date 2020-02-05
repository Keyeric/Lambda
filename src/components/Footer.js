import React from "react";
import {Link} from "react-router-dom";

export default function Footer(){
    return(
        <footer>
            <address>

                <Link to="mailto: keyeric.bristol@gmail.com">keyeric.bristol@gmail.com</Link>
                <br />

                <Link to="tel:(240) 528-0810">(240) 528-0810</Link>
                <br />

                Rockville, Maryland, USA
                <br />

            </address>
        </footer>
    );
}