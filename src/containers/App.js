import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../components/robots';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = { // state is something that can chnage or affect our app
            robots: [], // add local data or api here
            searchfield: ''
        }
    }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {response.json()})
    .then(users => { this.setState({robots: robots})});
}

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render() {
        const{ robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return (robot.name.toLowerCase().includes(searchfield.toLowerCase()));
        })
        if (!robots.length) {
            return <h1>Loading</h1>
        }else {
            return (
                <div className = 'tc'>
                    <h1 className= 'f1' >Robofriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList robots = {filteredRobots} />
                    </Scroll>
                   
                </div>
            );
        }
    }
}

export default App;