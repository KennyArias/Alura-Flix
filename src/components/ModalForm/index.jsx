import { useEffect, useState } from "react"
import styled from "styled-components"
import OptionList from "../OptionList"
import TextField from "../TextField"
import Textarea from "../Textarea"
import { Button } from "../../pages/NewVideo"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const StyledDialog = styled.dialog`
    position: absolute;
    top: calc(155%);
    background: #03122F;
    padding: 84px 0;
    border: 2px solid #6BD1FF;
    border-radius: 15px;
    width: 50vw;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;

    //Tablet
    @media (max-width: 1180px){
        top:calc(80%);
        width: 75vw;
    }

    //Cellphone
    @media (max-width: 768px){
        top: calc(5%);
        width: 90vw;
    }
`

const StyledForm = styled.form`
    display: flex;
    flex-flow: column nowrap;
    width: 31vw;
    box-sizing: border-box;
    & h2{
        color: #2271D1;
        font-family: 'Roboto';
        font-size: 3rem;
        font-weight: bold;
    }

    & label{
        padding: 0 0 15px 0;
    }

    & input,
    & select,
    & textarea {
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 15px;
        outline-color: #2271D1;
        border: 3px solid #2271D1;
        font-family: sans-serif;
        resize: none;
    }

    & div{
        width: 31vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 15px;
    }

    //Tablet
    @media (max-width:1180px){
        width: 50vw;
        & div{
            width: 50vw;
        }
    }

    //Cellphone
    @media (max-width: 768px){
        width: 85vw;

        & label{
            text-align: start;
            font-size: 15px;
        }

        & div{
            width:85vw;
        }
    }
`

const IconClose = styled.button`
    border: none;
    background: transparent;
    width: fit-content;
    position: absolute;
    top: 3vh;
    left: 45vw;
    cursor: pointer;
    & img{
        width: 30px !important;
    }

    //Tablet
    @media (max-width:1180px){
        left: 65vw;
    }

    //Cellphone
    @media (max-width: 768px){
        left: 75vw;
    }
`

const ModalForm = ({onClose, videos}) => {

    const { title, image, video, description, category, id } = videos

    const [videoTitle, setVideoTitle] = useState(title);
    const [videoImage, setVideoImage] = useState(image);
    const [videoUrl, setVideoUrl] = useState(video);
    const [videoDescription, setVideoDescription] = useState(description);
    const [videoCategory, setVideoCategory] = useState(category);

    useEffect(() => {
        setVideoTitle(title);
        setVideoImage(image);
        setVideoUrl(video);
        setVideoDescription(description);
        setVideoCategory(category);
    }, [title, image, video, description, category]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedVideo = {
            ...videos,
            title: videoTitle,
            image: videoImage,
            video: videoUrl,
            description: videoDescription,
            category: videoCategory,
        };
        try {
          const response = await fetch(`https://6670b51c0900b5f8724b67b2.mockapi.io/videos/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedVideo),
          });
    
          const result = await response.json();
          
          console.log("Video actualizado con éxito:", result);
        } catch (error) {
          console.error("Error:", error);
        }
    };

    const handleReset = () => {
        setVideoTitle(title);
        setVideoImage(image);
        setVideoUrl(video);
        setVideoDescription(description);
        setVideoCategory(category);
    };
       
    return <>
        
            
        <Overlay />
        <StyledDialog open>
            
            <StyledForm method="dialog" onSubmit={handleSubmit}>
                
                <IconClose type= "button" onClick={onClose}><img src="icon/cancel.png" alt="Ícono de cerrar" /></IconClose>
                <h2>EDITAR CARD:</h2>
                <TextField label="Título" value={videoTitle} setValue={setVideoTitle} />
                <OptionList value={videoCategory} setValue={setVideoCategory} />
                <TextField label="Imagen" value={videoImage} setValue={setVideoImage} />
                <TextField label="Video" value={videoUrl} setValue={setVideoUrl} />
                <Textarea value={videoDescription} setValue={setVideoDescription} />
                <div>
                    <Button type="submit">Guardar</Button>
                    <Button type="reset" onReset={handleReset}>Limpiar</Button>
                </div>
                
            </StyledForm>
        </StyledDialog>
            
            
        

    </>
}

export default ModalForm;