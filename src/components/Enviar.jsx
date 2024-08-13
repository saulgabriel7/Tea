import enviar from "../assets/enviar.svg"

export function Enviar() {
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
    </section>
  )
}
