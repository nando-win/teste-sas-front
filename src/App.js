import React, { Component } from 'react';
import './App.css'

import Home from './Views/Home';
import Questions from './Views/Questions';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itens: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=10")
    .then( res => res.json())
    .then( json => {
      this.setState({
        itens: json || [],
        isLoaded: true
      })
    })
    .catch((err) => {
      console.log(err)
    });
  }

  render() {
    
      return (
        <Router>
          <div>
            <header className="header">
              <div>Teste Dev Frontend</div>
            </header>

            <div className="body">
              <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path='/Questions' component={ Questions } />
              </Switch>
            </div>
          </div>
           
          
        </Router>
      )
    }
  }

export default App;
