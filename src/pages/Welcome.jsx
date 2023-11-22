export default function Welcome({ agents }) {
  return (
    <div className="welcome bg min-h-screen grid place-items-center bg-gradient-to-b from-red-400 to-zinc-700 text-white">
      <div className="grid place-items-center gap-10 z-10">
        <h1 className="text-5xl font-bold text-center">Choose your agent</h1>
        <div className="grid grid-flow-col w-11/12 place-items-center">
          <img
            src="https://www.svgrepo.com/show/522573/left-2.svg"
            className="gizmo-md sm:gizmo-lg cursor-pointer bg-white rounded-full selectDisable"
            onClick={() => {
              const layout = document.querySelector("#agent-layout");
              let rect = layout.getBoundingClientRect();
              layout.scrollTo({ left: rect.left, behavior: "smooth" });
            }}
          />
          <div
            id="agent-layout"
            className="p-3 grid grid-flow-col gap-10 w-11/12 overflow-x-hidden rounded-xl"
          >
            {agents
              ? agents
                  .filter((f_agent) => f_agent.isPlayableCharacter)
                  .map((agent, i) => (
                    <div
                      className="agent-icon grid place-items-center cursor-pointer"
                      key={i}
                    >
                      <div className="agent-icon-image shadow-md hover:shadow-white">
                        <img src={agent.displayIcon} className="h-full" />
                      </div>
                      <p>{agent.displayName}</p>
                    </div>
                  ))
              : null}
          </div>
          <img
            src="https://www.svgrepo.com/show/522644/right-2.svg"
            className="gizmo-md sm:gizmo-lg cursor-pointer bg-white rounded-full selectDisable"
            onClick={() => {
              const layout = document.querySelector("#agent-layout");
              let rect = layout.getBoundingClientRect();
              layout.scrollTo({
                left: rect.right,
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
