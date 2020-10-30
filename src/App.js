import React from 'react';
import axios from 'axios';
import './App.css';
import DisplayQuotes from './Components/DisplayQuotes';

class App extends React.Component {

  state = {
    simpsons : null
  }

  componentDidMount(){
    this.getQuotes()
  }

  getQuotes = () => {
    axios.get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(res => this.setState({
        simpsons: res.data
      }))

  }
  render(){
    
    return (
      
      <div className="App">
        {
          this.state.simpsons ? this.state.simpsons.map((simpson, index) => <DisplayQuotes {...simpson} key={index}/>) : <p>Error data</p> 
          
        }
        <button onClick={this.getQuotes} >click</button>
      </div>
    );
      
  }
}

export default App;
