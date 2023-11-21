import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  if (!localStorage.getItem("valorant-insight-data")) {
    navigate("/");
  }
  return <div className="dashboard">Dashboard</div>;
}
