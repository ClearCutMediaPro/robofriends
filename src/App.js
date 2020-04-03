import React, { Component } from 'react';
import CardList from './CardList'; // This calls the CardList.js
import SearchBox from './SearchBox'; // This calls the SearchBox.js
import { robots } from "./robots"; // This calls the robots.js


class App extends Component {
    constructor() {
        super()
        this.state = {
          robots: robots,
          searchField: ""
        };
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }
     

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
          return robots.name
            .toLowerCase()
            .includes(this.state.searchField.toLowerCase());
        })
         return (
           <div className="tc">
                         
             <h1>RoboFriends</h1>
             <SearchBox searchChange={this.onSearchChange} />
             <CardList robots={filteredRobots} />
           </div>
         );
    }
}

/**
 * The below code is a standard which is mandatory for every app so that it can be output 
 */ 

export default App; 

/**
 * STATE is the description of the App, also known as an object that describes
 * the application. In our case it is the robots and input from the SearchBox
 * STATE is able to change the value of the SearchBox and Robots (what gets displayed).
 * PROPS are things that come out of STATE.
 * A parent feeds STATE >> props into a child component and 
 * As soon as a child component receives a STATE then it is a property (PROPS).
 * That child can never change the property
 * 
 * onSearchChange (is a syntax that has been made up - could be anything)
 *  Remember that with an event in console.log it has to have (event.target.value)
 * which gives us the value of the input from Search
 */