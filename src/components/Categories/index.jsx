import styled from "styled-components"
import Card from "../Card"
import useModalForm from "../../Hooks/useModalForm"
import ModalForm from "../ModalForm"
import { useEffect, useState } from "react"


const Category = styled.section`
    width: 100%;
    padding: 32px;
    box-sizing: border-box;
    text-align: start;
    font-size: 15px;
    font-family: 'Roboto';
    min-width: calc(100%/2);

    //Tablet
    @media (max-width: 1180px){
        padding:0;
        display:flex;
        flex-flow:column;
        text-align: center;
    }

    //Cellphone
    @media (max-width: 768px){
        font-size: 10px;
        white-space: nowrap;
        padding-left: 20px;
    }
`

const Title = styled.h1`
    color: #F5F5F5;
    width: fit-content;
    padding: 20px 100px;
    border-radius: 20px;
    text-transform: uppercase;

    //Cellphone
    @media (max-width: 768px){
        padding: 20px 50px;
        
    }
`

const VideoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;     
    justify-content: space-between;

    //Tablet
    @media (max-width: 1180px){
     overflow-x: scroll;
     flex-flow:row;
     gap: 2vw;  
    }

    //Cellphone
    @media (max-width: 768px){
        margin-bottom: 90px;
        gap: 5vw;
    }
`

const Categories = ({data}) => {
    const { isModalOpen, openModal, closeModal } = useModalForm()
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null)
    

    useEffect(()=> {
        fetch("https://6670b51c0900b5f8724b67b2.mockapi.io/videos")
       .then((response) => response.json())
        .then((data) => {
        setVideos(data)
        })
    }, [])

    const { title, color } = data;

    const filteredVideos = videos.filter(video => video.category === title);

    const handleEdit = (video) => {
        setSelectedVideo(video);
        openModal();
    };

    const handleDelete = async () => {
        if(!selectedVideo) return;

        try {
            await fetch(`https://6670b51c0900b5f8724b67b2.mockapi.io/videos/${selectedVideo.id}`, {
                method: "DELETE",
            });
            setVideos(videos.filter(video => video.id !== selectedVideo.id));
            setSelectedVideo(null)
            console.log(`Video con id ${selectedVideo.id} eliminado con éxito`);
        } catch (error) {
            console.error("Error al eliminar el video:", error);
        }
    };

    return(
        <Category>
            <Title style= {{backgroundColor: color}}>{title}</Title>
            <VideoContainer>
              {filteredVideos.map( (video) => <Card
                    video={video}
                    key={video.id}
                    color={color}
                    onEdit={handleEdit}
                    onDelete={()=> {
                        setSelectedVideo(video);
                        handleDelete();
                    }}
                /> )}  
            </VideoContainer>
            
            

            {isModalOpen && <ModalForm onClose={closeModal} videos={selectedVideo} />}    
                
            
        </Category>
    )
}

export default Categories;