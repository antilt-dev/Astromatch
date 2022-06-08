import styled,{keyframes} from 'styled-components';

const animationLike = keyframes`
    from{
        transform: translateX(0) rotate(0);
    }to{
        transform: translateX(800px) rotate(45deg);
    }
    
`;

export const Container = styled.div`
    min-width:90%;
    min-height:70%;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    background-image:${(props) => `url(${props.photoLink})`};
    background-size:100%; 
    background-repeat:no-repeat;
    background-position:center;
    background-color:rgba(0,0,0,.3);
    animation: ${(props)=>props.animation} 2s .15s;

    div:nth-child(1){
        width:45%;
        height:70%;
        padding:30px 40px;
        img{
            transform:rotate(-25deg) scale(1.2);
            visibility:${(props)=>props.animation === "animationDisLike"?"visible":"hidden"}; 
        }
    }
    div:nth-child(2){
        width:45%;
        height:70%;
        padding:30px 40px;
        img{
            transform:rotate(25deg) scale(1.2);
            visibility:${(props)=>props.animation === "animationLike"?"visible":"hidden"}; 
        }
    }

    @keyframes animationLike {
    from{
        transform: translateX(0) translateY(0) rotate(0) ;
        opacity:100%;
    }to{
        transform: translateX(800px) translateY(-50px) rotate(45deg);
        opacity:0;
    }
}      
    @keyframes animationDisLike {
    from{
        transform: translateX(0) translateY(0) rotate(0);
        opacity:100%;
    }to{
        transform: translateX(-800px) translateY(-50px) rotate(-45deg);
        opacity:0;
    }
    }
`;