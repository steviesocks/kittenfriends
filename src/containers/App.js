import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'

class App extends Component {
	constructor() {
		super();
		this.state = {
			kittens: [],
			searchField: ""
		}
	}

	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({kittens: users}));
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value})
		// console.log(event.target.value);
	}

	render() {
		const { kittens, searchField } = this.state;
		const filteredKittens = kittens.filter(kitten => {
			return kitten.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return !kittens.length ?
			<h1 className="tc">Loading...</h1> :
			(
				<div className="tc">
					<h1 className="f1">KittenKLub</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList kittens={filteredKittens} />
					</Scroll>
				</div>
			);
	}
}

export default App;