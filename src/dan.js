import React, { Component } from 'react';
import './App.css';
import done from './done.png';
import moveToLater from './moveToUrgent.png';
import del from './delete.png';
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

export {Dan};
//  checked={props.item.completed}
// onChange={() => props.handleChange(props.id)}
