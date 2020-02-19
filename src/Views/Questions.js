import React, { Component } from 'react';

import componentDidMount from './Home'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class Questions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questionsPack: [],
            isLoaded: false
        }

        this.questionsPack = componentDidMount
      }
    
    //   componentDidMount() {
    //     fetch("https://opentdb.com/api.php?amount=10")
    //     .then( res => res.json())
    //     .then( json => {
    //       this.setState({
    //         itens: json || [],
    //         isLoaded: true
    //       })
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     });
    //   }
    render() {
    
        var { isLoaded, itens } = this.state;
    
        if(!isLoaded) {
          return <div>Carregando...</div>;
        } else {
          return (
            <Router>
              <div>
                <main className="body">
                <h1 className="title">{item.category}</h1>
                <button>Fechar</button>
                <div>
                    <div>Questão {i}</div>
                    <div>{item.difficulty}</div>
                </div>
                <div>
                </div>
                </main>
              </div>
            </Router>
        )
        }
    }
}

export default Questions;