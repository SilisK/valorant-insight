export default function AgentIcon({ agent, setPage, setInfo }) {
  return (
    <div
      className="agent-icon select-none w-max cursor-pointer grid gap-2 place-items-center"
      onClick={() => {
        setPage("Info");
        setInfo({ ...agent, type: "Agent" });
      }}
    >
      <div className="agent-image">
        <img src={agent.displayIconSmall} />
      </div>
      <b>
        {agent.displayName}
        {agent.isBaseContent ? " (OG)" : null}
      </b>
    </div>
  );
}
