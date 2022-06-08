import React from "react";
import {Container} from './styles';
import photoLike from '../img/astromatch-like-photo.png';
import photoDisLike from '../img/astromatch-dislike-photo.png';

const ProfileToChoose=(props)=>{
  return (
   <Container photoLink={props.photoLink} animation={props.animation}>
     <div onClick={props.onClickDisLike}>
       <img src={photoDisLike} alt="Dislike" />
      </div>
     <div onClick={props.onClickLike}>
       <img src={photoLike} alt="Like" />
      </div>
   </Container>
  );
}

export default ProfileToChoose;