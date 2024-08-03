import saul from "../assets/saul.svg"
import taina from "../assets/taina.svg"
import esther from "../assets/esther.svg"
import davi from "../assets/davi.svg"

export function Integrantes() {
  const integrantes = [
    { src: saul, nome: 'Saul Gabriel', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', cor:'rgb(3, 147, 100, 0.7)' },
    { src: taina, nome: 'Tainá Dos Santos', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', cor:'rgb(0, 0, 0, 0.7)'},
    { src: esther, nome: 'Esther Santos', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', cor:'rgb(122, 103, 53, 0.7)'},
    { src: davi, nome: 'Davi Da Hora', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', cor:'rgb(112, 194, 199, 0.7)' },
  ];

  return (
    <section className="section">
      <div className="participantesContainer">
        <div className="textos">
          <p >PARTICIPANTES</p>
          <h3>Quem fez esse projeto acontecer?</h3>
        </div>

        <div className="cardContainer" >
          { integrantes.map((integrante) => (
            <div className="card" key={integrante.nome} >
              <img src={integrante.src} alt={integrante.nome} />
              <div className="card-info" style={{ backgroundColor: integrante.cor }}>
                <p className="nome">{integrante.nome}</p>
                <p className="desc"> <br /> {integrante.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
