import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState();
  const [mobileNavExtended, setMobileNavExtended] = useState();

  useEffect(() => {
    // Initialization
    let toggleMobile = window.innerWidth < 960;
    setMobileNav(toggleMobile);
    window.addEventListener("resize", (e) => {
      setMobileNav(e.target.innerWidth < 960);
      setMobileNavExtended();
    });
  }, []);

  function scrollToTop(element) {
    element.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <nav className="z-10 fixed bg-gradient-to-l from-red-500 to-zinc-800 text-white w-full flex justify-between p-3">
      <div
        className="logo sm:px-5 flex items-center"
        onClick={() => {
          scrollToTop(document.querySelector(".welcome"));
          scrollToTop(window);
        }}
      >
        <Link to={""} className="flex items-center gap-2">
          <img
            src="https://www.svgrepo.com/show/424907/valorant-logo-play.svg"
            className="gizmo selectDisable"
          />
          <p>Valorant Insight</p>
        </Link>
      </div>
      {/*  */}
      {mobileNav ? (
        <div
          className="gizmo-md cursor-pointer bg-white rounded p-2"
          onClick={() => {
            setMobileNavExtended(true);
          }}
        >
          <img
            src="https://www.svgrepo.com/show/313139/hamburger-menu.svg"
            className="pointer-events-none"
          />
        </div>
      ) : null}
      {mobileNav ? null : (
        <div className="px-5 flex gap-2 items-center w-1/2">
          <img
            src="https://www.svgrepo.com/show/508177/search-square.svg"
            className="gizmo bg-white rounded-xl pointer-events-none"
          />
          <input type="search" placeholder="Search" className="w-full" />
        </div>
      )}
      {mobileNav ? null : (
        <div className="px-5 flex gap-5 items-center">
          <Link to={"/profile"} onClick={() => scrollToTop(window)}>
            Dashboard
          </Link>
          <Link to={"/about"} onClick={() => scrollToTop(window)}>
            About
          </Link>
        </div>
      )}
      {mobileNavExtended ? (
        <div className="extended-nav absolute w-full bg-gradient-to-b from-red-500 to-red-900 border-black border-y top-0 left-0 px-5 py-5 grid gap-5 place-items-center">
          <div className="px-2 flex gap-2 items-center w-full">
            <img
              src="https://www.svgrepo.com/show/508177/search-square.svg"
              className="gizmo bg-white rounded-xl pointer-events-none"
            />
            <input type="search" placeholder="Search" className="w-full" />
          </div>
          <Link to={"/profile"} onClick={() => scrollToTop(window)}>
            Dashboard
          </Link>
          <Link to={"/about"} onClick={() => scrollToTop(window)}>
            About
          </Link>
          <a className="cursor-pointer" onClick={() => setMobileNavExtended()}>
            Close
          </a>
        </div>
      ) : null}
    </nav>
  );
}
