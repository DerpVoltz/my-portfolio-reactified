import React from 'react';

function Navigation(props) {

    const { setNavSelected } = props;


    return (
        <div>
            <ul>
                <li>
                    <span onClick={() => setNavSelected('About Me')}>About Me</span>
                </li>
                <li>
                    <span onClick={() => setNavSelected('Portfolio')}>Portfolio</span>
                </li>
                <li>
                    <span onClick={() => setNavSelected('Contact Me')}>Contact Me</span>
                </li>
                <li>
                    <span onClick={() => setNavSelected('Resume')}>Resume</span>
                </li>
            </ul>
        </div>
    )


}

export default Navigation