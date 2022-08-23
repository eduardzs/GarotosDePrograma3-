import React from "react";
import './transparencia.css'

const Trans = () => {
    return <div className="displayContainer">
        <div className="loginContainer">
            <h1 className="tituloContainer">Efetue Seu Login<br></br>Abaixo</h1>
            <div className="inputsContainer">
                <div className="loginContainer">
                    <p>LOGIN</p>
                    <input className="textInput" type="text" placeholder="Digite seu login aqui.."/>
                </div>
                <div className="senhaContainer">
                    <p>SENHA</p>
                    <input className="passwordInput" type="password" placeholder="Digite sua senha aqui.."/>
                </div>
                <div className="btnContainer">
                    <button className="btn" type="submit">ENTRAR</button>
                </div>
            </div>
        </div>
    </div>
}

export default Trans;