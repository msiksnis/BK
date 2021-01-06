import "./Card.css";

function Card({ src, button }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <button className="card__button">{button}</button>
    </div>
  );
}

export default Card;
