import React from "react";
import Navbar from "./Navbar";
import { Logo } from "../icons/Icons";
import { Facebook } from "../icons/Icons";
import { Instagram } from "../icons/Icons";
import { Twitter } from "../icons/Icons";

// import StoreLogo from "./StoreLogo";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="footer__logo">
          <Logo />
        </div>
        {/* <StoreLogo /> */}
        <Navbar className="footer_navbar" />
        <div className="footer__description">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </div>
        <div className="footer__icons">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
        <div className="footer__copyright">
          Copyright 2021. All Rights Reserved
        </div>
      </footer>
    </React.Fragment>
  );
}
