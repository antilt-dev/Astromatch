import axios from "axios";
import React, {useState} from "react";
import {Container} from './styles';
import { urlToChoose,urlMatches } from "../constants";
import Header from "../Header";
import Footer from "../Footer";
import ProfileToChoose from "../ProfileToChoose";

const Main=()=>{

  const [profile,setProfile] = useState("");

  const getProfileToChoose = async()=>{
    try{
     const res = await axios.get(urlToChoose);
     setProfile(res.data.profile);
     console.log(res.data.profile);
    }catch(err){alert(err.response.data.message);console.log(err)}
  }

 const person = <div>{profile.age}</div>
   
  // <button onClick={getProfileToChoose}>Button test</button>
  //    {profile.name}
  //    {person}
  return (
   <Container>
     <Header/>
     <ProfileToChoose photoLink={profile.photo} photoAlt={profile.photo_alt}/>
     <Footer  onClickBtn={getProfileToChoose}/>
   </Container>
  );
}

export default Main;