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
    <nav className="z-10 absolute bg-gradient-to-l from-red-500 to-zinc-800 text-white w-full flex justify-between p-3">
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
            src="https://www.svgrepo.com/show/508177/search-square.svg"
            className="gizmo bg-white rounded-xl"
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
