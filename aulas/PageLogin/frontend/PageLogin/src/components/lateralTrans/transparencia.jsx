import React,{useState} from "react";
import './transparencia.css'
import fazerLoginAPI from "../../api/api";

const Trans = () => {
    const [inputLogin, setInputLogin] = useState(false)
    const [inputSenha, setInputSenha] = useState(false)
    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(inputLogin, inputSenha)
        const {token} = await fazerLoginAPI(inputLogin, inputSenha)
        localStorage.setItem('token', token);
    }
    return <div className="gridContainer">
        <form onSubmit={handleSubmit} className="loginContainer">
            <h2 className="subtitulo">Login</h2>
            <p className="paragrafo">Faça seu login abaixo.</p>
            <hr className="hr" />
            <p className="inputParagrafo">Login</p>
            <input onChange={(e)=>setInputLogin(e.target.value)} className="inputDesigner" type="text" placeholder="Escreva seu login aqui.."/>
            <p className="inputParagrafo">Senha</p>
            <input onChange={(e)=>setInputSenha(e.target.value)} className="inputDesigner" type="password" placeholder="Escreva sua senha aqui.."/>
            <button className="buttonDesigner" type="submit">Login</button>
            <p className="creditos">eduardzs_</p>
        </form>
        <div className="imagemContainer">
            <img className="imagem" src=".\src\assets\img\login.svg" alt="Imagem" />
        </div>
    </div>
}

export default Trans;