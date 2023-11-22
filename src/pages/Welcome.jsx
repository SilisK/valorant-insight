export default function Welcome({ agents }) {
  return (
    <div className="welcome min-h-screen grid place-items-center">
      <div className="grid place-items-center gap-10">
        <h1 className="text-5xl font-bold">Choose your agent</h1>
        <div className="grid grid-flow-col w-11/12 place-items-center">
          <img
            src="https://www.svgrepo.com/show/423273/back.svg"
            className="gizmo-lg cursor-pointer"
            onClick={() => {
              const layout = document.querySelector("#agent-layout");
              let rect = layout.getBoundingClientRect();
              layout.scrollTo({ left: rect.left, behavior: "smooth" });
            }}
          />
          <div
            id="agent-layout"
            className="p-3 grid grid-flow-col gap-10 w-11/12 bg-white overflow-hidden rounded-xl"
          >
            {agents
              ? agents
                  .filter((f_agent) => f_agent.isPlayableCharacter)
                  .map((agent) => (
                    <div className="agent-icon grid place-items-center cursor-pointer">
                      <div className="agent-icon-image shadow-md hover:shadow-red-700">
                        <img src={agent.displayIcon} className="h-full" />
                      </div>
                      <p>{agent.displayName}</p>
                    </div>
                  ))
              : null}
          </div>
          <img
            src="https://www.svgrepo.com/show/423270/forward.svg"
            className="gizmo-lg cursor-pointer"
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
