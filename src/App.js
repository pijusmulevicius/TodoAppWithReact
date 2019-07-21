import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Urg, Ltr, Dan} from './elementSpecification.js';
import todosData from './urgent.js';
import nuTodosData from './NonUrgent.js';
import doneData from './Done.js';
var numbah = 1000;
var form;

class App extends Component{
  constructor(){
    super();
    this.state ={
      UrgentTodos: todosData,
      NonUrgentTodos: nuTodosData,
      DoneTodos: doneData,
      UrColor: 'null',
      LtColor: 'null',
      DoColor: 'null',
      somstat: '',
      statusNode: 'u',
      garbage: {id:999, text: 'fuckoff', completed: false}
    }
    this.nowUrgent = this.nowUrgent.bind(this);
    this.nowLater = this.nowLater.bind(this);
    this.nowDone = this.nowDone.bind(this);
    this.moving = this.moving.bind(this);
    this.addStuff = this.addStuff.bind(this);
  }
  nowUrgent(todoItems){
    this.setState({
      UrColor: 'red',
      LtColor: 'white',
      DoColor: 'white',
      statusNode: 'u'
  });
}
  nowLater(ltodoItems){
    this.setState({
    UrColor: 'white',
    LtColor: 'red',
    DoColor: 'white',
    statusNode: 'l'
  });
  }
  nowDone(dun){
    this.setState({
      UrColor: 'white',
      LtColor: 'white',
      DoColor: 'red',
      statusNode: 'd'
    });
  }
  moving(id, shouldRemain, event, changeling){
    var arr = this.state[event.target.name];
    var element = '';
    var arr2 = [];
    if(shouldRemain)arr2 = this.state[changeling];
    console.log(arr2);
      for(var i = 0; i < arr.length; i++)
      {
        if(arr[i].id == id)
        {
          element = arr[i];
          arr.splice(i, 1);
          arr2.push(element);
        }
      }
      this.setState({
        [event.target.name]: arr,
        [changeling]: arr2,
        somstat: 'u'
      });
    };
addStuff(val, list){
  const arr = this.state[list];
  arr.push({
    id: numbah,
    text: val
  });
  numbah+=50;
  this.setState({
    [list]: arr,
  })
}


  render(){
    var todoItems = this.state.UrgentTodos.map(item => <Urg key={item.id} text={item.text} moving={this.moving} id={item.id} todoItems={this.todoItems}/>)
    var ltodoItems = this.state.NonUrgentTodos.map(item => <Ltr key={item.id} text={item.text} moving={this.moving} id={item.id} ltodoItems={this.ltodoItems}/>)
    var dun = this.state.DoneTodos.map(item => <Dan key={item.id} text={item.text} moving={this.moving} id={item.id} dun={this.dun}/>)

    if(this.state.statusNode === 'u')
    {
      this.state.somstat = todoItems;
      form =
      <div>
      <input type="text" placeholder="What's so urgent?" id="urgency"/>
      <button onClick={(event) => this.addStuff(urgency.value, 'UrgentTodos')}>submit</button>
      </div>
    }

    if(this.state.statusNode === 'l'){
      this.state.somstat = ltodoItems;
      form =
      <div>
      <input type="text" placeholder="not so urgent?" id="nurgency"/>
      <button onClick={(event) => this.addStuff(nurgency.value, 'NonUrgentTodos')}>submit</button>
      </div>
    }
    if(this.state.statusNode === 'd'){
      this.state.somstat = dun;
      form = null;
    }

    return(
      <div className="mainContainer">
        <ul>
          <li id="bam" style={{color: this.state.UrColor}} onClick={(event) => this.nowUrgent(todoItems)}>Urgent</li>
          <li style={{color: this.state.LtColor}} onClick={this.nowLater} onClick={(event) => this.nowLater(ltodoItems)}>Later</li>
          <li id="ram" style={{color: this.state.DoColor}} onClick={(event) => this.nowDone(dun)}>Done</li>
        </ul>
        <div style={{backgroundColor: '#ded6bf'}}>
        {this.state.somstat}
        </div>
        {form}
      </div>
    );
}
}

export default App;
