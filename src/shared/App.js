import React, { Component } from "react";
import "./App.css"
import {Navbar} from './components/index'

class App extends Component {
  render() {
    return (

      <div className="App">
        <div className="App-header">
        <Navbar />
          <h2>Welcome to React in the Server</h2>
        </div>
        <p className="App-intro">SSR is neat</p>
      </div>
    )
  }
}

export default App