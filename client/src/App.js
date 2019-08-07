import React, { Component } from 'react';
import Planets from './planets/planets';
// import Routes from './Routes'


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
          <Planets planet="venus" selectPlanet={this.selectPlanet} />
          <Planets planet="earth" selectPlanet={this.selectPlanet} />
          <Planets planet="mars" selectPlanet={this.selectPlanet} />
          <Planets planet="jupiter" selectPlanet={this.selectPlanet} />
          <Planets planet="saturn" selectPlanet={this.selectPlanet} />
          <Planets planet="uranus" selectPlanet={this.selectPlanet} />
          <Planets planet="neptune" selectPlanet={this.selectPlanet} />

        </div>
      </div>

      //for resizing purposes:

{/* <div class="img" style="background-image:url('https://solarsystem.nasa.gov/system/feature_items/images/18_mercury_new.png');"></div>
<div class="img" style="background-image:url('https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png');"></div>
<div class="img" style="background-image:url('https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png');"></div>
<div class="img" style="background-image:url('https://solarsystem.nasa.gov/system/feature_items/images/19_mars.png');"></div>
<div class="img" style="background-image:url('https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png');"></div>
<div class="img" style="background-image:url('https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png');"></div>
<div class="img" style="background-image:url('https://solarsystem.nasa.gov/system/feature_items/images/29_uranus.png');"></div>
<div class="img" style="background-image:url('https://solarsystem.nasa.gov/system/stellar_items/list_view_images/90_neptune_480x320.jpg');"></div>    */}
    
    )
  }
}


export default App;

  // const api_call = await fetch(`https://api....`)
  // const data = await this.api_call.json();

//images: https://epic.gsfc.nasa.gov/about/api
//planet data in French/metric: https://api.le-systeme-solaire.net/en/
//https://api.le-systeme-solaire.net/rest/

