import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import LoginForm from '../components/LoginForm'
import { login } from  '../actions/auth'
import { authErrors, isAuthenticated } from '../reducers'

const Login = (props) => {
  if(props.isAuthenticated) {
    return (
      <Redirect to='/' />
    )
  } else {
    return (
      <section className="login-page">
        <LoginForm {...props}/>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  errors: authErrors(state),
  isAuthenticated: isAuthenticated(state)
})
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (email, password) => {
    dispatch(login(email, password))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);