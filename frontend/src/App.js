import UserForm from './components/UserForm';
import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import AlimentsForm from "./components/AlimentsForm";
import ComponentTest from "./components/ComponentTest";
import axios from 'axios';

/*
// Make a request for a user with a given ID
axios.get('http://localhost:8000/uberEatAPI/restaurants/')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    console.log("block error");
  })
  .then(function () {
    // always executed
  });

axios.get('http://localhost:8000/uberEatAPI/restaurants/')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    console.log("block error");
  })
  .then(function () {
    // always executed
  });

function App() {
  return (
    <div className="App">
      <UserForm/>
      <ComponentTest/>
        <p>res</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
      </header>
    </div>
  );
}

export default App;*/

class App extends Component {

    constructor() {
        super();
        this.state = {
            cal : 0
        };
    }

    updateCal = (newCal) => {
        this.setState({cal:newCal});
    }



    componentDidMount() {
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <ComponentTest updateCal={this.updateCal}/>
                    {this.state.test &&
                    <ComponentTest updateCal = {this.updateCal}/>}
                    <p>{this.state.cal}</p>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn
                    </a>
                </header>
            </div>
    );
    }
    }

    export default App;