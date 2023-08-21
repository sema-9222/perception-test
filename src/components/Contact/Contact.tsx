import "./Contact.css";
import location from "./location.png";
import phone from "./phone.png";
import mail from "./mail.png";

export function Contact() {
  return (
    <div className="contact" id="contact">
      <p className="contact-head">Contact</p>
      <div className="contact-cont">
        <div className="inputs">
          <p style={{ fontSize: "25px", textAlign: "start", margin: "45px" }}>
            E-mail
          </p>
          <div className="name">
            <input
              className="inputplace i-name"
              type="text"
              placeholder="Name"
            />
            <input
              className="inputplace i-name"
              type="email"
              placeholder="E-mail"
            />
          </div>
          <div className="message">
            <input className="inputplace" type="text" placeholder="Subject" />
            <textarea
              className="inputplace message"
              name="Message"
              placeholder="Message"
              id=""
              cols={30}
              rows={10}
            ></textarea>
            <button className="take-test send">Send Message</button>
          </div>
        </div>
        <div className="infos">
          <p style={{ fontSize: "25px", textAlign: "start", margin: "45px" }}>
            Contact Information
          </p>
          <p style={{ textAlign: "justify", margin: "0px 45px" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
            molestias?
          </p>
          <div className="info-info">
            <div className="icons-contact">
              <img src={location} alt="location" style={{ width: "12%" }} />{" "}
              <p className="info-cont">
                Adress: 8615 Conroy Mission, New Queenie Rhode Island{" "}
              </p>
            </div>
            <div className="icons-contact">
              <img src={phone} alt="location" style={{ width: "12%" }} />
              <p className="info-cont"> Phone: +15298011882</p>
            </div>
            <div className="icons-contact">
              <img src={mail} alt="location" style={{ width: "12%" }} />
              <p className="info-cont">Mail: info@site.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
