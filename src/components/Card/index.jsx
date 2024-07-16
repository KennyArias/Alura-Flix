import styled from "styled-components"
import ModalForm from "../ModalForm"
import useModalForm from "../../Hooks/useModalForm"
import { useState } from "react"

const CardContainer = styled.div`
   background-color: #000000;
   width: fit-content;
   padding-bottom: 20px;
   border: 2px solid;
   border-radius: 10px;
   display: flex;
   flex-flow: column nowrap;
   margin-bottom: 20px;
`

const ImgConatiner = styled.div`
    width: 365px;
    padding: 2px 3px;
    box-shadow: inset 0px 0px 10px 2px ${props => props.shadowColor};
    border-bottom: 2px solid ;
    & img {
        display: flex;
        justify-content:center;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        width: 365px;
    }
`

const ButtonContainer = styled.div`
    display: inline-flex;
    justify-content: space-evenly;
`

const Button = styled.button`
    margin-top: 15px;
    background: transparent;
    color: #FFFFFF;
    font-family: 'Roboto';
    border: none;
    display: flex;
    gap: 5px;
    cursor: pointer;
    & img{
        width: 12px;
    }
`

const Card = ({color, video, onEdit, onDelete}) => {
    
    const {image, title, id} = video

    const handleDelete = () => {
        onDelete(video);
    };

    return(
        <CardContainer style={{borderColor: color}}>
            <ImgConatiner shadowColor= {color} style={{borderBottomColor: color}} >
                <img src={image} alt={title} />
            </ImgConatiner>
        
            <ButtonContainer>
                <Button id={id} onClick={handleDelete}><img src="img/trash.png" alt="Eliminar"/>ELIMINAR</Button>
                <Button id={id} onClick={()=> onEdit(video)}><img src="img/edit.png" alt="Editar"/>EDITAR</Button>
            </ButtonContainer>
        </CardContainer>
    )
}

export default Card;