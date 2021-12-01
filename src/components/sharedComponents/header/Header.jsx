import React from "react";
import Cart from "./Cart";
import Navbar from "../navbar/Navbar";
import { Logo, Hamburger } from "../../icons/Icons";

export default function Header() {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <Hamburger />
      <div className="header__nav">
        <Navbar />
      </div>
      <Cart />
    </header>
  );
}
