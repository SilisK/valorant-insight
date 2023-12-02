import { useEffect, useState } from "react";
import loadingIcon from "../assets/loading-svgrepo-com.png";

export default function Maps({ maps }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    scroll(0, 0);
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
    <div className="maps min-h-screen grid items-start">
      <section>
        <h2 className="text-5xl font-bold p-5">All Maps</h2>
        <div className="flex flex-col gap-20 items-center py-10 px-5">
          {maps ? (
            maps.map((map) => (
              <div
                key={map.uuid}
                className={`${banner(
                  screenWidth
                )} w-full grid gap-5 items-end rounded-xl border-4 md:px-5`}
                style={{
                  backgroundImage: `url(${map ? map.splash : ""})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="text-white grid gap-3 bg-slate-700/50 drop-shadow-md p-3 md:rounded-t-xl">
                  <h1 className="text-5xl font-bold">{map.displayName}</h1>
                  {map.narrativeDescription ? (
                    <p>{map.narrativeDescription}</p>
                  ) : null}
                  {map.tacticalDescription || map.coordinates ? <hr /> : null}
                  {map.tacticalDescription ? (
                    <p>
                      <b>Sites:</b> {map.tacticalDescription}{" "}
                    </p>
                  ) : null}
                  {map.coordinates ? (
                    <p>
                      <b>Coordinates:</b> {map.coordinates}
                    </p>
                  ) : null}
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
        </div>
      </section>
    </div>
  );
}
