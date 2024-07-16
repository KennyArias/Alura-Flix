import styled from "styled-components"

const StyledFooter = styled.footer`
    font-family: 'Roboto';
    display: flex;
    flex-flow: column;
    align-items:center;
    justify-content: center;
    border-top: 2px solid #2271D1;
    color: white;
    & img{
        margin-top: 20px;
    }

    //Cellphone
    @media (max-width: 768px){
        display:none;
        & img,
        p{
            display: none;
        }
    }
`

const Footer = () => {
    return(
        <StyledFooter>
            <img src="img/LogoMain.png"/>
            <p>By: Kenny Arias - 2024</p>
        </StyledFooter>
    )
}

export default Footer;