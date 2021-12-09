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
                  <div style={{paddingBottom: "50px"}}>
                    <h1 style={{marginBottom: "0",marginTop: "0",fontSize: "75px"}}>
                        SmartFood
                    </h1>
                    <div style={{fontFamily: "Courier New",fontSize: "20px"}}>Ne consommez plus fastfood, mangez smartfood</div>
                  </div>
                  <UserForm updateCal={this.updateCal}/>
                    <AlimentFinder updateCal={this.updateCal} actualCal={this.state.cal}/>
                    <p style={{marginTop: "0",marginBottom: "60px",fontSize: "25px"}}>Il vous reste {Math.round(this.state.cal,2)} calories à consommer</p>
                    <ListeRestaurants actualCal={this.state.cal} />

                </header>
            </div>
    );
    }
    }

    export default App;