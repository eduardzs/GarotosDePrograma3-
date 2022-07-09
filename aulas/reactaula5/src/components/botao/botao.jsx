import React from 'react';
import './botao.css'

// import { Container } from './styles';

function botao({tipo, text, onclick, fundo, cortxt, border, gridPosicaoColumn, gridPosicaoRow, classCss}) {
  return <div style={{gridColumn: gridPosicaoColumn, gridRow: gridPosicaoRow}} className={"botao-div " + classCss}>
    <button style={{backgroundColor: fundo, color: cortxt, border: border}} className="botao-button"onClick={onclick} type={tipo}>{text}</button>
  </div>;
}

export default botao;