import { Link } from "react-router-dom";
import logo from "../assets/valorant-logo.png";
import { useEffect, useState } from "react";
import hamburgerMenuIcon from "../assets/hamburger-menu-svgrepo-com.png";

function NavbarLinks({ mobile }) {
  return (
    <div
      className={`nav-links flex gap-10 ${
        mobile
          ? "p-5 absolute top-16 left-0 w-full bg-dark-grey-theme flex-col place-items-center shadow-xl rounded-b-xl"
          : ""
      }`}
    >
      <Link to="/agents">Agents</Link>
      <Link to="/weapons">Weapons</Link>
      <Link to="/maps">Maps</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

export default function Navbar() {
  const [mobileWidth, setMobileWidth] = useState(false);
  const [mobileNavbarToggled, setMobileNavbar] = useState(false);

  useEffect(() => {
    // Initialization
    setMobileWidth(window.innerWidth < 1024);

    // Only called when user is resizing their window
    window.addEventListener("resize", (e) => {
      setMobileWidth(e.target.innerWidth < 1024);
    });
  }, []);

  return (
    <nav className="fixed w-screen z-50 bg-dark-grey-theme p-3 text-white flex justify-between items-center lg:px-10">
      {/* Logo */}
      <Link to="" className="logo flex items-center gap-5 w-max">
        <img src={logo} className="w-10" />
        <b>Valorant Insight</b>
      </Link>
      {/* Mobile Nav — Hamburger Menu */}
      {mobileWidth && !mobileNavbarToggled ? (
        <img
          src={hamburgerMenuIcon}
          className="w-10 cursor-pointer"
          onClick={() => setMobileNavbar(true)}
        />
      ) : mobileWidth && mobileNavbarToggled ? (
        <img
          src="https://www.svgrepo.com/show/522506/close.svg"
          className="w-10 p-3 absolute right-2 cursor-pointer bg-white rounded"
          onClick={() => setMobileNavbar(false)}
        />
      ) : null}
      {/* Nav Links */}
      {mobileWidth && mobileNavbarToggled ? (
        <NavbarLinks mobile={true} />
      ) : !mobileWidth ? (
        <NavbarLinks />
      ) : null}
    </nav>
  );
}
