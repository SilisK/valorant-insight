import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import valorantIconWhite from "../assets/valorant-logo.png"

export default function Agent({ agents }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const uuid = searchParams.get("uuid");
  const [agent, setAgent] = useState();
  const navigate = useNavigate();

  async function findAgent() {
    let m_agent;
    m_agent = agents.find((agent) => agent.uuid === uuid);
    if (!m_agent) navigate("/404");
    else setAgent(m_agent);
  }

  useEffect(() => {
    scroll(0, 0);
    if (agents) findAgent();
  }, [agents]);

  return (
    <div className="agent min-h-screen grid gap-10 items-start justify-center py-16">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold drop-shadow-md">
        Description
      </h1>
      <div className="medium-banner grid bg-dark-grey-theme text-white md:rounded-xl md:border-4">
        {agent ? (
          <div className="bg-gradient-to-l grid gap-5 from-red-500 p-3 rounded">
            <div className="flex flex-col gap-5 sm:flex-row items-center justify-between">
              <img
                src={agent.displayIcon}
                className="icon rounded-full border-4 bg-black"
              />
              <div className="w-11/12 h-full flex flex-wrap gap-2 items-center justify-between px-10 text-xs sm:text-md">
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
            </div>
            <h1 className="font-bold text-4xl">{agent.displayName}</h1>
            <b>{agent.description}</b>
          </div>
        ) : null}
      </div>
      {/*  */}
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold drop-shadow-md">
        Full Portrait
      </h1>
      <div className="medium-banner py-5 bg-dark-grey-theme text-white md:rounded-xl md:border-4">
        {agent ? (
          <div
            style={{
              background: `url(${agent.background})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <img src={agent.bustPortrait} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
