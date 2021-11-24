import React from "react";
import Navbar from "../navbar/Navbar";
import { Logo, Facebook, Instagram, Twitter } from "../../icons/Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Logo id="svg-img" />
      </div>
      <Navbar className="footer__navbar" />
      <p className="footer__description">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="footer__icons">
        <a href="/">
          <Facebook />
        </a>
        <a href="/">
          <Twitter />
        </a>
        <a href="/">
          <Instagram />
        </a>
      </div>
      <small className="footer__copyright">
        Copyright 2021. All Rights Reserved
      </small>
    </footer>
  );
}
