import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("valorant-insight-data")) {
      //navigate("/");
    }
  }, []);

  return (
    <div className="dashboard text-white min-h-screen pt-16">
      <div className="border-b p-3">
        <h1 className="text-5xl font-bold">Dashboard (Section Main)</h1>
      </div>
      <div className="border-b p-3">
        <h1 className="text-5xl font-bold">Section 1</h1>
      </div>
      <div className="border-b p-3">
        <h1 className="text-5xl font-bold">Section 2</h1>
      </div>
    </div>
  );
}
