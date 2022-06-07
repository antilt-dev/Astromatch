import axios from "axios";
import React, {useState} from "react";
import {Container} from './styles';
import { urlToChoose,urlMatches } from "../constants";
import Header from "../Header";
import Footer from "../Footer";

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
   
  
  return (
   <Container>
     <Header/>
     <button onClick={getProfileToChoose}>Button test</button>
     {profile.name}
     {person}
     <Footer/>
   </Container>
  );
}

export default Main;