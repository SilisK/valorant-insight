export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-500 to-zinc-800 text-white w-full grid md:grid-flow-col md:place-items-center gap-10 p-10">
      <div>
        <h1 className="text-xl font-bold">Contact Info</h1>

        <a href="https://www.linkedin.com/in/silis-kleemoff" target="_blank">
          LinkedIn
        </a>
        <p className="grid gap-2 grid-flow-col place-items-center w-max">
          <p>kleemoffdeveloper@gmail.com</p>
          <img
            src="https://www.svgrepo.com/show/447592/copy.svg"
            className="gizmo cursor-pointer bg-white p-1 rounded active:opacity-50"
            onClick={() =>
              navigator.clipboard.writeText("kleemoffdeveloper@gmail.com")
            }
          />
        </p>
      </div>
      {/*  */}
      <div className="sm:w-1/2 text-left flex flex-col">
        <h1 className="text-xl font-bold">Notice</h1>
        <p>
          Valorant Insight is a non-official Web Application and not endorsed by
          Riot Games in any way. Riot Games, Valorant, and all associated
          properties are trademarks or registered trademarks of Riot Games, Inc.
        </p>
      </div>
    </footer>
  );
}
