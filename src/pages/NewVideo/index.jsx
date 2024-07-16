import styled from "styled-components"
import Footer from "../../components/Footer"
import GlobalStyles from "../../components/GlobalStyles"
import Header from "../../components/Header"
import { Background } from "../Home/Home"
import OptionList from "../../components/OptionList"
import TextField from "../../components/TextField"
import { useState } from "react"
import Textarea from "../../components/Textarea"

const NewVideoSection = styled.section`
    color: #F5F5F5;
    text-align: center;
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100vw;
    & h1,
    h2{
        font-family: 'Roboto';
        text-transform: uppercase; 
    }
    & h1{
        font-size: 4rem;
    }
    & h2{
        font-size: 1rem;
    }
`

const StyledForm = styled.form`
    font-family: sans-serif;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 80vw;
    margin-bottom: 35px;
    & h3{
        border-bottom: 2px solid #8d89893a;
        border-top: 2px solid #8d89893a;
        width: 80vw;
        text-align: start;
        font-size: 2.2rem;
        padding: 20px 0;
    }

    & div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: start;
        width: 40vw;
        margin-top: 60px;
        justify-content: space-evenly;
    }

    & :nth-child(6){
        width: 80vw;
    }

    & :nth-child(7){
        flex-flow: row nowrap;
        justify-content: start;
        gap: 35px;
    }

    & input,
    select,
    textarea {
        width: 35vw;
        padding: 10px;
        background: transparent;
        border: 2px solid #8d89893a;
        border-radius: 10px;
        outline-color: #2271D1;
        color: gray;
    }

    & textarea{
        height: 20vh;
        resize: none;
    }

    //Cellphone
    @media (max-width: 768px){
        flex-flow: column;

        & h3{
            text-align: center;
        }

        & div{
            width: 100%;
        }

        & :nth-child(7){
            flex-direction: column;
            align-items: center;
            margin-bottom: 90px;
        }

        & input,
        select,
        textarea {
            width: 100%;
        }
    }
`

export const Button = styled.button`
    border: solid #F5F5F5;
    border-radius: 10px;
    background-color: transparent;
    color: #FFFFFF;
    padding: 10px;
    width: 145px;
    font-family: sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    &:hover,
    &:active{
        border: solid #2271D1;
        color: #2271D1;
        background-color: #000000;
    }
`

const NewVideo = () => {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [video, setVideo] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit= async (e) => {
        e.preventDefault();


        const newVideoData = {
            title,
            image,
            video,
            description,
            category
        }

        try{
            const response = await fetch("https://6670b51c0900b5f8724b67b2.mockapi.io/videos",{
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(newVideoData)
            })

            const result = await response.json();
            console.log("Video creado con éxito:", result);
        } catch (error){
            console.error(error);
        }
    }

    const handleReset = () => {
        setTitle("");
        setImage("");
        setVideo("");
        setDescription("");
        setCategory("");
    }
    return(
        <Background>
            <GlobalStyles />
            <Header />
            <NewVideoSection>
                <h1>Nuevo video</h1>
                <h2>Complete el formulario para crear una nueva tarjeta de video</h2>
                <StyledForm onSubmit={handleSubmit}>
                    <h3>Crear Tarjeta</h3>
                    <div>
                        
                        <TextField
                            label="Título"
                            placeholder= "Ingrese el título"
                            required
                            value={title}
                            setValue={setTitle}
                        />
              
                    </div>

                    <div>

                        <OptionList
                            required
                            value={category}
                            setValue={setCategory}
                        />

                    </div>

                    <div>
                        
                        <TextField
                            label="Imagen"
                            placeholder="Ingrese el enlace de la foto"
                            required
                            value={image}
                            setValue={setImage}
                        />   
                          
                    </div>

                    <div>
                        
                        <TextField
                            label="Video"
                            placeholder="Ingrese el enlace del video"
                            required
                            value={video}
                            setValue={setVideo}
                        />   
                           
                    </div>

                    <div>
                        
                        <Textarea
                            placeholder="¿De qué se trata este video?"
                            required
                            value={description}
                            setValue={setDescription}
                        />
                          
                    </div>
                    
                    <div>
                        <Button type="submit">Guardar</Button>
                        <Button type="reset" onClick={handleReset}>Limpiar</Button>  
                    </div>
                    
                    
                </StyledForm>
            </NewVideoSection>
            <Footer />
        </Background>
        
    )
}

export default NewVideo;