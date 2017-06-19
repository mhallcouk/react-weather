import React, { Component } from 'react';
import './App.css';
import SearchBar from "./containers/search_bar";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
