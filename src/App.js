import React from 'react';
import Header from './Header';
import Home from './Home.js';
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom"
import './App.css';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
            <Switch>
                <Route path = "/checkout">
                  <Checkout />
                </Route>
                <Route path = "/">
                  <Home />
                </Route>
            </Switch>
      </div>
    </Router>
  );
  
}

export default App;
{/*<h1>Jai Shri Ram</h1>*/}
