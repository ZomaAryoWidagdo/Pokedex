import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/pokedex")}>Open Pokedex</button>
    </div>
  );
}
