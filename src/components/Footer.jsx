export default function Footer() {
  return (
    <footer className="w-full border-slate-300 border-t-4 grid gap-3 text-center place-items-center sm:grid-flow-col items-center sm:justify-evenly py-5 px-8">
      <h1 className="sm:text-left text-xl font-bold p-2 rounded-xl">
        <p className="my-5">
          © Valorant Insight{" "}
          <span className="font-normal">
            —{" "}
            <a
              href="https://www.linkedin.com/in/silis-kleemoff/"
              target="_blank"
            >
              Silis K.
            </a>
          </span>
        </p>
        <div className="text-sm font-normal grid gap-5">
          <p>
            Valorant Insight is a non-official web application and not endorsed
            by Riot Games in any way.
          </p>
          <p>
            Riot Games, Valorant, and all associated properties are trademarks
            or registered trademarks of Riot Games, Inc.
          </p>
        </div>
      </h1>
      <div className="grid gap-2 place-items-center w-full p-2 rounded-xl">
        <h1 className="text-xl font-semibold">External Links</h1>
        <hr />
        <a href="https://github.com/SilisK" target="_blank">
          GitHub
        </a>
        <a href="https://silisk.github.io" target="_blank">
          Portfolio
        </a>
        <a>kleemoffdeveloper@gmail.com</a>
      </div>
    </footer>
  );
}
