import { useEffect } from "react";
import loadingIcon from "../assets/loading-svgrepo-com.png";

export default function Weapons({ weapons }) {
  useEffect(() => {
    window.scroll({ top: 0 });
  }, []);

  return (
    <div className="weapons min-h-screen pt-14 overflow-x-hidden grid place-items-center text-white">
      {weapons ? (
        weapons.map((weapon) => (
          <div
            className="weapon py-5 md:py-0 w-full bg-gradient-to-l from-red-400 to-zinc-700 grid place-items-center lg:grid-cols-2"
            key={weapon.uuid}
          >
            <section className="weapon-splash w-full">
              <img src={weapon.displayIcon} />
            </section>
            <section className="lg:bg-gradient-to-b from-zinc-700/30 to-slate-100/0 w-full h-full p-4">
              <h2 className="text-3xl font-bold">{weapon.displayName}</h2>
              {weapon.weaponStats ? (
                <div className="my-10 grid">
                  <h2 className="text-xl font-bold">Basic Stats</h2>
                  <p>
                    <b>Fire rate:</b> {weapon.weaponStats.fireRate}
                  </p>
                  <p>
                    <b>Ready after equipping:</b>{" "}
                    {weapon.weaponStats.equipTimeSeconds}s
                  </p>
                  <p>
                    <b>Reload Duration:</b>{" "}
                    {weapon.weaponStats.reloadTimeSeconds}s
                  </p>
                </div>
              ) : null}
              {weapon.shopData ? (
                <div className="my-10 grid">
                  <h2 className="text-xl font-bold">Shop Info</h2>
                  <p>
                    <b>Cost:</b> {weapon.shopData.cost}
                  </p>
                  <p>
                    <b>Category:</b> {weapon.shopData.category}
                  </p>
                </div>
              ) : null}
              <div className="my-10 grid place-items-center sm:block">
                <button className="my-10">View Weapon</button>
              </div>
            </section>
          </div>
        ))
      ) : (
        <img src={loadingIcon} className="loading rounded-full" />
      )}
    </div>
  );
}
