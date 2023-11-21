export default function Welcome({ agents }) {
  return (
    <div className="welcome min-h-screen bg-slate-200 grid place-items-center">
      <form className="banner w-full bg-slate-400 md:rounded-xl p-8">
        <h1 className="text-center p-3 text-5xl font-bold flex gap-5 items-center">
          <img src="https://www.svgrepo.com/show/424912/valorant-logo-play-2.svg" className="gizmo"/>
          Initial Setup
        </h1>
        <div className="grid">
          <div className="grid gap-2 p-3">
            <label className="text-xl font-semibold">Choose a username</label>
            <input type="text" placeholder="Must be 3 or more characters..." />
          </div>
          {/*  */}
          <div className="grid gap-2 p-3">
            <label className="text-xl font-semibold">Pick a main</label>
            <div className="bg-white p-3 grid grid-flow-col gap-10 overflow-x-scroll rounded-xl">
              {agents
                ? agents.map((agent) => (
                    <div className="agent-icon grid place-items-center cursor-pointer">
                      <div className="agent-icon-image shadow-md">
                        <img src={agent.displayIcon} className="h-full" />
                      </div>
                      <p>{agent.displayName}</p>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
        {/*  */}
        <div className="p-3">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
