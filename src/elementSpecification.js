import React, { Component } from 'react';
import './App.css';
import done from './done.png';
import moveToLater from './moveToLater.png';
import moveToUrgent from'./moveToUrgent.png';
import del from './delete.png';
function Urg(props) {
  return(
    <div className="centered">

    <p  id="inlined">{props.text}</p>

    <div className="buttons">
    <img src={done} width="35px" height="35px" name="UrgentTodos" onClick={(event) => props.moving(props.id, true, event, 'DoneTodos')}/>
    <img src={moveToLater} width="35px" height="35px" name="UrgentTodos" onClick={(event) => props.moving(props.id, true, event, 'NonUrgentTodos')}/>
        <img src={del} width="35px" height="35px" name="UrgentTodos" onClick={(event) => props.moving(props.id, false, event, 'garbage')}/>
    </div>
    </div>
  );
}
function Ltr(props) {
  return(
    <div className="centered">

    <p  id="inlined">{props.text}</p>

    <div className="buttons">
    <img src={done} width="35px" height="35px" name="NonUrgentTodos" onClick={(event) => props.moving(props.id, true, event, 'DoneTodos')}/>
    <img src={moveToUrgent} width="35px" height="35px" name="NonUrgentTodos" onClick={(event) => props.moving(props.id, true, event, 'UrgentTodos')}/>
      <img src={del} width="35px" height="35px" name="NonUrgentTodos" onClick={(event) => props.moving(props.id, false, event, 'garbage')}/>
    </div>
    </div>
  );
}
function Dan(props) {
  return(
    <div className="centered">

    <p  id="inlined">{props.text}</p>

    <div className="buttons">
    <img src={del} width="35px" height="35px" onClick={(event) => props.dung(props.id)}/>
    </div>
    </div>
  );
}

export {Urg, Ltr, Dan};
//  checked={props.item.completed}
// onChange={() => props.handleChange(props.id)}
