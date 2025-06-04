import "./Tags.css";

export default function Tags({ card }) {
  return (
    <>
    <div className="tags-container">
      {card.tags.map((tag, index) => (
      <span key={index} className="tag">{tag}</span>
      ))}
    </div>
    </>
  );
}
