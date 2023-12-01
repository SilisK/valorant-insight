import { useEffect, useState } from "react";
import loadingIcon from "../assets/loading-svgrepo-com.png";

export default function Home({ demoAgent, demoWeapon, demoMap, demoMore }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setScreenWidth(e.target.innerWidth);
    });
  }, []);

  function banner(width) {
    if (width >= 1360) {
      return "large-banner";
    } else if (width >= 640) {
      return "medium-banner";
    }

    return "small-banner";
  }

  return (
    <div className="home min-h-screen grid items-start">
      <section className="w-full border-b-4 grid gap-10 place-items-center py-10 px-5 lg:px-10">
        <div
          className={`${banner(
            screenWidth
          )} grid place-items-center border-gray border-4 rounded-xl bg-black`}
          style={{
            backgroundImage:
              "url(https://github.com/SilisK/valorant-insight/blob/main/src/assets/home/val-bg.jpg?raw=true)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full text-white grid justify-center">
            <h1 className="text-2xl md:text-6xl lg:text-8xl font-bold drop-shadow-md">
              Valorant Insight
            </h1>
            <h2 className="md:text-4xl lg:text-2xl font-semibold drop-shadow-md">
              your resource for Valorant information.
            </h2>
          </div>
        </div>
        {/*  */}
        <div className="w-11/12 grid gap-10">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold drop-shadow-md">
            For the players, by the players.
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold drop-shadow-md">
            All data sourced from a community built API
            <br />—
            <a
              href="https://valorant-api.com"
              className="underline"
              target="_blank"
            >
              Valorant-API
            </a>
            .
          </h1>
        </div>
      </section>
      {/*  */}
      <section className="w-full grid gap-10 place-items-center py-10 px-5 lg:px-10">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold drop-shadow-md">
          All Agents
        </h1>
        <div className="medium-banner rounded-xl grid place-items-center">
          {demoAgent ? (
            <div
              className="w-full grid gap-5 place-items-center"
              style={{
                background: `linear-gradient(45deg, #${demoAgent.backgroundGradientColors[1]}, #${demoAgent.backgroundGradientColors[0]}), linear-gradient(0deg, #${demoAgent.backgroundGradientColors[2]}, #${demoAgent.backgroundGradientColors[3]})`,
              }}
            >
              <img src={demoAgent.bustPortrait} />
              <div className="w-11/12 text-white grid gap-5 items-center px-3 py-5 bg-gradient-to-r from-zinc-700 to-red-500 rounded-t-xl">
                <h2 className="text-3xl font-bold">{demoAgent.displayName}</h2>
                <p>{demoAgent.description}</p>
                <div className="flex justify-center">
                  <button className="w-max">View Agent</button>
                </div>
              </div>
            </div>
          ) : (
            <img
              src={loadingIcon}
              className="loading w-20 bg-slate-100/90 rounded-full"
            />
          )}
        </div>
        {/*  */}
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold drop-shadow-md">
          All Weapons
        </h1>
        <div className="medium-banner grid rounded-xl">
          {demoWeapon ? (
            <div className="w-full p-5 grid place-items-center bg-gradient-to-b from-zinc-400">
              <div className="grid gap-5">
                <img src={demoWeapon.displayIcon} />
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">
                    {demoWeapon.displayName}
                  </h2>
                  <button className="w-max">View Weapon Stats</button>
                </div>
              </div>
            </div>
          ) : (
            <img
              src={loadingIcon}
              className="loading w-20 bg-slate-100/90 rounded-full"
            />
          )}
        </div>
        {/*  */}
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold drop-shadow-md">
          All Maps
        </h1>
        <div
          className="medium-banner rounded-xl grid justify-end"
          style={{
            backgroundImage: `url(${demoMap.splash})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col justify-between p-10 text-white bg-zinc-700/50">
            <h2 className="text-3xl font-bold">{demoMap.displayName}</h2>
            <button>View Map</button>
          </div>
        </div>
        {/*  */}
        {/* <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold drop-shadow-md">
          And More...
        </h1>
        <div className="medium-banner rounded-xl"></div> */}
      </section>
    </div>
  );
}
