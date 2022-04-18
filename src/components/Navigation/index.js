import React from 'react';

function Navigation(props) {

    const { setNavSelected } = props;


    return (
        <nav className='align-items-end col container'>
            <ul className='nav-list row'>
                <li className='col'>
                    <span onClick={() => setNavSelected('About Me')}>About Me</span>
                </li>
                <li className='col'>
                    <span onClick={() => setNavSelected('Portfolio')}>Portfolio</span>
                </li>
                <li className='col'>
                    <span onClick={() => setNavSelected('Contact Me')}>Contact Me</span>
                </li>
                <li className='col'>
                    <span onClick={() => setNavSelected('Resume')}>Resume</span>
                </li>
            </ul>
        </nav>
    )


}

export default Navigation