import UserForm from './components/UserForm';
import logo from './logo.svg';
import './App.css';
import AlimentsForm from "./components/AlimentsForm";

function App() {
  return (
    <div className="App">
      <UserForm/>
      <AlimentsForm/>
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

export default App;