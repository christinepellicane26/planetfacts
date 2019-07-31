import React from 'react';
import './App.css';
import Planets from './components/planets'; // /planets/planets



class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      planet: undefined,
      diameter: undefined,
      hightemp: undefined,
      lowtemp: undefined,
      yearlength: undefined,
      type: undefined,
      numberofmoons: undefined,

    }
  }

  selectPlanet = (planetName) => {
    this.setState({
      selectedPlanet: planetName
    })
  }

render(){
  return(
    <div className = "container">
    <div> Selected: <span> {this.state.selectedPlanet}</span></div>
  
    <div className = "Solar System"></div>
    <Planet planet='Mercury' "Mercury" selectPlanet = {this.selectPlanet}/>
    <Planet planet= "Venus" selectPlanet = {this.selectPlanet}/>
    <Planet planet= "Earth" selectPlanet = {this.selectPlanet}/>
    <Planet planet= "Mars" selectPlanet = {this.selectPlanet}/>
    <Planet planet= "Jupiter" selectPlanet = {this.selectPlanet}/>
    <Planet planet= "Saturn" selectPlanet = {this.selectPlanet}/>
    <Planet planet= "Uranus" selectPlanet = {this.selectPlanet}/>
    <Planet planet= "Neptune" selectPlanet = {this.selectPlanet}/>
    </div>
  )
  <Images />


export default App;

  // const api_call = await fetch(`https://api....`)
  // const data = await this.api_call.json();


//images: https://epic.gsfc.nasa.gov/about/api
//planet data in French/metric: https://api.le-systeme-solaire.net/en/
//https://api.le-systeme-solaire.net/rest/

