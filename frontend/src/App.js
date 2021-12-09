import UserForm from './components/UserForm';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ListeRestaurants from './components/ListeRestaurants';

axios.get('http://localhost:8000/uberEatAPI/restaurants/')
  .then(function (response) {
    // handle success
    //console.log(response.data);
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
        <ListeRestaurants/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="http://localhost:8000/accounts/google/login">lien</a>
       
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

export default App;