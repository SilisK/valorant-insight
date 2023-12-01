export default function Footer() {
  return (
    <footer className="bg-dark-grey-theme py-10 text-white grid place-items-center">
      <div className="footer-container flex flex-col lg:flex-row gap-10 justify-between items-center px-5">
        {/* Vital info, copyright, disclaimers */}
        <div className="w-11/12">
          <p>
            <b>©</b> Copyright <b>Valorant Insight</b>
          </p>
          <p>
            Valorant Insight is a non-official Web Application and not endorsed
            by Riot Games in any way. Riot Games, Valorant, and all associated
            properties are trademarks or registered trademarks of Riot Games,
            Inc.
          </p>
        </div>
        {/* linkedin, github, socials */}
        <div className="text-center grid gap-3 px-5">
          <b>Developer</b>
          <div className="flex gap-5">
            <img
              src="https://www.svgrepo.com/show/452051/linkedin.svg"
              className="cursor-pointer w-14"
              onClick={() => {
                window.open("https://www.linkedin.com/in/silis-kleemoff/");
              }}
            />
            <img
              src="https://www.svgrepo.com/show/447137/github-fill.svg"
              className="cursor-pointer w-14 bg-white rounded-full"
              onClick={() => {
                window.open("https://github.com/SilisK");
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
