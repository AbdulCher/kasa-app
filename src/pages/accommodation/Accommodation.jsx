import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/carrousel/Carrousel";
import AccommodationDetails from "../../components/accommodationDetails/AccommodationDetails";

export default function Accommodation() {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    fetch("/data/logements.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        setCard(found);
      })
      .catch((err) => console.error("Erreur fetch:", err));
  }, [id]);

  if (!card) return <p>Chargement...</p>;

  return (
    <div className="carrousel-details">
      <Carrousel pictures={card.pictures} />
      <AccommodationDetails card={card} />
    </div>
  );
}
