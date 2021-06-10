import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users"
import axios from "axios"

class App extends Component {
 async componentDidMount(){
   const res= await axios.get('https://api.github.com/users')
   
  }

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


