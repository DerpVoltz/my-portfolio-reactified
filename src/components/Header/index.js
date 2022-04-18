import '../../App.css'
import React, { useState, useEffect } from "react";
import AboutMe from "../AboutMe";
import Resume from "../Resume";
import Portfolio from "../Portfolio";
import Navigation from "../Navigation";
import ContactForm from "../ContactForm";
import Footer from "../Footer";

function Header() {
    useEffect(() => {
        document.title = `${navSelected}`
    })
    const [ navSelected, setNavSelected ] = useState('About Me');

    return(
        <div>
            <header className='container-fluid'>
                <div className='header-items row'>
                    <h1 className='col'>Zane Scheel</h1>
                    <Navigation setNavSelected={setNavSelected} />
                </div>
            </header>
            <main className='container'>
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
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Header;
