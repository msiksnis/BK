import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__info">
          <div className="footer__bkcInfo">
            <div className="footer__bkcInfoSection">BKC INFO</div>
            <br />
            <div className="footer__bkcInfoOptions">
              <Link className="nodecor" to="/about-bk">
                <span>About BK</span>
                <br />
              </Link>
              Trademarks Notice
              <br />
              Food Quality
              <br />
              <a
                className="nodecor"
                target="_blank"
                rel="noreferrer"
                href="https://www.rbi.com/English/news/default.aspx"
              >
                News & Press
              </a>
              <br />
              Global Media Contacts
              <br />
              <a
                className="nodecor"
                target="_blank"
                rel="noreferrer"
                href="https://www.rbi.com/English/investors/investor-home/default.aspx"
              >
                Investor Relations
              </a>
              <br />
              Franchising
              <br />
              International
              <br />
              Menu
            </div>
          </div>

          <div className="footer__myInfo">
            <div className="footer__myInfoSection">MY INFO</div>
            <br />
            <div className="footer__myInfoOptions">
              BK App
              <br />
              Gift Cards / Crown Cards
              <br />
              Reload Card
              <br />
              Check Card Balance
            </div>
          </div>

          <div className="footer__careers">
            <div className="footer__careersSection">CAREERS</div>
            <br />
            <div className="footer__careersOptions">
              Careers Home
              <br />
              Opportunities
              <br />
              Apply
            </div>
          </div>

          <div className="footer__bkCares">
            <div className="footer__bkCaresSection">BK CARES</div>
            <br />
            <div className="footer__bkCaresOptions">
              Nutrition Explorer
              <br />
              Download Allergens
              <br />
              Allergens View in Browser
              <br />
              Privacy Policy
              <br />
              Do Not Sell My Personal Information
              <br />
              Responsibility
              <br />
              BK McLAMORE Foundation
              <br />
              Diversity
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottomTop">
          <p>BURGER KING</p>
          <div className="footer__icons">
            <div className="footer__instagram">I</div>
            <div className="footer__facebook">C</div>
            <div className="footer__youtube">O</div>
            <div className="footer__twiter">N</div>
          </div>
        </div>
      </div>
      <div className="footer__bottomBottom">
        <div className="footer__terms">
          Policies
          <hr />
          Terms Of Service
          <hr />
          Accessibility
          <hr />
          Contact Us
        </div>
      </div>
      <div className="footer__bottomBottom">
        <p>TM & Copyright 2020 Burger King Corporation. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
