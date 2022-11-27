import React from "react";
import "./Contact.css";
import contact from "../../img/undraw_Personal_text_re_vqj3.png";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="left col-md-4 col-10">
            <form action="https://formspree.io/f/xjvzrdeq" method="post">
              <input
                type="text"
                required
                placeholder="Please enter your name"
                name="Name"
              />
              <input type="email" required placeholder="Email" name="Email" />
              <textarea placeholder="Message" name="Message"></textarea>
              <input type="submit" value="Submit" />
              <div className="social">
                <a href="" className="face" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=201557979376&text&type=phone_number&app_absent=0"
                  className="whats"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                </a>
                <a href="" className="insta" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmed-fathi-1a4593247/"
                  rel="noreferrer"
                  className="in"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/ahmedfathiaboelanin/"
                  className="git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </form>
          </div>
          <div className="right col-md-6 d-md-block d-none">
            <img className="img-fluid" src={contact} alt="contact" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
