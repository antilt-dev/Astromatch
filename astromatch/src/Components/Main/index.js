import axios from "axios";
import React, {useState, useEffect} from "react";
import {Container} from './styles';
import { urlToGetProfile,urlToClear,urlToChoose, urlMatches } from "../constants";
import Header from "../Header";
import Footer from "../Footer";
import ProfileToChoose from "../ProfileToChoose";
import ChatPage from "../ChatPage";

const Main=()=>{

  const [profile,setProfile] = useState("");
  const [animationValue,setAnimationValue] = useState("");
  const [currentPage,setCurrentPage] = useState("");
  const [matches,setMatches] = useState([]);

  useEffect(()=>getProfileToChoose,[]);

  const getProfileToChoose = async()=>{
    try{
     const res = await axios.get(urlToGetProfile);
     if(res.data.profile){ 
      setProfile(res.data.profile);
      setAnimationValue("");
    }else{
      setProfile("");
      setAnimationValue("");
    }
    
    }catch(err){alert(err.response.data.message);console.log(err)}
  }

  const getMatches = async()=>{
    try{
    const res = await axios.get(urlMatches)
      setMatches(res.data.matches)
    }catch(err){
      alert(err);console.log(err)
    }
  }

  const clear = async()=>{
    try{
      await axios.put(urlToClear);
      alert("Sucesso ao resetar matchs");
      setProfile("");
      setAnimationValue("");
      getProfileToChoose();
    }catch(err){
      alert(err.response.data.message);console.log(err)
    }
  }

  const choosePerson = async(idProfile,userChoice)=>{
    const body = {
      id:idProfile,
      choice:userChoice
    }

    try{
      await axios.post(urlToChoose,body)
    }catch(err){
      alert(err);console.log(err)
    }
  }

  const getNextProfile =()=>{
    setTimeout(()=>{getProfileToChoose()} , 500);
  } 

  const onLike =(id)=>{
    if(profile){
      choosePerson(id,true);
      setAnimationValue("animationLike");
      getNextProfile();
    }else{
      alert("Sem mais perfis para escolher. Se quiser, pode resetar suas escolhas no botão central.")
    }
   
  }

  const onDisLike =(id)=>{
    if(profile){
      choosePerson(id,false);
      setAnimationValue("animationDisLike");
      getNextProfile();
    }else{
      alert("Sem mais perfis para escolher. Se quiser, pode resetar suas escolhas no botão central.")
    }  
  }

  const onClickPageChat = ()=>{
    setCurrentPage('ChatPage')
  }
  const onClickChoosePage = ()=>{
    setCurrentPage('HomePage')
  }

  const homePage = <>
    <ProfileToChoose 
    photoLink={profile.photo} 
    photoAlt={profile.photo_alt} 
    animation={animationValue} 
    onClickLike={onLike} 
    onClickDisLike={onDisLike}/>
    <Footer  
    onClickReset={clear} 
    onClickLike={()=>onLike(profile.id)} 
    onClickDisLike={()=>onDisLike(profile.id)}/>
  </>;

  const pageTeste = <>
    <ChatPage
    onClickReset={clear}
    />
  </>

  const pageProvider = ()=>{
    switch(currentPage){
      case 'HomePage':
        return homePage;
      case 'ChatPage':
        return pageTeste  
      default:
        return homePage  
    }
  }
   
  return (
   <Container>
     <Header clickPageChat={onClickPageChat} clickChoosePage={onClickChoosePage}/>
     {pageProvider()}
   </Container>
  );
}

export default Main;