import React, { Component } from "react";
import Cardlist from "../components/Cardlist"
import Searchbox from "../components/Searchbox";
import './App.css';
import Scroll from "../components/Scroll"; // Always import css files to use them
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    };

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });
        return !robots.length ? <h1 className='tc f1'>Loading!!!</h1> :
                <div className='tc'>
                    <h1 className='f1'>RoboParty</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <Cardlist robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
    }
}

export default App;