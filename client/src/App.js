import React, { Component } from 'react';
import './App.css';
import './images.js';
import Planets from './planets/planets'; 


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

      // <Planets planet="Mercury" />
      //  
    <div className="Solar System"></div>
    <Planets planet='Mercury' selectPlanet={this.selectPlanet} />
    <Planets planet= "Venus" selectPlanet = {this.selectPlanet}/>
    <Planets planet= "Earth" selectPlanet = {this.selectPlanet}/>
    <Planets planet= "Mars" selectPlanet = {this.selectPlanet}/>
    <Planets planet= "Jupiter" selectPlanet = {this.selectPlanet}/>
    <Planets planet= "Saturn" selectPlanet = {this.selectPlanet}/>
    <Planets planet= "Uranus" selectPlanet = {this.selectPlanet}/>
    <Planets planet= "Neptune" selectPlanet = {this.selectPlanet}/>
      </div>
    )
  //  <Images />
  }
}

export default App;

  // const api_call = await fetch(`https://api....`)
  // const data = await this.api_call.json();

//images: https://epic.gsfc.nasa.gov/about/api
//planet data in French/metric: https://api.le-systeme-solaire.net/en/
//https://api.le-systeme-solaire.net/rest/

