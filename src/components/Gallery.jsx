// Gallery.jsx
import { useEffect, useState } from "react";
import Card from "./Card"; // nom corrigé ici
import "./Gallery.css";

export default function Gallery() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/data/logements.json") // chemin depuis public
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error("Erreur de fetch :", err));
  }, []);

  return (
    <div className="gallery">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          cover={card.cover}
        />
      ))}
    </div>
  );
}
