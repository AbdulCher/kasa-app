import { useState } from "react";
import "./Collapse.css";
import arrow from "../../assets/arrow.svg";


export default function Collapse({ title, content, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${className}`}>
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <img
          src={arrow}
          alt={isOpen ? "Réduire" : "Déplier"}
          className={`collapse-icon ${isOpen ? "rotated" : ""}`}
        />
      </div>

      
        <div className={`collapse-content-wrapper ${isOpen ? "open" : ""}`}>
        <div className="collapse-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
  
    </div>
    </div>
  );
}
