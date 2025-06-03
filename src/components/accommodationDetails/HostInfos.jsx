import starFilled from "../../assets/star-filled.svg";
import starEmpty from "../../assets/star-empty.svg";
import "./HostInfos.css"

export default function HostInfos ({ card }) {
  return (
    <>
    <div className="host-infos">
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
    
    </>
  );
}
