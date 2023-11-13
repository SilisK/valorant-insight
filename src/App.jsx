import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import AgentIcon from "./components/AgentIcon";
import Navbar from "./components/Navbar";
import WeaponIcon from "./components/WeaponIcon";
import MapIcon from "./components/MapIcon";

function App() {
  const [agents, setAgents] = useState();
  const [weapons, setWeapons] = useState();
  const [maps, setMaps] = useState();

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((response) => response.json())
      .then((json) => {
        setAgents(json.data);
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
    <div className="app pt-10 min-h-screen grid">
      <Navbar />
      <main
        className="grid gap-20 pb-20 place-items-center w-full min-h-screen
       items-start"
      >
        <div className="px-2 sm:px-5 grid gap-5 py-5 w-full">
          <h1 className="text-6xl sm:text-8xl font-bold">Agents</h1>
          <div className="grid gap-10 grid-flow-col place-items-center overflow-x-scroll sm:bg-white sm:shadow-md sm:ounded-xl px-1 py-3 sm:p-8">
            {agents ? (
              agents.map((agent, i) => <AgentIcon agent={agent} key={i} />)
            ) : (
              <img
                src="https://www.svgrepo.com/show/448500/loading.svg"
                className="gizmo"
              />
            )}
          </div>
        </div>
        {/*  */}
        <div className="px-2 sm:px-5 grid gap-5 py-5 w-full">
          <h1 className="text-6xl sm:text-8xl font-bold">Weapons</h1>
          <div className="grid gap-10 grid-flow-col place-items-center overflow-x-scroll sm:bg-white sm:shadow-md sm:rounded-xl px-1 py-3 sm:p-8">
            {weapons ? (
              weapons.map((weapon, i) => <WeaponIcon weapon={weapon} key={i} />)
            ) : (
              <img
                src="https://www.svgrepo.com/show/448500/loading.svg"
                className="gizmo"
              />
            )}
          </div>
        </div>
        {/*  */}
        <div className="px-2 sm:px-5 grid gap-5 py-5 w-full">
          <h1 className="text-6xl sm:text-8xl font-bold">Maps</h1>
          <div className="grid gap-10 sm:grid-flow-col place-items-center sm:overflow-x-scroll sm:bg-white sm:shadow-md sm:rounded-xl px-1 py-3 sm:p-8">
            {maps ? (
              maps.map((map, i) => <MapIcon map={map} key={i} />)
            ) : (
              <img
                src="https://www.svgrepo.com/show/448500/loading.svg"
                className="gizmo"
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
