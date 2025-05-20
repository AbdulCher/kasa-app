// components/Session.jsx
import "./Session.css";

export default function Session({ image, text }) {
  return (
    <div className="session">
      <img src={image} alt="bannière" className="session-image" />
      <div className="session-text">{text}</div>
    </div>
  );
}
