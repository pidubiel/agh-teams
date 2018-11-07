import React from 'react'
import { connect } from 'react-redux'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  //console.log(props);
  return (
    <div className="container section project-details">
      <div className="card grey lighten-5 z-depth-0">
        <div className="card-content">
          <span className="card-title">{props.projects[id-1].title}</span>
          <p>{props.projects[id-1].content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the Admin</div>
          <div className="font-small">2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(ProjectDetails)