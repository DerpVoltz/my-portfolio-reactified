import React from 'react';

function Navigation(props) {

    const { setNavSelected } = props;


    return (
        <div>
            <ul>
                <li>
                    <span onClick={() => setNavSelected('about')}>About Me</span>
                </li>
                <li>
                    <span onClick={() => setNavSelected('projects')}>Projects</span>
                </li>
                <li>
                    <span onClick={() => setNavSelected('contact')}>Contact Me</span>
                </li>
                <li>
                    <span onClick={() => setNavSelected('resume')}>Resume</span>
                </li>
            </ul>
        </div>
    )


}

export default Navigation