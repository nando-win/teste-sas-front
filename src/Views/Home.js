import React, { Component } from 'react';
import '../App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends Component {

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

    //   chooseCategory(category) {
    //     fetch("https://opentdb.com/api.php?amount=1" + category + "dificult=medium" + "type=multiple" )
    // }

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
                        <button onClick="choseCategory(item.category)" className="category">
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