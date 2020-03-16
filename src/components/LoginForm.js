import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  handleInputChange = (event) => {
    const target = event.target,
          value = target.type === 
            'checkbox' ? target.checked : target.value,
          name = target.name
    this.setState({
      [name]: value
    });
  }
  onSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.email, this.state.password)
  }

  componentDidMount() {
    //console.log(this);
  }

  render() {
    const testButton = () => {
      alert('HOLA');
    }
    return (
      <div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="email" name="email" placeholder="Email" onChange={this.handleInputChange} />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="password" name="password" placeholder="Password" onChange={this.handleInputChange} />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success" onClick={this.onSubmit}>
              Login
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default LoginForm;