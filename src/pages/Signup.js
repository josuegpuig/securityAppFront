import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import SignupForm from '../components/SignupForm'
import { register } from  '../actions/register'
import { registerErrors, isAuthenticated } from '../reducers'

const Signup = (props) => {
  if(props.isAuthenticated) {
    return (
      <Redirect to='/' />
    )
  } else {
    return (
      <section className="login-page">
        <SignupForm {...props}/>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  errors: registerErrors(state),
  isAuthenticated: isAuthenticated(state)
})
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (first_name, last_name, email, password, profile) => {
    dispatch(register(first_name, last_name, email, password, profile))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);