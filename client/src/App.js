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
    
    
    <div className="Solar System">
     
    <Planets planet="mercury" selectPlanet={this.selectPlanet} />
    <Planets planet= "venus" selectPlanet = {this.selectPlanet} />
    <Planets planet= "earth" selectPlanet = {this.selectPlanet} />
    <Planets planet= "mars" selectPlanet = {this.selectPlanet} />
    <Planets planet= "jupiter" selectPlanet = {this.selectPlanet} />
    <Planets planet= "saturn" selectPlanet = {this.selectPlanet} />
    <Planets planet= "uranus" selectPlanet = {this.selectPlanet} />
    <Planets planet= "neptune" selectPlanet = {this.selectPlanet} /> 
      
    
      </div>  
    </div>
    )
  }
}

export default App;

  // const api_call = await fetch(`https://api....`)
  // const data = await this.api_call.json();

//images: https://epic.gsfc.nasa.gov/about/api
//planet data in French/metric: https://api.le-systeme-solaire.net/en/
//https://api.le-systeme-solaire.net/rest/

