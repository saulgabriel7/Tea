import styled from "styled-components";

export const HeaderContainer = styled.div`
    .header {
        display: flex;
        justify-content: space-between;
        margin: 25px 10px;
    }

    .img {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    .menu {
        display: flex;
        align-items: center;
        
    }

    .menu ul{
        display: flex;
        list-style: none;
        gap: 28px;
    }

    .menu li a{
        text-decoration: none;
        color: ${props => props.theme.corTexto};
        font-weight: 500;
        position: relative;
        display: inline-block;
        transition: color 0.3s ease; 
    }

    .menu li a::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #A4D1E6;
        transform-origin: bottom right;
        transition: transform 0.3s ease-out;
    }

    .menu li a:hover {
        color: #A4D1E6; 
    }
    .menu li a:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    .opcoes {
        display: flex;
        align-items: center;
        gap: 15px;
    }

`

export const IntroContainer = styled.div`
    .img img {
        max-width: 100%;
    }

    .introducao button {
        color: #fff;
        background-color: #2396DC;
        border: none;
        padding: 10px 20px;
        border-radius: 12px;
    }

`

export const SobreContainer = styled.div`
    .sobre {
        background: ${props => props.theme.sobre};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        max-width: 100%;
    }

    .titulo {
        margin-block: 30px;
        font-size: 16px;
        font-family: ${props => props.theme.fontDois};
        text-transform: uppercase;
    }

    .desc {
        font-size: 30px;
        font-weight: 400;
        margin-bottom: 30px;
    }

    .quadros {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        margin-bottom: 60px;
    }

    .quadros div {
        background-color: #fff;
        width: 250px;
        height: 250px;
        border-radius: 20px;
    }

    .quadros p {
        font-size: 22px;
        font-weight: bold;
    }
`

export const ConteudoContainer = styled.div`
    .conteudo {
        display: flex;
        justify-content: center;
        gap: 50px;
        margin-block: 60px;
        max-width: 100%;
    }

    .contexto-1 {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .contexto-2 {
        display: flex;
        flex-direction: column;
        gap: 100px;
        justify-content: end;
    }

    .contexto-1 img,
    .contexto-2 img {
        width: 390px;
        height: auto;
    }

    .sub-titulo {
        font-family: ${props => props.theme.fontDois};
        font-size: 12px;
        text-transform: uppercase;
        margin-bottom: 10px;
    }

    .conteudo h3 {
        font-size: 28px;
        margin-bottom: 10px;
    }

    .desc {
        font-size: 18px;
    }  
`

export const ImagensContainer = styled.div`
    .footer {
        background: ${props => props.theme.sobre};
        display: flex;
        flex-direction: column;
        height: 100%;
        padding-block: 60px;
        max-width: 100%;
    }

    .frase {
        display: flex;
        flex-direction: column;
        gap: 60px;
    }

    .frase p{
        text-align: center;
        font-size: 30px;
    }

    .imagens {
        display: flex;
        gap: 100px;
        justify-content: end;
    }

    .imagens img{
        width: 270px;
    }
`

export const FooterContainer = styled.div`
    .footer {
        background-image: url(${props => props.theme.backgroundImage});
        opacity: 0.87;
        background-size: cover;
        background-position: center;
        height: 85vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
    }

    .textos p {
        font-family: ${props => props.theme.fontDois};
        font-size: 18px;
        color: ${props => props.theme.branco};
    }

    .textos h3 {
        font-family: ${props => props.theme.fontUm};
        font-size: 50px;
        font-weight: bold;
        color: ${props => props.theme.branco};
    }

    .textos {
        margin-bottom: 30px;

    }

    .form {
        display: flex;
    }

    .form input {
        background: none;
        border: none;
        border-bottom: 1px solid #fff;
        color: ${props => props.theme.branco};
        width: 450px;
        height: 30px;
    }

    .form input::placeholder {
        color: ${props => props.theme.branco};
        opacity: 0.9;
    }

    .form img {
        position: relative;
        right: 20px;
        bottom: x;
    }

    .rodape {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 15vh;
        gap: 200px;
        background-color: ${props => props.theme.fundoFooter};
        width: 100%;
    }

    .rodape p {
        font-family: ${props => props.theme.fontDois};
        color: ${props => props.theme.branco};
        font-size: 15px;
    }

    .redes {
        display: flex;
        gap: 10px;
    }
`

export const IntegrantesContainer = styled.div`

`