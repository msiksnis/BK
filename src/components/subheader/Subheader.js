import "./Subheader.css";

function Subheader() {
  return (
    <div className="subheader">
      <div className="subheader__text">
        <div className="subheader__textfield">
          How would you like to receive this order?
        </div>
        <button className="subheader__button">Change</button>
      </div>
    </div>
  );
}

export default Subheader;
