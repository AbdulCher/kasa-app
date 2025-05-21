import "./Session.css";

export default function Session({ image, text }) {
  return (
    <div className="session-page">
      <img src={image} alt="bannière" className="session-image" />
      <div className="session-text">{text}</div>
    </div>
  );
}
