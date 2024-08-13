import azul from "../assets/azul.svg"
import verde from "../assets/verde.svg"
import ciano from "../assets/ciano.svg"
import branco from "../assets/branco.svg"


export function Sobre() {
  return (
    <section className="sobre">
        <div>
            <p className="titulo">sobre</p>
            <p className="desc">O TEAsense auxilia crianças autistas <br />
             na comunicação de desconfortos e emoções, <br />
              facilitando a inclusão escolar.</p>
        </div>
        <div className="quadros">
            <div> 
                <img src={azul} alt="animal azul" /> 
                <p>Auxilia o <br />
                educador</p> 
            </div>

            <div > 
                <img src={verde} alt="animal verde" /> 
                <p>Monitora as <br />
                emoções</p> 
            </div>

            <div > 
                <img src={ciano} alt="animal ciano" /> 
                <p>Ajuda no <br />
                desenvolvimento</p> 
            </div>

            <div> 
                <img src={branco} alt="animal branco" /> 
                <p>Facilita a <br /> 
                comunicação</p> 
            </div>
        </div>
    </section>
  )
}
