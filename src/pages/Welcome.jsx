import { useEffect, useState } from "react";
import loadingIcon from "../assets/loading-svgrepo-com.png";

export default function Welcome({ agents }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setScreenWidth(e.target.innerWidth);
    });
  }, []);

  return (
    <div className="welcome pt-14 bg h-screen overflow-x-hidden overflow-y-scroll grid place-items-center bg-gradient-to-b from-red-400 to-zinc-700 text-white">
      {agents ? (
        agents
          .filter((f) => f.isPlayableCharacter)
          .map((agent) => (
            <div className="w-full bg-slate-500/20 border-y grid place-items-center lg:grid-cols-2 items-start">
              <div
                className="w-full agent-banner p-5 m-10 grid place-items-center"
                key={agent.displayName}
                style={{
                  background: `url(${agent.background})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <img src={agent.fullPortrait} />
              </div>
              {/*  */}
              <div
                className="w-full h-full p-10 grid gap-5 justify-between"
                style={
                  screenWidth > 1024
                    ? {
                        background: `linear-gradient(45deg, transparent, #${agent.backgroundGradientColors[1]}), linear-gradient(-45deg, transparent, #${agent.backgroundGradientColors[0]})`,
                      }
                    : null
                }
              >
                <h1 className="text-5xl font-bold drop-shadow-md grid h-max gap-5">
                  {agent.displayName}
                  <p className="text-xl font-semibold drop-shadow-md">{agent.description}</p>
                </h1>
                <div className="bg-zinc-700/30 p-3 rounded-xl h-max">
                  <h2 className="text-2xl font-bold">Agent Type</h2>
                  <h3 className="text-xl font-semibold">{agent.role.displayName}</h3>
                  <p>
                    — {agent.role.description}
                  </p>
                </div>
                <button className="w-max h-max">View more</button>
              </div>
            </div>
          ))
      ) : (
        <img src={loadingIcon} className="loading rounded-full" />
      )}
    </div>
  );
}
