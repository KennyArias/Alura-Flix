import { Link } from "react-router-dom"
import styled from "styled-components"
import { CgAdd } from "react-icons/cg"
import { AiOutlineHome } from "react-icons/ai"


const StyledHeader = styled.header`
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: solid;
    border-color: #2271D1;
    img{
        width: 100px;
    }

    //Cellphone
    @media (max-width: 768px) {
        position: fixed;
        bottom: 0px;
        background-color: #000000;
        width: 100%;
        img{
            display: none;
        }

    }
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 15px;

    //Cellphone
    @media (max-width: 768px){
        width: 100%;
        justify-content: space-evenly;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

const Button = styled.button`
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

    //Cellphone
    @media (max-width: 768px){
        border-radius: 20px;
        border: none;
        display: flex;
        flex-flow: nowrap;
        font-size: 0px;

        &:active{
            font-size: 15px;
            align-items: center;
            text-align: center;
            gap: 10px
        }
    }
`

const NewVideoIcon = styled(CgAdd)`
    display: none;

    //Cellphone
    @media (max-width: 768px){
        display: inline;
        font-size: 40px;
    }
`

const HomeIcon = styled(AiOutlineHome)`
    display:none;

    //Cellphone
    @media (max-width: 768px){
        display: flex;
        font-size: 40px;
        & :active{
            font-size: 20px;
        }
    }
`

const Header = () => {
    return(
        <StyledHeader>
            <img src="img/LogoMain.png" alt="Logo AluraFlix" />
            <ButtonContainer>
                <StyledLink to="/">
                    <Button>
                        <HomeIcon />
                        Home
                    </Button>
                </StyledLink>

                <StyledLink to="/new-video">
                    <Button>
                        <NewVideoIcon />
                        Nuevo video
                    </Button>
                </StyledLink>
                
            </ButtonContainer>
            
        </StyledHeader>
    )
}

export default Header;