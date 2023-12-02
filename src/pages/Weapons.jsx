import { useEffect } from "react";
import loadingIcon from "../assets/loading-svgrepo-com.png";

export default function Weapons({ weapons }) {
  useEffect(() => {
    scroll(0, 0);
  }, []);

  return (
    <div className="weapons min-h-screen grid items-start">
      <section>
        <h2 className="text-5xl font-bold p-5">All Weapons</h2>
        <div className="grid gap-20 justify-center py-20 px-5">
          {weapons ? (
            weapons.map((weapon) => (
              <div key={weapon.uuid} className="medium-banner w-full grid gap-5 place-items-center bg-gradient-to-b from-zinc-400 rounded-xl border-4 p-5">
                <img src={weapon.displayIcon} />
                <div className="text-center">
                  <h1 className="text-3xl font-bold my-5">{weapon.displayName}</h1>
                  {weapon.weaponStats ? (
                    <div className="grid gap-2 place-items-center">
                      <p>
                        <b>Fire Rate:</b> {weapon.weaponStats.fireRate}
                      </p>
                      <p>
                        <b>Reload Speed:</b> {weapon.weaponStats.reloadTimeSeconds.toFixed(2)}s
                      </p>
                      <button>View Full Description</button>
                      </div>
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
