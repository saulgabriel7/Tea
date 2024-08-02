import enviar from "../assets/enviar.svg"
import insta from "../assets/insta.svg"
import tiktok from "../assets/tiktok.svg"
import x from "../assets/x.svg"

export function Footer() {
  return (
    <section >
        <div className="footer">
            <div className="textos">
              <p>QUER RECEBER ATUALIAZAÇÕES?</p>
              <h3>Assine para novidades!</h3>
            </div>
            <div className="form">
                <form action="">
                    <input type="text" placeholder="Coloque seu email aqui!" />
                </form>
                <img src={enviar} alt="" />
            </div>
        </div>

        <div className="rodape">
          <p>São Paulo, SP <br /> Brasil</p>
          <p>info@email.com <br /> +55 987654321</p>
          <div className="redes">
            <img src={insta} alt="" />
            <img src={tiktok} alt="" />
            <img src={x} alt="" />
          </div>
        </div>
    </section>
  )
}
