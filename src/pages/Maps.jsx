export default function Maps({ maps }) {
  return (
    <div className="maps min-h-screen pt-14 overflow-x-hidden grid place-items-center text-white">
      {maps.map((map) => (
                <div className="w-full bg-gradient-to-l from-red-400 to-zinc-700 grid place-items-center lg:grid-cols-2 items-start py-10">
                <section className="h-max">
                  <img src={map.splash} />
                </section>
                <section className="bg-slate-700 w-full h-full">
                  <h2 className="text-3xl font-bold">{map.displayName}</h2>
                </section>
              </div>
      ))}
    </div>
  );
}
