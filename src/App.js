import "./App.css";
import React, { Component, Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users"

class App extends Component {
  render() {
    const icon ="fab fa-github-square"
    const title="Github Finder"
    return (
      <div className="App">
        <Navbar title={title} icon={icon} />
        <div className="container">
        <Users/>

        </div>
      </div>
    );
  }
}

export default App;


