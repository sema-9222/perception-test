import "./AboutTest.css";
import check from "./check.png";
import testImage from "./testImage.png";
export function AboutTest() {
  return (
    <div className="about-test" id="about">
      <img src={testImage} alt="test image" className="test-image" />
      <div className="about-text">
        <p className="about-h1">About the Hazard Perception Test </p>
        <p className="about-info">
          The hazard perception test is designed to evaluate your ability to
          anticipate and respond to potential hazards while driving.
        </p>
        <div className="checks">
          <img src={check} alt="icon" className="check" />{" "}
          <p className="checks-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, facilis.
          </p>
        </div>
        <div className="checks">
          <img src={check} alt="icon" className="check" />{" "}
          <p className="checks-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, facilis.
          </p>
        </div>
        <div className="checks">
          <img src={check} alt="icon" className="check" />{" "}
          <p className="checks-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, facilis.
          </p>
        </div>
      </div>
    </div>
  );
}
