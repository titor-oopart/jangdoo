import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Hello World
        //</a>
      //</header>
    //</div>
  );
}

export default App;
