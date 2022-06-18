import { useState } from "react";
import "./App.css";
import Display from "./components/display/display";
import Botao from "./components/botao/botao";
import * as math from "mathjs";

function App() {
  const [display, setDisplay] = useState("");
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
    <div className="App-div">
      <Display text={display} />
      <div className="Teclado">
        <Botao
          tipo={"number"}
          text={"1"}
          gridPosicaoColumn={"1"}
          gridPosicaoRow={"4"}
          onclick={() => insereDisplay("1")}
        />
        <Botao
          tipo={"number"}
          text={"2"}
          gridPosicaoColumn={"2"}
          gridPosicaoRow={"4"}
          onclick={() => insereDisplay("2")}
        />
        <Botao
          tipo={"number"}
          text={"3"}
          gridPosicaoColumn={"3"}
          gridPosicaoRow={"4"}
          onclick={() => insereDisplay("3")}
        />
        <Botao
          tipo={"number"}
          text={"4"}
          gridPosicaoColumn={"1"}
          gridPosicaoRow={"3"}
          onclick={() => insereDisplay("4")}
        />
        <Botao
          tipo={"number"}
          text={"5"}
          gridPosicaoColumn={"2"}
          gridPosicaoRow={"3"}
          onclick={() => insereDisplay("5")}
        />
        <Botao
          tipo={"number"}
          text={"6"}
          gridPosicaoColumn={"3"}
          gridPosicaoRow={"3"}
          onclick={() => insereDisplay("6")}
        />
        <Botao
          gridPosicaoColumn={"1"}
          gridPosicaoRow={"2"}
          tipo={"number"}
          text={"7"}
          onclick={() => insereDisplay("7")}
        />
        <Botao
          tipo={"number"}
          text={"8"}
          gridPosicaoColumn={"2"}
          gridPosicaoRow={"2"}
          onclick={() => insereDisplay("8")}
        />
        <Botao
          tipo={"number"}
          text={"9"}
          gridPosicaoColumn={"3"}
          gridPosicaoRow={"2"}
          onclick={() => insereDisplay("9")}
        />
        <Botao
          tipo={"number"}
          text={"0"}
          gridPosicaoColumn={"1 / 3"}
          gridPosicaoRow={"5"}
          onclick={() => insereDisplay("0")}
        />
        <Botao
          tipo={"number"}
          text={"+"}
          gridPosicaoColumn={"4"}
          gridPosicaoRow={"4"}
          border={"2px solid #1565C0"}
          onclick={() => insereDisplay("+")}
        />
        <Botao
          gridPosicaoColumn={"4"}
          gridPosicaoRow={"3"}
          tipo={"number"}
          text={"-"}
          border={"2px solid #1565C0"}
          onclick={() => insereDisplay("-")}
        />
        <Botao
          tipo={"number"}
          text={"="}
          gridPosicaoColumn={"4"}
          gridPosicaoRow={"5"}
          fundo={"#1565C0"}
          cortxt={"#ffff"}
          onclick={() => {
            calcular();
          }}
        />
        <Botao
          tipo={"number"}
          text={"."}
          gridPosicaoColumn={"3"}
          gridPosicaoRow={"5"}
          onclick={() => insereDisplay(".")}
        />
        <Botao
          tipo={"number"}
          text={"MOD"}
          gridPosicaoColumn={"3"}
          gridPosicaoRow={"1"}
          onclick={() => insereDisplay("%")}
        />
        <Botao
          tipo={"number"}
          text={"x"}
          gridPosicaoColumn={"4"}
          gridPosicaoRow={"2"}
          border={"2px solid #1565C0"}
          onclick={() => insereDisplay("*")}
        />
        <Botao
          tipo={"number"}
          text={"/"}
          gridPosicaoColumn={"4"}
          gridPosicaoRow={"1"}
          border={"2px solid #1565C0"}
          onclick={() => insereDisplay("/")}
        />
        <Botao
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
