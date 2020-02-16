import React, { Component } from 'react';
import './App.css'

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
    
    var { isLoaded, itens } = this.state;

    if(!isLoaded) {
      return <div>Carregando...</div>;
    } else {
      return (
        <Router>
          <div>
            <header className="header">
              <div>Teste Dev Frontend</div>
            </header>

            <main className="body">
              <div>
                <h1 className="title">Categorias</h1>
                  {itens.results.map(item => (
                    // <a href="" className="category">
                    //   {item.category}
                    // </a>
                    
                    <Link to="/questions">
                      <button onClick="" className="category">
                        {item.category}
                      </button>
                    </Link>
                  ))}
              </div>
            </main>
          </div>
           
          <Switch>
            <Route exact path="/">
              <Questions />
            </Route>
          </Switch>
        </Router>
      )
    }
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
