import seta from "../assets/seta-baixo.svg"
import sorriso from "../assets/sorriso.svg"
import trem from "../assets/trem.svg"
import maos from "../assets/maos.svg"
import instagram from "../assets/insta.svg"
import TikTok from "../assets/tiktok.svg"
import Twitter from "../assets/x.svg"

export  function Evidencias() {
  return (
    <div class="comprovacoes">
        <div className="tec">
            <p>Um Mundo Mais Conectado para Crianças Autistas</p>
            <h3>Tecnologia inovadora para auxiliar no <br /> desenvolvimento e comunicação</h3>
            <img src={seta} alt="" />
        </div>

        <div className="conteudo" id="conteudo">
            <div className="quadro">
                <div className="desc-1">
                    <h3>Evidências científicas</h3> <br />
                    <p>O Tea Sense é uma solução inovadora que foi desenvolvida  para crianças autistas de nível 1, com idades entre 6 e 10  anos, demonstrando eficácia comprovada na facilitação da  comunicação, melhoria da interação social e suporte ao  tratamento psicológico.</p> <br />
                </div>

                <div className="desc-2">
                    <p>Client</p>
                    <p>New Magazine</p>
                </div>
                <div className="desc-2">
                    <p>Date</p>
                    <p>May, 2024</p>
                </div>
                <div className="desc-2">
                    <p>Author</p>
                    <p>Author Name</p>
                </div>

                <div className="redes-sociais">
                    <img src={instagram} alt="" />
                    <img src={TikTok} alt="" />
                    <img src={Twitter} alt="" />
          </div>
            </div> 

            <div className="textos">
                <div className="sorriso">
                    <img src={sorriso} alt="" />
                </div>
                <div className="texto-1">
                    <h3>Comprovações cíentificas</h3>
                    <h4>Melhoria na Comunicação Verbal e Não Verbal:</h4>
                    <p>Pesquisas mostram que o uso de dispositivos assistivos pode aumentar significativamente  a capacidade de comunicação em crianças autistas, tanto verbal quanto não verbalmente.</p>

                    <h4>Redução de Comportamentos Repetitivos: </h4>
                    <p>Estudos indicam que intervenções tecnológicas, como o uso de feedback haptico e visual,  podem reduzir comportamentos repetitivos, proporcionando um ambiente mais estável e previsível para a criança.</p>
                </div>

                <div className="texto-img">
                    <div>
                        <h4>Aumento da Interação Social: </h4>
                        <p>Dispositivos que facilitam a comunicação e <br /> expressam estados emocionais ajudam a <br /> aumentar a interação social, promovendo melhor <br /> entendimento e cooperação entre crianças <br /> autistas e seus pares. 
                        </p>

                        <h4>Melhoria na Qualidade de Vida: </h4>
                        <p>A utilização de sensores para monitorar o <br />ambiente e fornecer feedback em tempo real <br />contribui para melhorar a qualidade de vida das <br /> crianças autistas, tornando o dia a dia mais <br />confortável e menos estressante. </p>
                    </div>

                    <div>
                        <img src={trem} alt="" />
                    </div>

                    
                </div>
            </div>
        </div>


        <div className="maos">
            <img src={maos} alt="" />
        </div>

    </div>

  )
}