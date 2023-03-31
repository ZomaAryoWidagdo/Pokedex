import AppBar from "@mui/material/AppBar";
import PokemonLogo from "../assets/PokemonLogo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        backgroundColor: "#ee1515",
        alignItems: "center",
        pb: 1,
        pt: 1,
        border: "solid",
        borderColor: "yellow",
      }}
    >
      <img
        alt="PokemonLogo"
        src={PokemonLogo}
        width="130px"
        onClick={() => navigate("/")}
      />
    </AppBar>
  );
}
export default Header;
