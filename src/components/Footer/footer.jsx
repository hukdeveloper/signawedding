import "./style.css";
import PhoneIcon from "../../assets/images/phone.svg";
import FacebookIcon from "../../assets/images/facebook.png";
import InstagramIcon from "../../assets/images/instagram.png";
import PrintrestIcon from "../../assets/images/printrest.png";
import CopyrightIcon from "../../assets/images/copyright.svg";
import UserIcon from "../../assets/images/loginIcon.svg";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };
  return (
    <div className="footer-main">
      <div className="footer-top">
        <h3>Office Hours: T•W•F 10-2 PM; 4-6PM EST</h3>
        <a href="mailto:hello@signatureweddingsaways.com">
          hello@signatureweddingsaways.com
        </a>
        <a href="tel:+609-746-0163">
          <img src={PhoneIcon} />
          609-746-0163
        </a>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">ABOUT US</a>
          </li>
          <li>
            <a href="/">DESTINATIONS</a>
          </li>
          <li>
            <a href="/">REQUEST CONSULTATION</a>
          </li>
          <li>
            <a href="/">BLOG</a>
          </li>
          <li>
            <a href="/">CONTACT US</a>
          </li>
          <li>
            <button className="login-btn">
              <img src={UserIcon} alt="UserIcon" />
              Log In
            </button>
          </li>
        </ul>
        <button onClick={scrollToTop} className="back-to-top-button">
          Back to Top
        </button>
      </div>
      <div className="footer-bottom">
        <div className="footer-icons">
          <img src={FacebookIcon} alt="FacebookIcon" />
          <img src={InstagramIcon} alt="FacebookIcon" />
          <img src={PrintrestIcon} alt="FacebookIcon" />
         
        </div>
        <p>
          <img src={CopyrightIcon} alt="CopyrightIcon" />
          2020 ESD Travels LLC | All Rights Reserved 
          <a href="https://www.termsfeed.com/live/9bb74a15-92bf-4e4c-8451-410f84e1c88a">Disclaimer</a>
          <a href="https://www.signatureweddingsaway.com/terms">Terms and Conditions</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
