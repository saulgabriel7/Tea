import sala from "../assets/sala.svg"
import contexto from "../assets/contexto.svg"

export function Conteudo() {
  return (
    <section className="conteudo">
        <div className="contexto-1">

            <div className="sala"><img src={sala} alt="" /></div>

            <div class="text">
                <p className="sub-titulo">Contexto psicológico</p>
                <h3>Facilita o tratamento psicológico <br /> e promove desenvolvimento </h3>
                <p className="desc">Nosso dispositivo complementa o trabalho do psicólogo ao <br /> monitorar emoções e facilitar a comunicação das crianças <br /> autistas, promovendo um desenvolvimento mais eficaz e <br /> personalizado.</p>
            </div>
        </div>

        <div className="contexto-2">
            <div class="text">
                <p className="sub-titulo">sala de aula</p>
                <h3>Inclusão e comunicação na <br /> sala de aula</h3>
                <p className="desc"> O TEA Sense é uma solução inovadora que transcende as <br /> barreiras da linguagem, facilitando a comunicação e a <br /> interação das crianças autistas com o ambiente.</p>
            </div>

            <div className="cont"><img src={contexto} alt="" /></div>
        </div>
    </section>
  )
}
