import { useState } from "react";
import "./Carrousel.css";

export default function Carrousel({ pictures }) {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + pictures.length) % pictures.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % pictures.length);
  };

  return (
    <div className="my-carrousel">
      <button className="arrow left" onClick={handlePrev}>
        <img src="/icons/arrow-left.svg" alt="Précédent" />
      </button>
      <img src={pictures[index]} alt={`Image ${index + 1}`} />
      <button className="arrow right" onClick={handleNext}>
        <img src="/icons/arrow-right.svg" alt="Suivant" />
      </button>
    </div>
  );
}
