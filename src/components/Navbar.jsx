import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState();

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setMobileNav(e.target.innerWidth < 960);
    });
  }, []);

  return (
    <nav className="bg-slate-400 w-full flex justify-between p-3">
      <div className="logo sm:px-5 flex items-center">
        <Link to={""} className="flex items-center gap-2">
          <img
            src="https://www.svgrepo.com/show/424907/valorant-logo-play.svg"
            className="gizmo"
          />
          <p>Valorant Insight</p>
        </Link>
      </div>
      {/*  */}
      {mobileNav ? (
        <img
          src="https://www.svgrepo.com/show/313139/hamburger-menu.svg"
          className="gizmo-md cursor-pointer bg-white rounded p-2"
          onClick={() => {
            // Toggle Mobile Nav Dropdown
          }}
        />
      ) : null}
      {mobileNav ? null : (
        <div className="px-5 flex gap-2 items-center w-1/2">
          <img
            src="https://www.svgrepo.com/show/532552/search-alt-2.svg"
            className="gizmo"
          />
          <input type="search" placeholder="Search" className="w-full" />
        </div>
      )}
      {mobileNav ? null : (
        <div className="px-5 flex gap-5 items-center">
          <Link to={"/profile"}>Dashboard</Link>
          <Link to={"/about"}>About</Link>
        </div>
      )}
    </nav>
  );
}
