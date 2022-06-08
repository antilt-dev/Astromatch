import React from "react";
import {Container, Button} from './styles';
import like from '../img/astromatch-like.png';
import dislike from '../img/astromatch-dislike.png';
import reset from '../img/astromatch-reset.png';

const Footer=(props)=>{
  return (
   <Container>
       <Button><img src={dislike} alt="botão de deslike" /></Button>
       <Button><img src={reset} alt="Botão de reset" /></Button>
       <Button onClick={props.onClickBtn}><img src={like} alt="botão de like" /></Button>
   </Container>
  );
}

export default Footer;