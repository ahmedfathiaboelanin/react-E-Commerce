import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaWhatsapp,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <ul className="col-lg-3 col-md-6 col-12">
            <li>Quick Links</li>
            <li>
              <Link className="footLink" to="/">Home</Link>
            </li>
            <li>
              <Link className="footLink" to="/products">products</Link>
            </li>
            <li>
              <Link  className="footLink"to="/contact">Contact</Link>
            </li>
            <li>
              <Link className="footLink" to="/login">Login</Link>
            </li>
            <li>
              <Link className="footLink" to="/cart">Cart</Link>
            </li>
          </ul>
          <ul className="col-lg-3 col-md-6 col-12">
            <li>Contact</li>
            <li>
              <Link className="footLink" href="#">
                <FaWhatsapp />
                Whats app
              </Link>
            </li>
            <li>
              <Link href="#"  className="footLink">
                <FaGithub /> Github
              </Link>
            </li>
            <li>
              <Link href="#"  className="footLink">
                <FaFacebook />
                FaceBook
              </Link>
            </li>
            <li>
              <Link href="#"  className="footLink">
                <FaTwitter />
                Twitter
              </Link>
            </li>
            <li>
              <Link href="#" className="footLink">
                <FaInstagram />
                Instagram
              </Link>
            </li>
          </ul>
          <ul className="col-lg-3 col-md-6 col-12">
            <li>Follow us</li>
            <li>
              <Link href="#" className="footLink">
                <FaFacebook />
                FaceBook
              </Link>
            </li>
            <li>
              <Link href="#" className="footLink">
                <FaTwitter />
                Twitter
              </Link>
            </li>
            <li>
              <Link href="#" className="footLink">
                <FaInstagram />
                Instagram
              </Link>
            </li>
            <li>
              <Link href="#" className="footLink">
                <FaPinterest />
                Pinterest
              </Link>
            </li>
          </ul>
          <ul className="col-lg-3 col-md-6 col-12">
            <li>Social Media</li>
            <li>
              <Link href="#" className="footLink">
                <FaFacebook />
                FaceBook
              </Link>
            </li>
            <li>
              <Link href="#" className="footLink">
                <FaTwitter />
                Twitter
              </Link>
            </li>
            <li>
              <Link href="#" className="footLink">
                <FaInstagram />
                Instagram
              </Link>
            </li>
            <li>
              <Link href="#" className="footLink">
                <FaPinterest />
                Pinterest
              </Link>
            </li>
          </ul>
        </div>
        <p className="mt-5 text-center text-light">Made By Ahmed Fathi Abo El-anin Ali</p>
      </div>
    </footer>
  );
}

export default Footer;
