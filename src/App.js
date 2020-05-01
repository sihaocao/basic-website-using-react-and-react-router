import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
