import React, { Component } from 'react';

class Planets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: []
    }
  }

  async componentDidMount() {
    const res = await fetch('/api/planets');
    const data = await res.json();
    this.setState({
      planets: data
    })
  }

  render() {
    const { planets } = this.state
    // console.log("this is our planets in planets.js", planets)
    console.log(this.props)
    return (
      <ul>
        {planets.map(el => {
          return (
            <li key={el.name}>
            <p>{el.name}</p>
          Size (radius miles): {el.radiusmiles}
            <p>Year length: {el.year}</p>
            <p>High temp: {el.hightemp}</p>
            <p>Low temp: {el.lowtemp}</p>
            <p>Surface type: {el.type}</p>
            <p>Number of moons: {el.numberofmoons}</p>
            </li>
          )
        })}
      </ul>
    )
  }
}



export default Planets;


//  </Link>//  <Link to='/mercury'> 