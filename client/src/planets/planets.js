import React, { Component } from 'react';

class Planets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: []
    }
  }

  async componentDidMount() {
    const res = await fetch(`/api/planets/${this.props.planet}`)
    const data = await res.json();
    this.setState({
      planet: data
    })
    // console.log(data);
    // console.log(this.state.planets)
  }

  render() {

    return (
      <ul>
        
        {this.state.planet(el => 
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
        )}
      </ul>
    )
  }
  }

export default Planets;
