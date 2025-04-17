import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md py-4 px-6 text-black flex justify-between gap-8 items-center">
        <div>
            MindTune
        </div>
        <div className="flex justify-between gap-5 items-center">
      {navLinks.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="hover:underline hover:text-blue-600 transition duration-200"
        >
          {item.name}
        </Link>
      ))}
      <div className="bg-black text-white p-2 px-4 rounded-full">
        Get Started
      </div>
        </div>
    </nav>
  );
}

export default Header;
