import React from "react";
import Project from "../Project";

function Portfolio() {
    const projects = [
        {
            name: 'Run Buddy',
            website: 'https://derpvoltz.github.io/run-buddy/',
            github: 'https://github.com/DerpVoltz/run-buddy',
        },
        {
            name: 'Robot Gladiators',
            website: 'https://derpvoltz.github.io/robot-gladiators/',
            github: 'https://github.com/DerpVoltz/robot-gladiators',
        },
        {
            name: 'Park Finder',
            website: 'https://patty345.github.io/park-finder/',
            github: 'https://github.com/patty345/park-finder',
        },
        {
            name: 'Weather Dashboard',
            website: 'https://derpvoltz.github.io/weather-forecast-/',
            github: 'https://github.com/DerpVoltz/weather-forecast-',
        },
        {
            name: 'Homework Tracker',
            website: 'https://github.com/DaniDelia253/homework-tracker',
            github: 'https://quiet-island-37482.herokuapp.com/',
        },
        {
            name: 'News For You',
            website: 'https://nameless-fjord-29662.herokuapp.com/',
            github: 'https://github.com/DerpVoltz/news-for-you'
        }
    ]

    return(
        <div className="container-fluid">
            <h3>Portfolio</h3>
            <div className="row">
            {
                projects.map((project) => (
                    <Project key={project.name} project = {project} />
                ))
            }
            </div>
        </div>
    )
}

export default Portfolio;