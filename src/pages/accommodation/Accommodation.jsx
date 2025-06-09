import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/carrousel/Carrousel";
import AllDetails from "../../components/accommodationDetails/AllDetails.jsx";
import ErrorPage from "../../components/errorPage/ErrorPage.jsx";

export default function Accommodation() {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/logements.json");
        const data = await res.json();
        const found = data.find((item) => item.id === id);
        setCard(found);
      } catch (err) {
        console.error("Erreur fetch:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) return <p>Chargement...</p>;
  if (!card) return <ErrorPage />;

  return (
    <div className="carrousel-details">
      <Carrousel pictures={card.pictures} />
      <AllDetails card={card} />
    </div>
  );
}
