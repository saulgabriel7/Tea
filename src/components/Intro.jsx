import introimg from "../assets/introduimg.svg"


export  function Intro() {
  return (
    <section className="introducao">
        <div className="img">
            <img src={introimg} alt="" />
        </div>
        {/* <button>Descubra!</button> */}
    </section>
  )
  
}

