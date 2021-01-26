import "./Card.css";

function Card({ src, buttonText }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <button className="button">{buttonText}</button>
    </div>
  );
}

export default Card;
