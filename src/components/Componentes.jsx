import arduino from "../assets/arduino.svg"
import maos from "../assets/maos.svg"


export function Componentes() {
  return (
    <div className="componentes">
      <p className="titulo">MATERIAIS UTILIZADOS</p>
      <h3 className="sub-titulo">O Que usamos para realizar esse projeto?</h3>

       <div className="cards">
          <div className="arduino">
            <div className="card">
              <img src={arduino} alt="" />
              <h3>Arduino R3</h3>
              <p>Placa microcontroladora, o cérebro do sistema</p>
            </div>

            <div className="card">
              <img src={arduino} alt="" />
              <h3>Arduino R3</h3>
              <p>Placa microcontroladora, o cérebro do sistema</p>
            </div>
            
            
          </div>

          <div className="arduino">
            <div className="card">
              <img src={arduino} alt="" />
              <h3>Arduino R3</h3>
              <p>Placa microcontroladora, o cérebro do sistema</p>
            </div>

            <div className="card">
              <img src={arduino} alt="" />
              <h3>Arduino R3</h3>
              <p>Placa microcontroladora, o cérebro do sistema</p>
            </div>
            
            
          </div>

          <div className="arduino">
            <div className="card">
              <img src={arduino} alt="" />
              <h3>Arduino R3</h3>
              <p>Placa microcontroladora, o cérebro do sistema</p>
            </div>

            <div className="card">
              <img src={arduino} alt="" />
              <h3>Arduino R3</h3>
              <p>Placa microcontroladora, o cérebro do sistema</p>
            </div>
            
            
          </div>
       </div>

       <div className="imagem">
          <img src={maos} alt="" />
       </div>
    </div>
  )
}
