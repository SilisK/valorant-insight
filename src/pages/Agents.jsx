import { useEffect, useState } from "react";
import loadingIcon from "../assets/loading-svgrepo-com.png";
import valorantIconWhite from "../assets/valorant-logo-play-2-svgrepo-com-white.png";

export default function Agents({ agents }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.scroll({top:0})
    window.addEventListener("resize", (e) => {
      setScreenWidth(e.target.innerWidth);
    });
  }, []);

  return (
    <div className="agents min-h-screen pt-14 overflow-x-hidden grid place-items-center text-white">
      {agents ? (
        agents
          .filter((f) => f.isPlayableCharacter)
          .map((agent) => (
            <div
              className="w-full bg-gradient-to-l from-red-400 to-zinc-700 grid place-items-center lg:grid-cols-2 items-start"
              key={agent.uuid}
            >
              <div
                className="agent-banner p-5 m-10 grid place-items-center"
                key={agent.displayName}
                style={{
                  background: `url(${agent.background})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <img src={agent.fullPortrait} className="agent-portrait" />
              </div>
              {/*  */}
              <div
                className="w-full h-full p-5 grid gap-5 justify-between"
                style={
                  screenWidth > 1024
                    ? {
                        background: `linear-gradient(45deg, #${agent.backgroundGradientColors[1]}, #${agent.backgroundGradientColors[0]}), linear-gradient(0deg, #${agent.backgroundGradientColors[2]}, #${agent.backgroundGradientColors[3]})`,
                      }
                    : null
                }
              >
                <h1 className="text-5xl font-bold grid h-max gap-5">
                  {agent.displayName}
                  <p className="text-xl font-semibold drop-shadow-md">
                    {agent.description}
                  </p>
                  {/*  */}
                  <div className="">
                    <div className="bg-gradient-to-r from-zinc-800/30 to-zinc-300/30 text-sm p-3 rounded h-max">
                      <h2 className="text-2xl font-bold">
                        {agent.role.displayName}
                      </h2>
                      <p>{agent.role.description}</p>
                    </div>
                  </div>
                  {/*  */}
                  <button className="w-max h-max text-xl">View Agent</button>
                </h1>
                {/*  */}
                <div className="w-full flex flex-wrap justify-between gap-5 p-2 text-xs sm:text-md">
                  {agent.abilities.map((ability) => (
                    <div
                      key={ability.displayName}
                      className="text-center flex flex-col items-center gap-2"
                    >
                      <img
                        src={
                          ability.displayIcon
                            ? ability.displayIcon
                            : valorantIconWhite
                        }
                        className="gizmo-lg"
                      />
                      <p>{ability.displayName}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
      ) : (
        <img src={loadingIcon} className="loading rounded-full" />
      )}
    </div>
  );
}
