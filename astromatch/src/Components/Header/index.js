import React from "react";
import {Container} from './styles';
import logo from '../img/astromatch-logo.png';
import logoName from '../img/astromatch-logo-name.png';
import chat from '../img/astromatch-chat.png';

const Header=()=>{
  return (
   <Container>
       <img src={logo} alt="Logo ASTROMATCH com uma lupa e um coração dentro" />
       <img src={logoName} alt="Imagem do logo escrito ASTROMATCH." />
       <img src={chat} alt="Balão de chat" />
   </Container>
  );
}

export default Header;