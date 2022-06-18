import React from 'react';
import './display.css'

// import { Container } from './styles';

function display({text}) {
  return <div className="display-div">
    <span className="display-span">{text}</span>
  </div>;
}

export default display;