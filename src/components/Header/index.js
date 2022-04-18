import { React, useState } from "react";
import AboutMe from "../AboutMe";
import Resume from "../Resume";
import Project from "../Projects";
import Navigation from "../Navigation";
import ContactForm from "../ContactForm";

function Header() {
    const [ navSelected, setNavSelected ] = useState('about');

    return(
        <diV>
            <div>
                <h1>My Portfolio</h1>
                <Navigation setNavSelected={setNavSelected} />
            </div>
            <div>
                {
                    (navSelected === 'about') ? (
                        <AboutMe />
                    ) : (navSelected === 'resume') ? (
                        <Resume />
                    ) : (navSelected === 'contact') ? (
                        <ContactForm />
                    ) : (
                        <Project />
                    )
                }
            </div>
        </diV>
    )
}

export default Header;
