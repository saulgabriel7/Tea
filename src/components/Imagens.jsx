import React, { useState, useRef } from 'react';
import img1 from "../assets/img-1.svg";
import img2 from "../assets/img-2.svg";
import img3 from "../assets/img-3.svg";
import img4 from "../assets/img-4.svg";

export function Imagens() {
  const [position, setPosition] = useState(0);
  const startXRef = useRef(0);

  const handleDragStart = (e) => {
    startXRef.current = e.clientX || e.touches[0].clientX; // Ponto inicial do arraste
  };

  const handleDrag = (e) => {
    if (e.clientX || e.touches) {
      const currentX = e.clientX || e.touches[0].clientX;
      const deltaX = currentX - startXRef.current;

      setPosition(prevPosition => prevPosition + deltaX);
      startXRef.current = currentX;
    }
  };

  return (
    <section className="footer">
      <div className="frase">
        <p>Inspire transformações na sala de aula com nosso dispositivo, promovendo <br /> um ambiente inclusivo e propício ao desenvolvimento de todos.</p>
        <div
          className="imagens"
          draggable="true"
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onTouchStart={handleDragStart} // Para mobile
          onTouchMove={handleDrag} // Para mobile
          style={{ transform: `translateX(${position}px)` }}
        >
          <img src={img1} alt="Imagem 1" />
          <img src={img2} alt="Imagem 2" />
          <img src={img3} alt="Imagem 3" />
          <img src={img4} alt="Imagem 4" className="detalhe" />
        </div>
      </div>
    </section>
  );
}
