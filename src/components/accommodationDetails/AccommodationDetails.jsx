import Collapse from "../collapse/Collapse";
import starFilled from "../../assets/star-filled.svg";
import starEmpty from "../../assets/star-empty.svg";
import "./AccommodationDetails.css";

export default function AccommodationDetails({ card }) {
  return (
    <>
    <div className="accommodation-infos">
        <div className="div-title-tag">
            <div className="title-tag">
                <h1>{card.title}</h1>
                <p>{card.location}</p>
            </div>
            <div className="tags-container">
                {card.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
                ))}
            </div>
            
        </div>

        <div className="div-host-rating">
            <div className="host">
                <p className="host-name">{card.host.name}</p>
                <img className="host-picture" src={card.host.picture} alt={card.host.name} />
            </div>
            <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                    <img
                        key={star}
                        src={star <= parseInt(card.rating) ? starFilled : starEmpty}
                        alt={`Star ${star}`}
                        className="star"
                    />
                ))}
            </div>
        </div>
    </div>
    <div className="carrousel-collapses">
        <Collapse title="Description" content={card.description} />
        <Collapse title="Équipements" content={card.equipments} />
    </div>
    </>
  );
}
