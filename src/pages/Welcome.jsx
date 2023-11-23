import loadingIcon from "../assets/loading-svgrepo-com.png";

export default function Welcome({ agents }) {
  return (
    <div className="welcome pt-14 bg h-screen overflow-x-hidden overflow-y-scroll grid place-items-center bg-gradient-to-b from-red-400 to-zinc-700 text-white">
      {agents ? (
        agents
          .filter((f) => f.isPlayableCharacter)
          .map((agent) => (
            <div className="w-full bg-slate-500/20 border-y grid place-items-center lg:grid-cols-2 items-start">
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
              {/*  */}
              <div className="bg-white/30 w-full h-full p-10 grid gap-5 justify-between">
                <h1 className="text-5xl font-bold">{agent.displayName}</h1>
                <p>{"..."}</p>
                <button className="w-max h-max">View more</button>
              </div>
            </div>
          ))
      ) : (
        <img src={loadingIcon} className="loading rounded-full" />
      )}
    </div>
  );
}
