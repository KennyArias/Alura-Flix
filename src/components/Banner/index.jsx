import styled from "styled-components"


const BannerContainer = styled.div`
    width: 100%;
    height: 580px;
    background-size: cover;
    background-repeat: no-repeat;
    border-bottom: 3px solid #000000;

    //Cellphone
    @media (max-width: 768px) {
       width: 0;
       height: 0;
    }
`

const BannerImg = styled.img`
    height: 100%;
    width: 100%;
`



function Banner (){
    return(

        <BannerContainer>
            <BannerImg src="../img/BannerMain.png" />
        </BannerContainer>
    )
}

export default Banner;