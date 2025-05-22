import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Collapse from "../collapse/Collapse";

import "./CardDetails.css";

export default function CardDetails() {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/data/logements.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        setCard(found);
      })
      .catch((err) => console.error("Erreur lors du fetch :", err));
  }, [id]);

  if (!card) return <p>Chargement...</p>;

  const handlePrev = () =>
    setIndex((prevIndex) => (prevIndex - 1 + card.pictures.length) % card.pictures.length);

  const handleNext = () =>
    setIndex((prevIndex) => (prevIndex + 1) % card.pictures.length);

  return (
    <div className="card-details">
      <div className="carousel">
        <button className="arrow left" onClick={handlePrev}>
          <img src="/icons/arrow-left.svg" alt="Précédent" />
        </button>
        <img src={card.pictures[index]} alt={`Image ${index + 1}`} />
        <button className="arrow right" onClick={handleNext}>
          <img src="/icons/arrow-right.svg" alt="Suivant" />
        </button>
      </div>
      
      <div className="div-title-host">
        <div className="host-title">
          <h1>{card.title}</h1>
          <p>Paris, Ile de France</p>
        </div>

        <div className="host">
          <p className="host-name">{card.host.name}</p>
          <img className="host-picture" src={card.host.picture} alt={card.host.name} />
        </div>
      </div>

      <div className="div-tags-rating">
        <div className="tags">
          {card.tags && (
            <div className="tags-container">
              {card.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
               ))}
            </div>
          )}
        </div>

        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className={star <= parseInt(card.rating) ? "star filled" : "star"}>
              ★
            </span>
          ))}
        </div>

      </div>
      
      <div className="card-collapses">
        <Collapse title="Description" content={card.description} className="card-collapse" />
        <Collapse title="Équipements" content={card.equipments} className="card-collapse" />
      </div>

    </div>
  );
}
