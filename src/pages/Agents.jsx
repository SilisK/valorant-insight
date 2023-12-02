import { useEffect, useState } from "react";
import loadingIcon from "../assets/loading-svgrepo-com.png";
import valorantIconWhite from "../assets/valorant-logo.png";

export default function Agents({ agents }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.scroll(0, 0);
    window.addEventListener("resize", (e) => {
      setScreenWidth(e.target.innerWidth);
    });
  }, []);

  return (
    <div className="agents bg-zinc-400 text-white min-h-screen grid items-start">
      <section className="">
        <h2 className="text-5xl font-bold p-5">All Agents</h2>
        {agents ? (
          agents.map((agent, i) => (
            <div
              className="w-full grid place-items-center lg:grid-cols-2 items-start"
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
                className={`w-full h-full p-5 grid gap-5 justify-between ${
                  i === 0 ? "rounded-tl-xl" : ""
                }`}
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
                        className="w-20"
                      />
                      <p>{ability.displayName}</p>
                    </div>
                  ))}
                </div>
                <div className="grid place-items-center lg:block">
                  {" "}
                  <button className="w-max h-max text-xl">View Agent</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="min-h-screen grid place-items-center">
            <img
              src={loadingIcon}
              className="loading w-20 bg-slate-100/90 rounded-full"
            />
          </div>
        )}
      </section>
    </div>
  );
}
