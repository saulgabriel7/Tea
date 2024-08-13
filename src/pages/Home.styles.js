import styled from 'styled-components';

export const HeaderContainer = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    padding: 25px 15px;
    max-width: 100%;
    height: auto;
    position: relative;
    z-index: 10;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .menu {
    position: fixed;
    top: 0;
    right: -300px; /* Mantém o menu fora da tela */
    width: 300px;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    transition: transform 0.3s ease, right 0.3s ease;
    z-index: 1000;
  }

  .menu.open {
    right: 0; /* Move o menu para dentro da tela */
  }

  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .menu li a {
    text-decoration: none;
    color: ${props => props.theme.corTexto};
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .menu li a:hover {
    color: #A4D1E6;
  }

  .close-icon {
    align-self: flex-end;
    cursor: pointer;
    margin-bottom: 20px;
    width: 24px;
    height: 24px;
  }

  .opcoes {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .opcoes img:last-child {
    cursor: pointer;
  }

  .popup {
    position: absolute;
    top: 70px; 
    right: 85px;
    background: #182352;
    padding: 15px;
    width: 200px;
    border-radius: 15px;
    z-index: 1000;
  }

  .popup h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 18px;
    color: ${props => props.theme.branco};
  }

  .popup p {
    margin-bottom: 10px;
    font-size: 14px;
    color: ${props => props.theme.branco};
  }

  .popup ul {
    list-style: none;
    padding: 0;
  }

  .popup ul li {
    margin-bottom: 5px;
    font-size: 14px;
    color: ${props => props.theme.branco};
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
  }
`;




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

    @media(max-width:800px) {
        .titulo {
            font-size: 15px;
        }

        .desc {
            font-size: 20px;
            margin-inline:10px;
        }

        .quadros{
            gap:20px;
        }

        .quadros div {
            width: 175px;
            height: 175px;
            border-radius: 20px;
        }

        .quadros img{
            width: 100px;
        }

        .quadros p {
            font-size: 15px;
        }

        .desc {}
            br {
            display: none
            }
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
        font-size: 14px;
        text-transform: uppercase;
        text: bold;
        margin-bottom: 10px;
    }

    .conteudo h3 {
        font-size: 28px;
        margin-bottom: 10px;
    }

    .desc {
        font-size: 18px;
    }  

    @media(max-width:800px){

    .sala,
    .cont{
        text-align:center;
    }

    .contexto-1 {}
    br {
    display: none
    }


    .contexto-1 img,
    .contexto-2 img {
        width: 390px;
        height: auto;
    }

    .contexto-2{
        flex-direction: column-reverse;
        gap: 15px;
    }
    
    .contexto-1{
        gap: 15px;
    }

    .conteudo h3 {
        font-size: 18px;
    }

    .desc {
        font-size: 16px;
    }

    .text{
       display: flex;
        justify-content: center;
        margin: 20px;
        flex-direction: column;
    }

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
    overflow: hidden; /* Para evitar que as imagens saiam da tela */
  }

  .frase {
    display: flex;
    flex-direction: column;
    gap: 60px;
    width: 100%;
  }

  .frase p {
    text-align: center;
    font-size: 30px;
  }

  .imagens {
    display: flex;
    width: fit-content; /* Ajuste para permitir o arraste das imagens */
    gap: 100px;
    cursor: grab; /* Indica que o usuário pode arrastar */
  }

  .imagens img {
    width: 270px;
  }

  @media(max-width: 800px) {
    .frase p {
      font-size: 20px;
    }

    .frase{
    gap:25px;
    }

    .imagens img {
      width: 200px;
    }

    .frase p {}
    br {
    display: none
    }
  }
`;




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
    }

    @media(max-width:800px) {
        .footer {
            height: 80vh;
        }

        .textos p {
            font-size: 15px;
        }

        .textos h3 {
            font-size: 30px;
        }

        .form input {
            width: 350px;
            height: 30px;
        }
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

    @media(max-width:800px) {
        .rodape {
            gap: 35px;
        }

        .rodape p {
            font-size: 13px;
        }
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

    @media(max-width:800px) {
        .textos {
            width: 510px;
        }
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

    @media(max-width: 800px) {
        .explicacao-1 {
            display: block;
            text-align: center;
        }

        .explicacao-1 img{
            width: 400px;
        }

        .explicacao-2 {
            display: block;
            text-align: center;
        }

        .explicacao-2 img{
            width: 400px;
        }
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
        height: 270px;
        padding-inline: 40px;
        padding-top: 20px;
        margin-right: 10px;
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

    @media(max-width: 800px) {
        .quadro {
            width: 400px;
            height: 560px;
            padding-inline: 20px;
            padding-top: 10px;
            margin-right: 5px;
        }

        .quadro h3 {
            font-size: 18px;
        }
    }
`