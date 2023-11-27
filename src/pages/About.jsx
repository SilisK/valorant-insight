export default function About() {
  return (
    <div className="about text-white min-h-screen pt-14">
      <div className="grid gap-20 place-items-center py-10">
        <div className="p-3 grid gap-5 justify-center w-11/12 lg:w-4/6">
          <h1 className="text-5xl font-bold">A useful resource</h1>
          <p className="bg-slate-100/10 rounded p-3">
            Valorant Insight is a web application that maps out most of the
            available information about the game. We get our data from an
            unofficial, third-party API called{" "}
            <a href="https://valorant-api.com" target="_blank">
              Valorant API
            </a>{" "}
            which is extremely useful since it contains so much content.
          </p>
        </div>
        {/*  */}
        <div className="p-3 grid gap-5 justify-center w-11/12 lg:w-4/6">
          <h1 className="text-5xl font-bold text-right">For the players</h1>
          <p className="bg-slate-100/10 rounded p-3">
            If you want to learn more about the game at any time, this is your
            platform. This is a great resource for new or aspiring players as
            well. Our mission is to help you improve at the game by giving you
            information that oftentimes goes unchecked. Feel free to let us know
            any feedback or changes you want to request to the platform at{" "}
            <b>kleemoffdeveloper@gmail.com</b>.
          </p>
        </div>
        {/*  */}
        <div className="grid gap-5 place-items-center w-11/12 sm:w-full">
          <h1 className="text-5xl font-bold">Join Us</h1>
          <b className="text-xl">Are you a developer and fan of the game? </b>
          <table className="text-center sm:w-4/6">
            <thead>
              <tr>
                <th>Technical Skills</th>
                <th>Game Knowledge</th>
                <th>Open Source</th>
              </tr>
            </thead>
            {/*  */}
            <tbody>
              <tr>
                <td>React.js</td>
                <td>Casual</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>HTML/CSS</td>
              </tr>
              <tr>
                <td>Express.js</td>
              </tr>
            </tbody>
          </table>
          <div className="w-full sm:w-4/6">
            <button
              onClick={() =>
                window.open("https://github.com/SilisK/valorant-insight")
              }
            >
              Fork on GitHub
            </button>
            <p className="my-10">Submit a pull request with your updates for review.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
