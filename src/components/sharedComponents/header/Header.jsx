import React from "react";
import Cart from "./Cart";
import Navbar from "../Navbar";
import { Logo } from "../../icons/Icons";

export default function Header() {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <Navbar className="header__navbar" />
      <Cart />
    </header>
  );
}
