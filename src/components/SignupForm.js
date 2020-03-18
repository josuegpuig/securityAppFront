import React, { Component } from "react";

class SignupForm extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    gender: '',
    anonymity: false
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
    let profile = {
      gender: this.state.gender,
      anonymity: this.state.anonymity
    };
    console.log(this.state);
    console.log(profile);
    //first_name, last_name, email, password, profile
    this.props.onSubmit(this.state.first_name, this.state.last_name, this.state.email, this.state.password, profile)
    console.log(this.props.errors);
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
        {JSON.stringify(this.props.errors)}
        <div className="field">
          <label className="label">Nombre(s)</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" name="first_name" onChange={this.handleInputChange} />
          </div>
        </div>

        <div className="field">
          <label className="label">Apellidos</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" name="last_name" onChange={this.handleInputChange} />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Email input" name="email" onChange={this.handleInputChange} />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right is-hidden">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p className="help is-success is-hidden">This username is available</p>
          <p className="help is-danger is-hidden">This email is invalid</p>
        </div>

        <div className="field">
          <label className="label">Contraseña</label>
          <div className="control">
            <input className="input" type="password" placeholder="Password" name="password" onChange={this.handleInputChange} />
          </div>
        </div>

        <div className="field">
          <label className="label">Género</label>
          <div className="control">
            <div className="select">
              <select name="gender" onChange={this.handleInputChange}>
                <option value=''>Elige una opción</option>
                <option value='1'>Hombre</option>
                <option value='2'>Mujer</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Anonimidad</label>
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" name="anonymity" onChange={this.handleInputChange} />
              No quiero que mi nombre se muestre en mis evaluaciones
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={this.onSubmit}>Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;