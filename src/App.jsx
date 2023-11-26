import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// PAGES
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Modal from "./components/Modal";
import Agents from "./pages/Agents";
import Weapons from "./pages/Weapons";
import Maps from "./pages/Maps";

function App() {
  const [profile, setProfile] = useState();

  const [agents, setAgents] = useState();
  const [weapons, setWeapons] = useState();
  const [maps, setMaps] = useState();

  useEffect(() => {
    if (localStorage.getItem("valorant-insight-data")) {
      setProfile(JSON.parse("valorant-insight-data"));
    }

    fetch("https://valorant-api.com/v1/agents")
      .then((response) => response.json())
      .then((json) => {
        setAgents(json.data);
        console.log(json.data[0]);
      })
      .catch((error) => {});

    fetch("https://valorant-api.com/v1/weapons")
      .then((response) => response.json())
      .then((json) => {
        setWeapons(json.data);
      })
      .catch((error) => {});

    fetch("https://valorant-api.com/v1/maps")
      .then((response) => response.json())
      .then((json) => {
        setMaps(json.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="app min-h-screen bg-zinc-700">
      {true ? <Navbar /> : null}
      <main>
        <Routes>
          <Route path="" element={<Home />} />
          {/* Redirect back to welcome page if profile is not found */}
          <Route path="/profile" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/agents" element={<Agents agents={agents} />} />
          <Route path="/weapons" element={<Weapons weapons={weapons} />} />
          <Route path="/maps" element={<Maps maps={maps} />} />
          <Route path="*" element={<NotFound />} />
          {/* Specific Agent Route (by index query)*/}
          {/* Specific Weapon Route (by index query)*/}
          {/* Specific Map Route (by index query)*/}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
