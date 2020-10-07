import React, { Component } from 'react';
import CardList from './cardList';
import Scroll from './scroll';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            SearchField: ''
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({ robots: users })})
    }

    onSearchChange = (event) => {
        this.setState({ SearchField: event.target.value })
    }
    
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
            <div className='tc'>
                <h1 className='f1'>RobotFriends</h1>
                <SearchBox SearchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
            )
        }
    }
}

export default App;