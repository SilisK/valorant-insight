import { useEffect, useState } from "react";

export default function InfoPage({ info, setPage }) {
  const [imageReady, setImageReady] = useState();

  async function loadImage() {
    await new Promise((resolve) => {
      const image = new Image();
      image.src = info.fullPortrait ? info.fullPortrait : info.displayIcon;
      resolve(image.complete);
    });

    setImageReady(true);
  }

  useEffect(() => {
    // load the image before trying to display it
    loadImage();
  }, []);

  switch (info.type) {
    case "Agent":
      return (
        <div className="info-page px-5 grid gap-10 place-items-center">
          <h1 className="font-bold text-5xl">{info.displayName}</h1>
          {imageReady ? (
            <img
              src={info.fullPortrait ? info.fullPortrait : info.displayIcon}
              className="w-full"
            />
          ) : (
            <div className="grid gap-5 place-items-center">
              <img
                src="https://www.svgrepo.com/show/448500/loading.svg"
                className="gizmo loading"
              />
              <p>Loading {info.type} Image...</p>
            </div>
          )}
          <h1 className="text-5xl font-semibold">Description</h1>
          <p className="sm:w-4/6 sm:bg-slate-200 sm:p-3 sm:rounded-xl">
            {info.description}
          </p>
          <div className="grid gap-10 place-items-center">
            <h1 className="text-5xl font-semibold">Agent Abilities</h1>
            {info.abilities.map((ability, i) => (
              <div
                className="sm:w-4/6 grid gap-2 sm:bg-slate-100 sm:p-3 sm:rounded-3xl"
                key={i}
              >
                <b className="text-xl">{ability.displayName}</b>
                <p>{ability.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case "Weapon":
      return (
        <div className="info-page text-center w-full px-5 grid gap-10 place-items-center">
          <h1 className="font-bold text-5xl">{info.displayName}</h1>
          {imageReady ? (
            <img
              src={info.fullPortrait ? info.fullPortrait : info.displayIcon}
              className="w-full"
            />
          ) : (
            <div className="grid gap-5 place-items-center">
              <img
                src="https://www.svgrepo.com/show/448500/loading.svg"
                className="gizmo loading"
              />
              <p>Loading {info.type} Image...</p>
            </div>
          )}
          <h1 className="text-5xl font-semibold">Weapon Stats</h1>
          <p className="sm:bg-slate-200 sm:p-3 sm:rounded-xl grid gap-10">
            <p>
              <b>Fire Rate: </b>
              {info.weaponStats.fireRate}
            </p>
            <p>
              <b>Magazine Size: </b>
              {info.weaponStats.magazineSize}
            </p>
            <p>
              <b>Run Speed Multiplier: </b>
              {info.weaponStats.runSpeedMultiplier}
            </p>
            <p>
              <b>Equip Time: </b>
              {info.weaponStats.equipTimeSeconds.toFixed(1)}s
            </p>
            <p>
              <b>Reload Time: </b>
              {info.weaponStats.reloadTimeSeconds.toFixed(1)}s
            </p>
            <p>
              <b>First Bullet Accuracy: </b>
              {info.weaponStats.firstBulletAccuracy}
            </p>
            <p>
              <b>Shotgun Pellet Count: </b>
              {info.weaponStats.shotgunPelletCount}
            </p>
            <p>
              <b>Wall Penetration: </b>
              {info.weaponStats.wallPenetration}
            </p>
          </p>
        </div>
      );
    case "Map":
      return (
        <div className="info-page map text-center flex flex-col gap-10 justify-center">
          <h1 className="font-bold text-5xl">{info.displayName}</h1>
          <img src={info.splash} className="w-full" />
        </div>
      );
  }
}
