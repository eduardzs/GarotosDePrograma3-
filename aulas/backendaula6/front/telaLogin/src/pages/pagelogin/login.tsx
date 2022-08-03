import React from 'react';
import FormLogin from '../../components/login/index'
import Logotipo from '../../components/mylogo/index'
import './index.css'

const pages: React.FC = () => {
    
  return <div className="ContainerPageLogin">
    <FormLogin></FormLogin>
  </div>;
}

export default pages;