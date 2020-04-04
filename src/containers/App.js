import React, { Component } from 'react';
import CardList from "../components/CardList"; // This calls the CardList.js
import SearchBox from '../components/SearchBox'; // This calls the SearchBox.js
import { robots } from "../robots"; // This calls the robots.js
import '../containers/App.css';
import Scroll from "../components/Scroll";


class App extends Component {
    constructor() {
        super()
        this.state = {
          robots: [],
          searchField: ""
        };
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }
     
    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response=> response.json())
      .then(users=> this.setState({robots: robots}));
    }

    render() {
      const {robots,searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
          return robot.name
            .toLowerCase()
            .includes(searchField.toLowerCase());
        })
        return  !robots.length ?
          <h1 className="tc">Loading ...</h1> : (
            
              <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <hr />
                <Scroll>
                <CardList robots={filteredRobots} />
                </Scroll>
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