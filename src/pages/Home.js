import React, { Component } from "react";
import axios from 'axios';

import Cdmx from '../assets/img/cdmx.png';

class Home extends Component {

  state = {
    stateData: {},
    cities: []
  }

  componentDidMount() {
    axios.get(`https://167.172.142.59/countries/1/states/`)
      .then(res => {
        console.log(res.data);
        this.setState({
          stateData: res.data[0]
        })
      })
    axios.get(`https://167.172.142.59/countries/1/states/1/cities/`)
      .then(res => {
        console.log(res.data);
        this.setState({
          cities: res.data
        })
      })
  }

  render() {
    const { stateData, cities } = this.state;
    return (
      <section className="section-home">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="title">{ stateData.name }</p>
              <div className="control has-icons-left">
                <div className="select is-medium">
                  <select>
                    <option defaultValue value=''>Alcaldías</option>
                    {cities.map(city =>
                      <option key={city.id} value={city.id}>{city.name}</option>
                    )};
                  </select>
                </div>
                <span className="icon is-left">
                  <i className="fas fa-globe"></i>
                </span>
              </div>
              <figure className="image state-image">
                <img src={Cdmx} />
              </figure>
            </div>
          </div>
          <div className="tile is-6 is-vertical is-parent">
            <div className="tile is-child box">
              <p className="title">One</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
            </div>
            <div className="tile is-child box">
              <p className="title">Two</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;