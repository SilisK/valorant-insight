import { Route, Routes } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// PAGES
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Agents from "./pages/Agents";
import Weapons from "./pages/Weapons";
import Maps from "./pages/Maps";
import Dashboard from "./pages/Dashboard";
import Agent from "./pages/Agent";

function App() {
  const [agents, setAgents] = useState();
  const [weapons, setWeapons] = useState();
  const [maps, setMaps] = useState();

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((response) => response.json())
      .then((data) => {
        setAgents(data.data.filter((f) => f.isPlayableCharacter));
        // console.log(data.data);
      })
      .catch((error) => {});

    fetch("https://valorant-api.com/v1/weapons")
      .then((response) => response.json())
      .then((data) => {
        setWeapons(data.data);
        // console.log(data.data);
      })
      .catch((error) => {});

    fetch("https://valorant-api.com/v1/maps")
      .then((response) => response.json())
      .then((data) => {
        setMaps(data.data);
        // console.log(data.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="app">
      <main className="w-full min-h-screen">
        <Navbar />
        <div className="pt-14">
          <Routes>
            <Route
              path=""
              element={
                <Home
                  demoAgent={
                    agents
                      ? agents[Math.floor(agents.length * Math.random())]
                      : null
                  }
                  demoWeapon={
                    weapons
                      ? weapons[Math.floor(weapons.length * Math.random())]
                      : null
                  }
                  demoMap={
                    maps ? maps[Math.floor(maps.length * Math.random())] : null
                  }
                />
              }
            />
            <Route path="/agents" element={<Agents agents={agents} />} />
            <Route path="/weapons" element={<Weapons weapons={weapons} />} />
            <Route path="/maps" element={<Maps maps={maps} />} />
            <Route path="/agent" element={<Agent agents={agents} />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
