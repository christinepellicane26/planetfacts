import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Planets from './planets.js'
import App from '../App.js'

class Routes extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <Switch>

                <Route path="/planets/:name" render = {(props) => <planet name = {name}/>}/>
{/* 
                component={this.props.planet} */}
                
                <Route path='/' component={App}>   </Route>
            
        </Switch>
                )
            }
        }
            
export default Routes