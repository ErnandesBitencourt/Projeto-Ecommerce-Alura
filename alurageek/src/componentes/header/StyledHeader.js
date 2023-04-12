import styled from "styled-components";
import promocoes1 from "../../img/promocoes/promocoes1.png"

const imgPromocao = promocoes1
export const Header = styled.header`
    width: 100%;
    height: 22em;
    
    background-image:url(${imgPromocao});
    background-repeat:no-repeat;
    background-repeat:round;
    display: flex;
    flex-direction: column;
    flex: 1 ,1 ;
    justify-content: center;
    align-items: center;

`;

export const DivHeader =  styled.div`
    width: 100%;
    max-width: 90%;
    height: 15em;
    display: flex;
    flex-direction: column;
    flex: 1,1;
    justify-content: flex-end;
    
    margin-top: 3em;
    
    h2{ 
        font-size: 40px;
        color: ${props=>props.theme.Themers.textPromocao};
        font-weight: ${props=>props.theme.Themers.weightPromocao};;
    };

    p{
        font-size: 20px;
        color: ${props=>props.theme.Themers.textPromocao};
        font-weight: ${props=>props.theme.Themers.weightPromocao};
        };

    button{ 
        width: 11em;
        height: 4em;
        border: solid 1px ${props=>props.theme.Themers.buttonsTitulos};
        background-color: ${props=>props.theme.Themers.buttonsTitulos};
        color: ${props=>props.theme.Themers.textPromocao};
  
        font-weight: ${props=>props.theme.Themers.weightText};
        :hover{ 
        cursor: pointer;
        
    }
        
    };
    

`;