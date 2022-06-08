import axios from "axios";
import React, {useState} from "react";
import {Container} from './styles';
import { urlToChoose,urlMatches } from "../constants";
import Header from "../Header";
import Footer from "../Footer";
import ProfileToChoose from "../ProfileToChoose";

const Main=()=>{

  const [profile,setProfile] = useState("");
  const [animationValue,setAnimationValue] = useState("");

  const getNextProfile =()=>{
      setTimeout(()=>{getProfileToChoose()} , 500);
  }  
  const onLike =()=>{
    setAnimationValue("animationLike");
    getNextProfile();
  }
  const onDisLike =()=>{
    setAnimationValue("animationDisLike");
    getNextProfile();
  }
  const getProfileToChoose = async()=>{
    try{
     const res = await axios.get(urlToChoose);
     setProfile(res.data.profile);
     setAnimationValue("");
    }catch(err){alert(err.response.data.message);console.log(err)}
  }

 const person = <div>{profile.age}</div>
   
  // <button onClick={getProfileToChoose}>Button test</button>
  //    {profile.name}
  //    {person}
  return (
   <Container>
     <Header/>
     <ProfileToChoose photoLink={profile.photo} photoAlt={profile.photo_alt} animation={animationValue} onClickLike={onLike} onClickDisLike={onDisLike}/>
     <Footer  onClickBtn={getProfileToChoose} onClickLike={onLike} onClickDisLike={onDisLike}/>
   </Container>
  );
}

export default Main;