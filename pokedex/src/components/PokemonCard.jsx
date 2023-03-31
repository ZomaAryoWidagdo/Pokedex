import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import Fade from "@mui/material/Fade";
import { useNavigate } from "react-router-dom";
import { pokemonTypesColor } from "../helpers/allPokemonTypes";

export default function PokemonCard(pokemon) {
  const navigate = useNavigate();

  return (
    <Grid2 xs={12} sm={12} md={4}>
      <Fade in={true}>
        <Card
          sx={{ minWidth: 260, background: "#282c34", color: "white" }}
          onClick={() => navigate(`pokedex/${pokemon.pokemon.key}`)}
        >
          <CardMedia
            sx={{ minHeight: 200, backgroundSize: "auto" }}
            image={pokemon.pokemon.sprite}
            title={pokemon.pokemon.species}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {pokemon.pokemon.species}
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
              {pokemon.pokemon.types.map((x) => (
                <Typography
                  sx={{
                    border: "ButtonHighlight",
                    background: pokemonTypesColor(x.name),
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                  }}
                >
                  {x.name}
                </Typography>
              ))}
            </Typography>
          </CardContent>
        </Card>
      </Fade>
    </Grid2>
  );
}
