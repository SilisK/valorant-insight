export default function Weapons({ weapons }) {
  return (
    <div className="weapons min-h-screen pt-14 overflow-x-hidden grid place-items-center text-white">
      {weapons.map((weapon) => (
        <div className="w-full bg-gradient-to-l from-red-400 to-zinc-700 grid place-items-center lg:grid-cols-2 items-start py-10">
          <section className="weapon-splash h-max">
            <img src={weapon.displayIcon} />
          </section>
          <section className="bg-slate-700 w-full h-full">
            <h2 className="text-3xl font-bold">{weapon.displayName}</h2>
          </section>
        </div>
      ))}
    </div>
  );
}
