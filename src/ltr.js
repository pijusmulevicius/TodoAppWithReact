import React, { Component } from 'react';
import './App.css';
import done from './done.png';
import moveToLater from './moveToUrgent.png';
import del from './delete.png';
function Ltr(props) {
  return(
    <div className="centered">

    <p  id="inlined">{props.text}</p>

    <div className="buttons">
    <img src={done} width="35px" height="35px" onClick={(event) => props.loin(props.id, 1)}/>
    <img src={moveToLater} width="35px" height="35px" onClick={(event) => props.loin(props.id, 2)}/>
    <img src={del} width="35px" height="35px" onClick={(event) => props.loin(props.id, 3)}/>
    </div>
    </div>
  );
}

export {Ltr};
//  checked={props.item.completed}
// onChange={() => props.handleChange(props.id)}
