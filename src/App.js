import React, { Component } from 'react';

import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box'
import './App.css';


class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => this.setState({ searchField: e.target.value });

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='container'>
        <h1>Monster Rolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder={'search monsters'}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;