import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import AgentIcon from "./components/AgentIcon";

function App() {
  const [agents, setAgents] = useState();

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((response) => response.json())
      .then((json) => setAgents(json.data))
      .catch((error) => {});
  }, []);

  return (
    <div className="app pt-10 min-h-screen grid">
      <main
        className="grid place-items-center w-full min-h-screen
       items-start"
      >
        <div className="px-5 grid gap-5">
          <h1 className="text-6xl sm:text-8xl font-bold">Agents</h1>
          <div className="grid gap-10 grid-flow-col place-items-center overflow-hidden bg-white shadow-md rounded-xl p-8">
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
