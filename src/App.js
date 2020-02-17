import React, { Component } from 'react';
import './App.css'

import Home from './Views/Home';

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
              </Switch>
            </div>
          </div>
           
          
        </Router>
      )
    }
  }


function Categories() {
  return {
    
  }
}

function Questions() {
  return (
    <div className="body">
      <h1 className="title">Categorias</h1>
    </div>
  )
}

export default App;
