import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    //console.log(this.state);
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
    //console.log(this.state);

  }
  render() {
    const { authError } = this.props
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.handleSubmit} className="white col l6 s12 offset-l3">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <button className="btn red lighten-1 waves-effect waves-light">Login</button>
              <div className="red-text center">
                { authError ? <p>{ authError }</p> : null}
              </div>
            </div>
          </form>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
