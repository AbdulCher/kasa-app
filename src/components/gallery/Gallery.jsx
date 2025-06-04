import { useEffect, useState } from "react";
import Card from "../card/Card";
import "./Gallery.css";

export default function Gallery() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/logements.json"); // chemin depuis public
        const data = await res.json();
        setCards(data);
      } catch (err) {
        console.error("Erreur de fetch :", err);
      }
    };

    fetchData();
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