import { React, useState } from "react";
import AboutMe from "../AboutMe";
import Resume from "../Resume";
import Portfolio from "../Portfolio";
import Navigation from "../Navigation";
import ContactForm from "../ContactForm";
import Footer from "../Footer";

function Header() {
    const [ navSelected, setNavSelected ] = useState('About Me');

    return(
        <div>
            <div>
                <h1>My Portfolio</h1>
                <Navigation setNavSelected={setNavSelected} />
            </div>
            <div>
                {
                    (navSelected === 'About Me') ? (
                        <AboutMe />
                    ) : (navSelected === 'Resume') ? (
                        <Resume />
                    ) : (navSelected === 'Contact Me') ? (
                        <ContactForm />
                    ) : (
                        <Portfolio />
                    )
                }
                <Footer />
            </div>
        </div>
    )
}

export default Header;
