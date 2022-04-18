import React from "react";

function Project(props) {
    const { project } = props

    return (
        <div className="col-6 project">
            <div className="card">
                <img src={require(`../../assets/images/${project.name}.png`)} className="card-img-top" alt={project.name} />
                <div className="card-body">
                    <p className="card-title">{project.name}</p>
                    <a className="card-text" href={project.github}>GitHub</a>
                    <a className="card-text" href={project.website}>Website</a>
                </div>
            </div>
        </div>
    )
}

export default Project;