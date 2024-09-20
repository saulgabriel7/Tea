import arduino from "../assets/arduino.svg"
import bateria from "../assets/bateria.svg"
import tela from "../assets/tela.svg"
import som from "../assets/som.svg"
import modulo from "../assets/modulo.svg"
import mp3 from "../assets/mp3.svg"
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
              <img src={tela} alt="" />
              <h3>Display LCD 2.4 </h3>
              <p>Tela de toque, usada para interação visual.</p>
            </div>
            
            
          </div>

          <div className="arduino">
            <div className="card">
              <img src={som} alt="" />
              <h3>Módulo Detector de Som</h3>
              <p>Captura ruídos para monitoramento do ambiente.</p>
            </div>

            <div className="card">
              <img src={modulo} alt="" />
              <h3>Módulo Bluetooth HC-05</h3>
              <p>Permite comunicação sem fio com dispositivos.</p>
            </div>
            
            
          </div>

          <div className="arduino">
            <div className="card">
              <img src={mp3} alt="" />
              <h3>Módulo Receptor Bluetooth</h3>
              <p>Reproduz sons, como ruído branco ou áudios.</p>
            </div>

            <div className="card">
              <img src={bateria} alt="" />
              <h3>Bateria 9V</h3>
              <p>Fonte de energia portátil para o sistema.</p>
            </div>
            
            
          </div>
       </div>

       <div className="imagem">
          <img src={maos} alt="" />
       </div>
    </div>
  )
}
