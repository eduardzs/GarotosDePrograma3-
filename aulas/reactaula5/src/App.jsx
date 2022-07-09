import { useState } from "react";
import "./App.css";
import Display from "./components/display/display";
import Botao from "./components/botao/botao";
import * as math from "mathjs";
import TemaLight from "./assets/img/Mode_Light.svg";
import TemaDark from "./assets/img/Mode_Dark.svg";

function App() {
  const [display, setDisplay] = useState("");
  const [TemaAtual, setTemaAtual] = useState(false);
  function MudarTema(){
    setTemaAtual(!TemaAtual)
  }
  function insereDisplay(params) {
    setDisplay(display + params);
  }
  function AC() {
    setDisplay("");
  }
  function calcular() {
    const resultado = math.evaluate(display);
    setDisplay(resultado);
  }
  
  return (
  <div className='App'>
    <div className={"App-div " + (TemaAtual?"Tema-Dark":"Tema-Light")}>
      <div className="BotaoTema-div">
        <img onClick={MudarTema} src={TemaAtual?TemaDark:TemaLight} alt="Botão Tema"/>
      </div>
      <Display text={display} classCss = {TemaAtual?"DisplayTema-Dark":"Tema-Light"}/>
      <div className="Teclado">
        <Botao
          classCss={TemaAtual?"BotaoTema-Dark":"Tema-Light"}
          tipo={"number"}
          text={"1"}
          gridPosicaoColumn={"1"}
          gridPosicaoRow={"4"}
          onclick={() => insereDisplay("1")}
        />
        <Botao
          classCss={TemaAtual?"BotaoTema-Dark":"Tema-Light"}
          tipo={"number"}
          text={"2"}
          gridPosicaoColumn={"2"}
          gridPosicaoRow={"4"}
          onclick={() => insereDisplay("2")}
        />
        <Botao
          classCss={TemaAtual?"BotaoTema-Dark":"Tema-Light"}
          tipo={"number"}
          text={"3"}
          gridPosicaoColumn={"3"}
          gridPosicaoRow={"4"}
          onclick={() => insereDisplay("3")}
        />
        <Botao
          classCss={TemaAtual?"BotaoTema-Dark":"Tema-Light"}
          tipo={"number"}
          text={"4"}
          gridPosicaoColumn={"1"}
          gridPosicaoRow={"3"}
          onclick={() => insereDisplay("4")}
        />
        <Botao
          classCss={TemaAtual?"BotaoTema-Dark":"Tema-Light"}
          tipo={"number"}
          text={"5"}
          gridPosicaoColumn={"2"}
          gridPosicaoRow={"3"}
          onclick={() => insereDisplay("5")}
        />
        <Botao
          classCss={TemaAtual?"BotaoTema-Dark":"Tema-Light"}
          tipo={"number"}
          text={"6"}
          gridPosicaoColumn={"3"}
          gridPosicaoRow={"3"}
          onclick={() => insereDisplay("6")}
        />
        <Botao
          classCss={TemaAtual?"BotaoTema-Dark":"Tema-Light"}
          gridPosicaoColumn={"1"}
          gridPosicaoRow={"2"}
          tipo={"number"}
          text={"7"}
          onclick={() => insereDisplay("7")}
        />
        <Botao
          classCss={TemaAtual?"BotaoTema-Dark":"Tema-Light"}
          tipo={"number"}
          text={"8"}
          gridPosicaoColumn={"2"}
          gridPosicaoRow={"2"}
          onclick={() => insereDisplay("8")}
        />
        <Botao
          classCss={TemaAtual?"BotaoTema-Dark":"Tema-Light"}
          tipo={"number"}
          text={"9"}
          gridPosicaoColumn={"3"}
          gridPosicaoRow={"2"}
          onclick={() => insereDisplay("9")}
        />
        <Botao
          classCss={TemaAtual?"BotaoTema-Dark":"Tema-Light"}
          tipo={"number"}
          text={"0"}
          gridPosicaoColumn={"1 / 3"}
          gridPosicaoRow={"5"}
          onclick={() => insereDisplay("0")}
        />
        <Botao
          classCss={TemaAtual?"BotaoTema-Dark":"Tema-Light"}
          tipo={"number"}
          text={"+"}
          gridPosicaoColumn={"4"}
          gridPosicaoRow={"4"}
          border={"2px solid #7F00FF"}
          onclick={() => insereDisplay("+")}
        />
        <Botao
          classCss={TemaAtual?"BotaoTema-Dark":"Tema-Light"}
          gridPosicaoColumn={"4"}
          gridPosicaoRow={"3"}
          tipo={"number"}
          text={"-"}
          border={"2px solid #7F00FF"}
          onclick={() => insereDisplay("-")}
        />
        <Botao
          classCss={TemaAtual?"BotaoTema-Dark":"Tema-Light"}
          tipo={"number"}
          text={"="}
          gridPosicaoColumn={"4"}
          gridPosicaoRow={"5"}
          fundo={"#7F00FF"}
          cortxt={"#ffff"}
          onclick={() => {
            calcular();
          }}
        />
        <Botao
          classCss={TemaAtual?"BotaoTema-Dark":"Tema-Light"}
          tipo={"number"}
          text={"."}
          gridPosicaoColumn={"3"}
          gridPosicaoRow={"5"}
          onclick={() => insereDisplay(".")}
        />
        <Botao
          classCss={TemaAtual?"BotaoTema-Dark":"Tema-Light"}
          tipo={"number"}
          text={"MOD"}
          gridPosicaoColumn={"3"}
          gridPosicaoRow={"1"}
          onclick={() => insereDisplay("%")}
        />
        <Botao
          classCss={TemaAtual?"BotaoTema-Dark":"Tema-Light"}
          tipo={"number"}
          text={"x"}
          gridPosicaoColumn={"4"}
          gridPosicaoRow={"2"}
          border={"2px solid #7F00FF"}
          onclick={() => insereDisplay("*")}
        />
        <Botao
          classCss={TemaAtual?"BotaoTema-Dark":"Tema-Light"}
          tipo={"number"}
          text={"/"}
          gridPosicaoColumn={"4"}
          gridPosicaoRow={"1"}
          border={"2px solid #7F00FF"}
          onclick={() => insereDisplay("/")}
        />
        <Botao
          classCss={TemaAtual?"BotaoTema-Dark":"Tema-Light"}
          gridPosicaoColumn={"1 / 3"}
          gridPosicaoRow={"1 / 1"}
          tipo={"number"}
          text={"AC"}
          onclick={AC}
        />
      </div>
    </div>
  </div>);
}

export default App;
