import img1 from "../assets/img-1.svg"
import img2 from "../assets/img-2.svg"
import img3 from "../assets/img-3.svg"
import img4 from "../assets/img-4.svg"

export function Imagens() {
  return (
    <section className="footer">
        <div className="frase">
            <p>Inspire transformações na sala de aula com nosso dispositivo, promovendo <br /> um ambiente inclusivo e propício ao desenvolvimento de todos.</p>
            <div className="imagens">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt=""  className="detalhe"/>
            </div>
        </div>
    </section>
  )
}
