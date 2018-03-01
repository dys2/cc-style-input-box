import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    inputValue: ''
  }

  handleInputChange = (e) => {

    const value = e.target.value
      .split('')
      .filter(char => !isNaN(parseInt(char, 10)))
      .map((num, i) => !(i % 4)  ? ` ${num}` : num)
      .join('')
      .trim();

    this.setState(prev => ({
      inputValue: value.slice(0, 19)
    }));
  }

  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;
