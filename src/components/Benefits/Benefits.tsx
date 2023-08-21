import "./Benefits.css";
import png1 from "./desicion.png";
import png2 from "./increase.png";
import png3 from "./wheel.png";

export function Benefits() {
  return (
    <div className="benefits-container">
      <h1 className="benefits-head">Benefits</h1>
      <div className="benefits-items">
        <div className="benefits-items-cont">
          <img className="icon" src={png3} alt="wheel" />
          <p className="head">Safer Roadways</p>
          <p className="text-main">
            Lorem ipsum dolor sit amet consectetur. Vitae faucibus integer
            ullamcorper etiam.
          </p>
        </div>
        <div className="benefits-items-cont">
          <img className="icon icon1" src={png2} alt="increase" />
          <p className="head">Improved Hazard Awareness</p>
          <p className="text-main">
            Lorem ipsum dolor sit amet consectetur. Vitae faucibus integer
            ullamcorper etiam.
          </p>
        </div>
        <div className="benefits-items-cont">
          <img className="icon icon2" src={png1} alt="desicion" />
          <p className="head">Enhanced Decision-Making</p>
          <p className="text-main">
            Lorem ipsum dolor sit amet consectetur. Vitae faucibus integer
            ullamcorper etiam.
          </p>
        </div>
      </div>
    </div>
  );
}
