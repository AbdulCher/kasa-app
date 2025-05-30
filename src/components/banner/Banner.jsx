import "./Banner.css";

export default function Banner({ image, text }) {
  return (
    <>
      <div className="banner-page">
        <img src={image} alt="banner" className="banner-image" />
        <div className="banner-text">{text}</div>
      </div>
    </>
  );
}
