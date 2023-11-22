import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// PAGES
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

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
      })
      .catch((error) => {});

    console.log(agents);

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
    <div className="app">
      {true ? <Navbar /> : null}
      <main>
        <Routes>
          <Route
            path=""
            element={profile ? <Home /> : <Welcome agents={agents} />}
          />
          {/* Redirect back to welcome page if profile is not found */}
          <Route path="/profile" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
