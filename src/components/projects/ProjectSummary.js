import React from 'react'
import { Link } from 'react-router-dom'

const ProjectSummary = ({project}) => {
  //console.log(project);
  let projectID = `/project/${project.id}`;
  return (
    <div className="card grey lighten-5 z-depth-2 project-summary">
      <div className="card-content grey-text text-darken-3">
        <Link to={projectID}><span className="card-title">{project.title}</span></Link>
        <p>Posted by the Admin</p>
        <p className="grey-text font-small">3rd September, 5am</p>
      </div>
    </div>
  )
}

export default ProjectSummary