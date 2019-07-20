import React, { Component } from 'react';
import './App.css';
import done from './done.png';
import moveToLater from './moveToLater.png';
import del from './delete.png';
function Urg(props) {
  return(
    <div className="centered">

    <p  id="inlined">{props.text}</p>

    <div className="buttons">
    <img src={done} width="35px" height="35px" onClick={(event) => props.doin(props.id, 1)}/>
    <img src={moveToLater} width="35px" height="35px" onClick={(event) => props.doin(props.id, 2)}/>
    <img src={del} width="35px" height="35px" onClick={(event) => props.doin(props.id, 3)}/>
    </div>
    </div>
  );
}

export {Urg};
//  checked={props.item.completed}
// onChange={() => props.handleChange(props.id)}
