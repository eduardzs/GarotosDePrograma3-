import React from "react";
import './transparencia.css'

const Trans = () => {
    return <div className="transContainer">
        <div className="displayContainer">
            <div className="tituloContainer">
                <h1>Efetue Seu Login <br></br> Abaixo</h1>
            </div>
            <div className="caixaLoginContainer">
                <div className="loginContainer">
                    <p>Login:</p>
                    <input className="loginInput" type="text" placeholder="Digite seu login aqui.." />
                </div>
                <div className="senhaContainer">
                    <p>Senha:</p>
                    <input className="senhaInput" type="password" placeholder="Digite sua senha aqui.."/>
                </div>
                <div className="btnContainer">
                    <button className="btn" type="submit">Entrar</button>
                </div>
            </div>
        </div>
    </div>
}

export default Trans;