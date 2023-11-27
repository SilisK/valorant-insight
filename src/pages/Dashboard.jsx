import { useEffect, useState } from "react";
import loadingIcon from "../assets/loading-svgrepo-com.png";

export default function Dashboard({ agents, maps }) {
  const [profile, setProfile] = useState();

  useEffect(() => {
    setProfile(JSON.parse(localStorage.getItem("valorant-insight-profile")));
  }, []);

  return (
    <div className="dashboard text-white min-h-screen py-20 px-3 md:px-10 grid items-start">
      <div className="flex flex-col w-full gap-10">
        <h1 className="text-5xl font-bold">Dashboard</h1>
        {profile ? (
          <div>profile content</div>
        ) : (
          <div className="grid gap-10">
            <div className="grid">
              <h3 className="text-xl font-semibold">Select a main agent</h3>
              {/*  */}
              <div className="bg-white/30 p-3 gap-10 grid grid-flow-col overflow-x-scroll">
                {agents
                  ? agents.map((agent) => (
                      <div
                        className="agent-icon text-center cursor-pointer gap-3"
                        key={agent.uuid}
                      >
                        <div className="agent-icon-image">
                          <img src={agent.displayIcon} />
                        </div>
                        <b>{agent.displayName}</b>
                      </div>
                    ))
                  : <img src={loadingIcon} className="loading rounded-full" />}
              </div>
            </div>
            {/*  */}
            <div>
              <h3 className="text-xl font-semibold">Favorite Map</h3>
            </div>
          </div>
        )}
      </div>
      {/*  */}
      <section className="flex flex-col w-full items-start gap-10">
        <h2 className="text-4xl font-semibold">Categories</h2>
      </section>
    </div>
  );
}
