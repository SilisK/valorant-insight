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
    <div className="welcome min-h-screen pt-14 bg grid place-items-center text-white">
      {agents ? (
        agents
          .filter((f) => f.isPlayableCharacter)
          .map((agent) => (
            <div className="w-full bg-gradient-to-l from-red-400 to-zinc-700 border-b grid place-items-center lg:grid-cols-2 items-start">
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
                  <button className="w-max h-max text-xl">View more</button>
                </h1>
              </div>
            </div>
          ))
      ) : (
        <img src={loadingIcon} className="loading rounded-full" />
      )}
    </div>
  );
}
