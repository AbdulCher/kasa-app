// Card.jsx
import "./Card.css"; // Tu peux créer ce fichier pour styliser la carte
import { Link } from "react-router-dom";

export default function Card({ title, cover, id }) {
  return (
    <Link to={`/logement/${id}`} className="card-link">
      <div className="card">
        <img src={cover} alt={title} className="card-cover" />
        <h2 className="card-title">{title}</h2>
      </div>
    </Link>
  );
}
