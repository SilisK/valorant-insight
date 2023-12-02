import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div className="dashboard">
      <section>
        <h2 className="text-5xl font-bold p-5">Dashboard</h2>
        {/* <aside className="flex flex-col gap-5 absolute top-0 right-0 py-20 px-5 h-screen bg-zinc-100 w-max"><button>I do a function!</button></aside> */}
        
      </section>
    </div>
  );
}
