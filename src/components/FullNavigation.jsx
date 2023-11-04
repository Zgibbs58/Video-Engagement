import React from "react";
import { Link } from "react-router-dom";
import FullNavItem from "./FullNavItem";

const navLinks = [
  { name: "Home", path: "/", id: 4 },
  { name: "About", path: "/about", id: 5 },
  { name: "Portfolio", path: "/portfolio", id: 6 },
  { name: "Contact", path: "/contact", id: 7 },
];

export default function FullNavigation() {
  return (
    <nav className="flex justify-around my-10 mx-64">
      {navLinks.map((i) => (
        <FullNavItem name={i.name} path={i.path} key={i.id} />
      ))}
    </nav>
  );
}
