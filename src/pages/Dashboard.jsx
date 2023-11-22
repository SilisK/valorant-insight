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
    <div className="dashboard min-h-screen">
      <div></div>
    </div>
  );
}
