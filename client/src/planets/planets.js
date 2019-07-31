import React, {Component} from 'react';

class Planets extends Component {
  constructor(){
    super();
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

render(){
  const {planets} = this.state


    <ul>
    {planets.map(el => {
      return(
        <li key={el.name} {el.size}{el.year}{el.hightemp}{el.lowtemp}{el.surface}{el.numberofmoons} 
       <Link to='/mercury'> 
       </Link>
        </li>
         </ul>
    )}



export default Planets;
