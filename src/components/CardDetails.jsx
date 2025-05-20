import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./cardDetails.css";

export default function CardDetails() {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    fetch("/data/logements.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Données récupérées :", data); // 🔍 Vérification
        const found = data.find((item) => item.id === id);
        setCard(found);
      })
      .catch((err) => console.error("Erreur lors du fetch :", err));
  }, [id]);

  if (!card) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="card-details">
      <div className="carousel">
        {card.pictures.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <h1>{card.title}</h1>
      <p>{card.description}</p>
    </div>
  );
}
