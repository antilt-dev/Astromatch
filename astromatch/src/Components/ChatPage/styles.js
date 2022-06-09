import styled from 'styled-components';

export const Container = styled.div`
    min-width:95%;
    min-height:80%;
    background-color:red;
    margin-bottom:10%;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const Button = styled.button`
    width:70px;
    height:70px;
    border-radius:50%;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border:none;
    box-shadow:5px 5px 11px -3px rgba(0,0,0,0.76); 
    cursor:pointer;
    
    img{
        max-width:65%;
        align-self:center;
    }
   
    &:active{
        transform:scale(1.05);
    }
`;