import { useEffect, useState } from "react";

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

  return <div className="app min-h-screen grid place-items-center">
    <h1 className="text-5xl font-semibold">Hello, Vercel.</h1>
  </div>;
}

export default App;
