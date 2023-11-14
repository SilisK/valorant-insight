export default function InfoPage({ info, setPage }) {
  switch (info.type) {
    case "Agent":
      return (
        <div className="info-page px-5 grid gap-10 place-items-center">
          <h1 className="font-bold text-5xl">{info.displayName}</h1>
          <img
            src={info.fullPortrait ? info.fullPortrait : info.displayIcon}
            className="w-full"
          />
          <h1 className="text-5xl font-semibold">Description</h1>
          <p className="sm:w-4/6 sm:bg-slate-200 sm:p-3 sm:rounded-xl">
            {info.description}
          </p>
          <div className="grid gap-10 place-items-center">
            <h1 className="text-5xl font-semibold">Agent Abilities</h1>
            {info.abilities.map((ability) => (
              <div className="sm:w-4/6 grid gap-2 sm:bg-slate-100 sm:p-3 sm:rounded-3xl">
                <b className="text-xl">{ability.displayName}</b>
                <p>{ability.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case "Weapon":
      return <div>weapon</div>;
    case "Map":
      return <div>Map</div>;
  }
}
