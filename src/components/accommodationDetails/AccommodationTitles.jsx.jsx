import "./AccommodationTitles.css";

export default function AccommodationTitles({ card }) {
  return (
    <>
    
       
            <div className="title-text">
                <h1>{card.title}</h1>
                <p>{card.location}</p>
            </div>
            
    
    
    </>
  );
}
