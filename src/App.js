import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    // Set the default state
    this.state = {
      monsters: [],
      searchField: ''
    };

    // because of CONTEXT problems ?!
    // BUT ARROW FUNCTIONS solve this problem
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    // setState - is asynchronous
    //          - 2nd argument receives a callback function
    // e.g. - this way console.log will log after the setState is finished
    this.setState({ searchField: e.target.value }, () =>
      console.log(this.state)
    );
  };

  render() {
    // destructuring STATE
    const { monsters, searchField } = this.state;

    // Check if the letter combination from the 'searchField' includes in the monsters names
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
