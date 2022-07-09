import React from 'react';
import './display.css'

// import { Container } from './styles';

function display({text, classCss}) {
  return <div className={"display-div " + classCss}>
    <span className="display-span">{text}</span>
  </div>;
}

export default display;