import UserForm from './components/UserForm';

import './App.css';
import React, { Component } from "react";
import AlimentFinder from "./components/AlimentFinder";
import ListeRestaurants from "./components/ListeRestaurants";
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
                  <UserForm updateCal={this.updateCal}/>
                    <AlimentFinder updateCal={this.updateCal} actualCal={this.state.cal}/>
                    <p>Il vous reste {Math.round(this.state.cal,2)} calories à consommer</p>
                    <ListeRestaurants actualCal={this.state.cal} />

                </header>
            </div>
    );
    }
    }

    export default App;