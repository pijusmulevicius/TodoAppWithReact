import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Fucker} from './sad.js';
import todosData from './urgent.js';


class App extends Component{
  constructor(){
    super();
    this.state ={
      UrColor: 'null',
      LtColor: 'null',
      DoColor: 'null'
    }
    this.nowUrgent = this.nowUrgent.bind(this);
    this.nowLater = this.nowLater.bind(this);
    this.nowDone = this.nowDone.bind(this);
  }
  nowUrgent(){
    this.setState({
      UrColor: 'red',
      LtColor: 'white',
      DoColor: 'white',
  });
  }
  nowLater(){
    this.setState({
    UrColor: 'white',
    LtColor: 'red',
    DoColor: 'white',
  });
  }
  nowDone(){
    this.setState({
      UrColor: 'white',
      LtColor: 'white',
      DoColor: 'red',
    });
  }

  render(){

    
    return(
      <div>
        <ul>
          <li id="bam" style={{color: this.state.UrColor}} onClick={this.nowUrgent}>Urgent</li>
          <li style={{color: this.state.LtColor}} onClick={this.nowLater}>Later</li>
          <li id="ram" style={{color: this.state.DoColor}} onClick={this.nowDone}>Done</li>
        </ul>
      </div>
    );
}
}
export default App;
