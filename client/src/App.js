import React, { Component } from 'react';
import './App.css';
import './images.js';
import Planet from './planets/planets'; // /planets/planets


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: undefined,
      radiusmiles: undefined,
      hightemp: undefined,
      lowtemp: undefined,
      year: undefined,
      type: undefined,
      numberofmoons: undefined,

    }
  }
  selectPlanet = (planetName) => {
    this.setState({
      name: planetName
    })
  }

  render() {
    return (
      <div className="container">
        <div> Selected: <span> {this.state.selectedPlanet}</span></div>

        <div className="Solar System"></div>
        <Planet planet='Mercury' selectPlanet={this.selectPlanet} />
        {/* <Planet planet= "Venus" selectPlanet = {this.selectPlanet}/>
    <Planet planet= "Earth" selectPlanet = {this.selectPlanet}/>
    <Planet planet= "Mars" selectPlanet = {this.selectPlanet}/>
    <Planet planet= "Jupiter" selectPlanet = {this.selectPlanet}/>
    <Planet planet= "Saturn" selectPlanet = {this.selectPlanet}/>
    <Planet planet= "Uranus" selectPlanet = {this.selectPlanet}/>
    <Planet planet= "Neptune" selectPlanet = {this.selectPlanet}/> */}
      </div>
    )
    // <Images />
  }
}

export default App;

  // const api_call = await fetch(`https://api....`)
  // const data = await this.api_call.json();

//images: https://epic.gsfc.nasa.gov/about/api
//planet data in French/metric: https://api.le-systeme-solaire.net/en/
//https://api.le-systeme-solaire.net/rest/

