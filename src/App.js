import React, { Component } from 'react';

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
        <div className="body">
          <h1 className="title">Categorias</h1>
            {itens.results.map(item => (
              <div className="category">
                {item.category}
              </div>
            ))}
        </div>
      )
    }

  }

}

export default App;
