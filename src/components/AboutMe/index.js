import React from "react";

function AboutMe() {

    return(
        <div>
            <h1>About Me</h1>
            <img className="my-img" alt="Picture of Zane Scheel" src={require('../../assets/images/my-photo.JPG')} />
            <p>
            Full-stack web developer, working towards a full-stack developer certificate from Rice University/2U. Learned skills in JavaScript, HTML, CSS,
            and Node.js. Known as a problem solver, and team player that can assist teammates, as well as complete what was assigned to me.
            With each project I complete, my aim is to fix everyday problems, and benefit the user in any way I can. I applied Express.js, and MySql in a recent project.
            I worked on a team of four to develop an app that helps users find local parks, and learn the weather in the area so that they can plan a day in the park.
            I am excited to use my skills as part of a professional, hard-working team geared towards building the best websites in the continually expanding internet.
            </p>
        </div>
    )

}

export default AboutMe;