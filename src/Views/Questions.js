import React, { Component } from 'react';

import * as HomeModule from './Home'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class Questions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questionsPack: [],
            isLoaded: true
        }

        // this.questionsPack = HomeModule.componentDidMount
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
    
      // var { itens } = this.questionsPack;
  
      
        return (
          <Router>
            <div>
              <main className="body">
              <h1 className="title">{this.props.itens}</h1>
              <button>Fechar</button>
              <div>
                  <div>Questão 1</div>
                  {/* {itens.results.map(item => (
                    <div>{item.difficulty}</div>
                  ))} */}
              </div>
              </main>
            </div>
          </Router>
        )
      
    }
}

export default Questions;