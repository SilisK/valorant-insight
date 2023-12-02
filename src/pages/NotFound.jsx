import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    scroll(0, 0);
  }, []);

  return (
    <div className="not-found min-h-screen grid place-items-center">
      <div className="flex p-5 flex-col items-center text-center gap-5">
        <h1 className="text-5xl font-bold drop-shadow-sm">404</h1>
        <h2 className="text-3xl font-semibold">Page not found.</h2>
        <Link to="/" className="w-max">
          <button>Back to home</button>
        </Link>
      </div>
    </div>
  );
}
