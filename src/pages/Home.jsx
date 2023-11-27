import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home min-h-screen pt-14 overflow-x-hidden grid place-items-center text-white">
      {/* Section Main Shows nice welcome message, if no profile found —can navigate to dashboard to create one */}
      <section
        className="val-bg grid place-items-center min-h-screen w-full"
        style={{
          backgroundImage:
            "url(https://github.com/SilisK/valorant-insight/blob/main/src/assets/home/val-bg.jpg?raw=true)",
        }}
      >
        <div className="text-center drop-shadow-md grid place-items-center gap-5 p-3">
          <h1 className="text-5xl md:text-8xl font-bold">Valorant Insight</h1>
          <h2 className="text-md md:text-xl font-semibold">
            Your resource for agents, weapons, maps and more!
          </h2>
          <div className="grid grid-flow-col gap-10">
            <Link to="/agents">
              <button>Agents</button>
            </Link>
            <Link to="/weapons">
              <button>Weapons</button>
            </Link>
            <Link to="/maps">
              <button>Maps</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
