export default function Welcome({ agents }) {
  return (
    <div className="welcome bg h-screen py-10 overflow-x-hidden overflow-y-scroll grid place-items-center bg-gradient-to-b from-red-400 to-zinc-700 text-white">
      {agents ? (
        agents
          .filter((f) => f.isPlayableCharacter)
          .map((agent) => (
            <div
              className="w-full agent-banner p-5 m-10 grid place-items-center"
              key={agent.displayName}
              style={{
                background: `url(${agent.background})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <img src={agent.fullPortrait} />
            </div>
          ))
      ) : (
        <img src="https://www.svgrepo.com/show/423216/loading.svg" className="loading gizmo-lg bg-white rounded-full"/>
      )}
    </div>
  );
}
