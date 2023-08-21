import logo from "./Vector.png";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
export function Navbar() {
  return (
    <div className="nav-container">
      <Link to="#hero" smooth className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <p style={{ fontWeight: "800", fontSize: "17px", paddingLeft: "5px" }}>
          Logoipsum
        </p>
      </Link>
      <div className="nav-item-container">
        <Link to="#about" smooth className="links">
          About the Test
        </Link>
        <Link to="#practice" smooth className="links">
          Practice Test
        </Link>
        <Link to="#contact" smooth className="links">
          Contact
        </Link>
      </div>
    </div>
  );
}
