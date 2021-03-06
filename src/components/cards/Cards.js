import Card from "../card/Card";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__one">
        <Card
          src="https://i.ibb.co/VmRGGL7/Card1.png"
          buttonText="Get Delivery"
        />
      </div>

      <Card src="https://i.ibb.co/wJws5w9/Card3.png" />
      <Card src="https://i.ibb.co/fpGw80W/Card2.png" />
      <Card src="https://i.ibb.co/fxdnt63/Card4.png" />
    </div>
  );
}

export default Cards;
