import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Urg} from './urg.js';
import {Ltr} from './ltr.js';
import {Dan} from './dan.js';
import todosData from './urgent.js';
import lTodosData from './NonUrgent.js';
import doneData from './Done.js';


class App extends Component{
  constructor(){
    super();
    this.state ={
      urGent: todosData,
      Nurgent: lTodosData,
      dun: doneData,
      UrColor: 'null',
      LtColor: 'null',
      DoColor: 'null',
      somstat: 'u',
      isAdd: true

    }
    this.nowUrgent = this.nowUrgent.bind(this);
    this.nowLater = this.nowLater.bind(this);
    this.nowDone = this.nowDone.bind(this);
    this.doin = this.doin.bind(this);
    this.loin = this.loin.bind(this);
    this.dung = this.dung.bind(this);
  }
  nowUrgent(todoItems){
    this.setState({
      UrColor: 'red',
      LtColor: 'white',
      DoColor: 'white',
      curStat: "",
      somstat: todoItems
  });
}
  nowLater(ltodoItems){
    this.setState({
    UrColor: 'white',
    LtColor: 'red',
    DoColor: 'white',
    somstat: ltodoItems
  });
  }
  nowDone(dun){
    this.setState({
      UrColor: 'white',
      LtColor: 'white',
      DoColor: 'red',
      somstat: dun
    });
  }

  doin(id, option){
    const arr = this.state.urGent;
    var element = '';
    if(option === 1)
    {
      const arr2 = this.state.dun;
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
        urGent: arr,
        dun: arr2,
        somstat: 'u'
      });
    }

    else if(option === 2)
    {
      const arr2 = this.state.Nurgent;
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
        urGent: arr,
        Nurgent: arr2,
        somstat: 'u'
      });
    }
    else
    {
      for(var i = 0; i < arr.length; i++)
      {
        if(arr[i].id == id)
        {
          arr.splice(i, 1);
          break;
        }
      }
      this.setState({
        urGent: arr,
        somstat: 'u'
      });
    }
  };
//-----------------------------------------------------------------
  loin(id, option){
    const arr = this.state.Nurgent;
    var element = '';
    if(option === 1)
    {
      const arr2 = this.state.dun;
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
        Nurgent: arr,
        dun: arr2,
        somstat: 'l'
      });
    }

    else if(option === 2)
    {
      const arr2 = this.state.urGent;
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
        Nurgent: arr,
        urGent: arr2,
        somstat: 'l'
      });
    }
    else
    {
      for(var i = 0; i < arr.length; i++)
      {
        if(arr[i].id == id)
        {
          arr.splice(i, 1);
          break;
        }
      }
      this.setState({
        Nurgent: arr,
        somstat: 'l'
      });
    }
  };
//-----------------------------------------------------------------
dung(id){
  const arr = this.state.dun;
    for(var i = 0; i < arr.length; i++)
    {
      if(arr[i].id == id)
      {
        arr.splice(i, 1);
        break;
      }
    }
    this.setState({
      dun: arr,
      somstat: 'd'
    });
};


  render(){

    var todoItems = this.state.urGent.map(item => <Urg key={item.id} text={item.text} doin={this.doin} id={item.id} todoItems={this.todoItems}/>)
    var ltodoItems = this.state.Nurgent.map(item => <Ltr key={item.id} text={item.text} loin={this.loin} id={item.id} ltodoItems={this.ltodoItems}/>)
    var dun = this.state.dun.map(item => <Dan key={item.id} text={item.text} dung={this.dung} id={item.id} dun={this.dun}/>)
    if(this.state.somstat === 'u')this.state.somstat = todoItems;
    if(this.state.somstat === 'l')this.state.somstat = ltodoItems;
    if(this.state.somstat === 'd')this.state.somstat = dun;
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
      </div>
    );
}
}

export default App;
