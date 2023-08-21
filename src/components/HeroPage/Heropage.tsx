import { HashLink as Link } from "react-router-hash-link";
import hero from "./Group.png";
import "./Heropage.css";

export function Heropage() {
  return (
    <div className="hero-container" id="hero">
      <div className="hero-text">
        <p className="hero-h1">Hazard Perception Test </p>
        <p className="hero-info">
          Lorem ipsum dolor sit amet consectetur. Vitae faucibus integer
          ullamcorper etiam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
        <Link to="#practice" smooth>
          <button className="take-test">Practice Test</button>
        </Link>
      </div>
      <img src={hero} alt="heropage" className="hero-page-pic" />
    </div>
  );
}
