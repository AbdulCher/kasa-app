// Card.jsx
import "./Card.css"; // Tu peux créer ce fichier pour styliser la carte
import { Link } from "react-router-dom";

export default function Card({ id, title, cover }) {
  return (
    <div className="my-div-card">
      <Link to={`/accommodation/${id}`} className="card-link">
        <div className="card">
          <img src={cover} alt={title} className="card-cover" />
          <h2 className="card-title">{title}</h2>
        </div>
      </Link>
    </div>
  );
}
