import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentItem: {text:'', key:''},
      items: []
    };
  }

  addItem = event => {
    event.preventDefault()
    console.log('hi')
  };

  addInput = event => {
    const itemText = event.target.value
    const currentItem = { text: itemText, key:
       Date.now() }
       this.setState({
         currentItem,
    })
  }

  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
      </div>
    );
  }
}

export default App;
