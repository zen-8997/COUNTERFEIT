import React, { Component } from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll.js';
import './App.css';


class App extends Component {
	constructor () {
		super()
		this.state = {
			robots: [],
			searchfield: ''

		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => {this.setState({robots: users})});

	}


	onSearchChange = (event) => {
		this.setState({searchfield:event.target.value})
		
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})

		if(this.state.robots.length === 0) {
			return <div className='tc'><h1 className='f1, white'>just wait for sec we are almost there ........</h1></div>
		} else {
			return (
				<div className='tc'> 
					<h1 className='f-5'>CounterFeit</h1> 
					<SearchBox searchChange={this.onSearchChange}/> 
					<Scroll>
						<Cardlist robots={filteredRobots} /> 
					</Scroll>
				</div>
			);
		}
		
	}
	
}

export default App;