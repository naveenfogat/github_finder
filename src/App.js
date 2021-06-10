import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({
      loading: true,
    });

    const res = await axios.get("https://api.github.com/users");

    this.setState({
      users: res.data,
      loading: false,
    });
  }

  render() {
    const icon = "fab fa-github-square";
    const title = "Github Finder";
    return (
      <div className="App">
        <Navbar title={title} icon={icon} />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
