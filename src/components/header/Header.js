import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__nav">
          <Link className="link" to="/orders">
            <span className="header__order">ORDER</span>
          </Link>
          <Link className="link" to="/restaurants">
            <span className="header__restaurants">RESTAURANTS</span>
          </Link>
          <Link className="link" to="/offers">
            <span className="header__offers">OFFERS</span>
          </Link>
          <Link className="link" to="/trending">
            <span className="header__trending">TRENDING</span>
          </Link>
          <Link className="link" to="/more">
            <span className="header__more">MORE</span>
          </Link>
        </div>
      </div>
      <div className="header__center">
        <Link to="/">
          <img
            className="order header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Burger_King_logo.svg/1024px-Burger_King_logo.svg.png"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="header__right">
        <button className="header__signup">SIGN UP</button>
        <button className="header__cart">€0.00</button>
      </div>
    </div>
  );
}

export default Header;
