import React, { Component } from 'react';


class Planets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: []
    }
  }

  async componentDidMount() {
    const res = await fetch(`./api/planets/${this.props.planet}`)
    // ${this.props.planet}
    const data = await res.json();
    this.setState({
      planets: data
    })
    // console.log(data);
    // console.log(this.state.planets)
  }

  render() {
    if(!this.state.planets) {
      return (
        <div>loading...</div> 
      )
    }
    return (
      <div>
      <ul>
     {this.state.planets.name}
        <button>
        <img src={this.state.planets.img} alt = {this.state.planets.name} />
        </button>
        
      </ul>
      </div>
    )
  }
  }

export default Planets;

/*         
        {this.state.planets.map(el => 
           (
            <li key={el.name}>
            <p>{el.name}</p>
            <p>Size (radius miles): {el.radiusmiles}</p>
            <p>Year length: {el.year}</p>
            <p>High temp: {el.hightemp}</p>
            <p>Low temp: {el.lowtemp}</p>
            <p>Surface type: {el.type}</p>
            <p>Number of moons: {el.numberofmoons}</p>
            </li>
            
          )
        )} */
