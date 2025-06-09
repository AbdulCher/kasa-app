import "./Card.css"; 
import { Link } from "react-router-dom";

export default function Card({ id, title, cover }) {
  return (
    <>
      <Link to={`/accommodation/${id}`} className="card-link">
        <div className="card">
          <img src={cover} alt={title} className="card-cover" />
          <div className="my-div-card-title">
          <h2 className="card-title">{title}</h2>
          </div>
        </div>
      </Link>
    </>
  );
}
