import React from 'react';
import ImgPerson from '../../assets/img/person.svg'
import ImgEye from '../../assets/img/olho.svg'
import './index.css'
import Logo from '../../assets/img/logo5.svg'

const login: React.FC = () => {
  
  return <div className="containerForm">
      <img className="MyLogo" src={Logo} alt="Logotipo" />
      <input className="FormInputName" type="text" />
      <img className="FormIconPerson" src={ImgPerson} alt="ícone Avatar" />
      <input className="FormInputPassword" type="password" />
      <img className="FormIconEye" src={ImgEye} alt="ícone Olho" />
      <button className="FormButton" type="submit">ENTRAR</button>
  </div>;
}

export default login;