import styled from "styled-components";

export const HeaderContainer = styled.div`
    .header {
        display: flex;
        justify-content: space-between;
        padding: 25px 15px;
        max-width: 100%;
        height: auto;
    }

    .logo {
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
        flex-wrap: wrap;
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
    .img {
        display: flex;
        justify-content: center;
        align-items: center;
    }

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
        flex-wrap: wrap;
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
        align-items: center;
        gap: 50px;
        margin-block: 60px;
        max-width: 100%;
        flex-wrap: wrap;
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
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        padding-block: 60px;
        width: 100%;
    }

    .frase {
        display: flex;
        flex-direction: column;
        gap: 60px;
        width: 100%;
    }

    .frase p{
        text-align: center;
        font-size: 30px;
    }

    .imagens {
        display: flex;
        width: 100%;
        gap: 100px;
        justify-content: end;
    }

    .imagens img{
        width: 270px;
    }
`

export const EnviarContainer = styled.div`
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
`

export const FooterContainer = styled.div`
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
    .section {
        padding: 20px;
        text-align: center;
        background-image: url(${props => props.theme.backgroundParticipantes});
        opacity: 0.87;
        background-size: cover;
        background-position: center;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        gap: 100px;
    }

    .participantesContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 70px;
        flex-wrap: wrap;
    }

    .textos {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        width: 1060px;
    }

    .textos p {
        font-family: ${props => props.theme.fontDois};
        font-size: 16px;
    }

    .textos h3 {
        font-size: 30px;
        font-weight: bold;
        margin: 10px 0;
    }

    .cardContainer {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
    }

    .card {
        display: flex;
        flex-direction: column;
        position: relative;
        margin-bottom: 50px;
        width: 250px;
        height: 300px;
        overflow: hidden;
        border-radius: 12px;
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.05);
        }

        &:hover .card-info {
            opacity: 1;
        }
    }

    .card p {
        color: #fff;
    }

    .card-info  {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        padding-left: 15px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 10px;
        opacity: 0;
        transition: opacity 0.3s;
    }

    .card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .nome {
        font-family: ${props => props.theme.fontUm};
        font-size: 18px;
        font-weight: bold;
        text-align: start;
        width: 100%;
    }

    .desc {
        width: 100%;
        text-align: start;
        font-family: ${props => props.theme.fontUm};
        font-size: 16px;
    }
`

export const MateriaisContainer = styled.div`
    .componentes {
        background: ${props => props.theme.sobre};
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .titulo {
        font-size: 16px;
        font-family: ${props => props.theme.fontDois};
        text-align: center;
    }

    .sub-titulo {
        font-family: ${props => props.theme.fontUm};
        text-align: center;
        font-size: 30px;
        margin-top: 10px;
    }

    .cards {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        gap: 50px;
        width: 613px;
        height: auto;
        margin-top: 100px;
    }

    .card {
        padding: 40px;
        border-radius: 20px;
        background: ${props => props.theme.branco};
    }

    .arduino {
        display: flex;
        gap: 50px;
    }

    .arduino img{
        width: 200px;
        height: auto;
    }

    .card img {
        margin-bottom: 10px;
    }


    .imagem {
        display: flex;
    }

    .imagem img {
        width: 100%;
        height: auto;
    }
`

export const ExplicacaoContainer = styled.div`
    .section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .explicacao-1 {
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme.sobre};
        width: 100%;
        padding-top: 30px;
    }

    .textos h3 {
        font-size: 30px;
        margin-bottom: 18px;
        margin-top: 20px;
    }

    .textos p {
        font-size: 18px;
        margin-bottom: 50px;
        
    }

    .imagem-1 img {
        width: 500px;
        max-width: 100%;
        height: auto;
    }

    .explicacao-2 {
        display: flex;
        justify-content: center;
        width: 100%;
        padding-top: 100px;
        gap: 40px;
    }

    .imagem-2 img {
        width: 500px;
        max-width: 100%;
        height: auto;
        border-radius: 20px;
    }

    .maos {
        display: flex;
        justify-content: end;
    }

    .maos img {
        max-width: 100%;
        height: auto;
    }
`

export const ManualContainer = styled.div`
    .manual {
        display: flex;
        flex-direction: column;
        padding-inline: 135px;
        padding-top: 70px;
    }

    .titulo {
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
    }

    .titulo p {
        font-family: ${props => props.theme.fontDois};
        font-size: 18px;
    }

    .titulo h3 {
        font-size: 24px;
        margin-top: 5px;
        margin-bottom: 50px;
    }

    .titulo img {
        width: 900px;
    }

    .descricao h4 {
        font-size: 24px;
        margin-block: 35px;
    }

    .descricao h5{
        font-size: 19px;
        font-weight: normal;
    }

    .descricao p {
        font-family: ${props => props.theme.fontDois};
        font-size: 17px;
    }

    .descricao p, 
    .descricao h5 {
        padding-left: 20px;
    }

    .maos {
        display: flex;
        justify-content: end;
    }

    .maos img {
        max-width: 100%;
        height: auto;
    }
`

export const EvidenciasContainer = styled.div`
    .comprovacoes {
        display: flex;
        flex-direction: column;
        max-width: 100%;
        background: ${props => props.theme.sobre};

    }

    .quadro {
        position: sticky;
        top: 0; 
        width: 800px;
        height: 245px;
        padding-inline: 50px;
    }

    .quadro h3 {
        font-size: 22px;
    }

    .tec {
        padding-top: 100px;
        text-align: center;
    }

    .tec p {
        font-family: ${props => props.theme.fontDois};
        font-size: 20px;
    }

    .tec h3 {
        margin-top: 5px;
        margin-bottom: 30px;
        font-size: 40px;
    }

    .conteudo {
        display: flex;
        padding-top: 70px;
        justify-content: space-between;
    }

    .conteudo img {
        margin-bottom: 30px;
    }

    .textos h3 {
        font-size: 36px;
        margin-bottom: 25px;
    }

    .textos h4 {
        font-size: 20px;
        margin-bottom: 10px;
        color: ${props => props.theme.corTexto};
    }

    .textos p {
        font-family: ${props => props.theme.fontDois};
        font-size: 18px;
        margin-bottom: 25px;
    }

    .desc-1 {
        display: flex;
        flex-direction: column;
    }

    .desc-2 {
        display: flex;
    }

    .sorriso {
        width: 600px;
    }

    .textos {
        display: flex;
        flex-direction: column;
    }

    .texto-1 {
        max-width: 100%;
    }

    .texto-img {
        display: flex;
        font-weight: normal;
        max-width: 100%;
        gap: 20px;
    }

    .texto-img img {
        max-width: 100%;
    }

    .maos {
        display: flex;
        justify-content: end;
    }

    .maos img {
        max-width: 100%;
        height: auto;
    }
`