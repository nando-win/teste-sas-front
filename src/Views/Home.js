import React, { Component } from 'react';
import '../App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          itens: [],
          isLoaded: false
        }
      }

      componentDidMount() {
        this.loadAPI();
      }

      loadAPI() {
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

      setQuestion(question){
        return this.itens = question 
      }

    render() {
    
      var { isLoaded, itens } = this.state;
  
      if(!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <Router>
            <div>
              <main>
                <h1 className="title">Categorys</h1>
                  {itens.results.map(item => (
                    <Link to="/Questions">
                      <button onClick="setQuestion({item.question})" className="category">
                        {item.category}
                      </button>
                      
                    </Link>
                ))}
              </main>
            </div>
          </Router>
      )
    }
  }
}

export default Home;