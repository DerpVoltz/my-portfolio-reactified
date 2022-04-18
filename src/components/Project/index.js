import React from "react";

function Project(props) {
    const { project } = props

    return (
        <div>
            <p>{project.name}</p>
            <a href={project.github}>GitHub</a>
            <a href={project.website}>Website</a>
            <img src={require(`../../assets/images/${project.name}.png`)} alt={project.name} />
        </div>
    )
}

export default Project;