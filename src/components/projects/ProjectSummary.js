import React from 'react'
// import { Link } from 'react-router-dom'

const ProjectSummary = ({project}) => {
  //console.log(project);
  //let projectID = `/project/${project.id}`;
  return (
    <div className="card grey lighten-5 z-depth-2 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by the Admin</p>
        <p className="grey-text font-small">3rd September, 5am</p>
      </div>
    </div>
  )
}

// const ProjectSummary = ({project}) => {
//   return (
//     <div className="card z-depth-0 project-summary">
//       <div className="card-content grey-text text-darken-3">
//         <span className="card-title ">{project.title}</span>
//         <p>Posted by The Net Ninja</p>
//         <p className="grey-text">3rd September, 2am</p>
//       </div>
//     </div>
//   )
// }

export default ProjectSummary