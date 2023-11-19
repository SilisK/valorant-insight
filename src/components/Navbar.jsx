export default function Navbar({ setPage }) {
  return (
    <nav className="text-center select-none bg-white py-3 px-3 sm:px-10 border-b-4 my-5 grid gap-3 sm:grid-flow-col grid-col-3 items-center justify-between">
      <a
        onClick={() => {
          setPage("");
        }}
      >
        Home
      </a>
      <a href="https://valorant-api.com/" target="_blank">
        API Source
      </a>
      <a>
        About
      </a>
    </nav>
  );
}
