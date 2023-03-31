import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Image from "mui-image";

import { GET_POKEMON_DETAIL_SPECIES } from "../queries/pokedex";
import { pokemonTypesColor } from "../helpers/allPokemonTypes";

export default function PokedexDetail() {
  const navigate = useNavigate();
  const { pokemon } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState();
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL_SPECIES, {
    variables: { pokemon: pokemon },
  });

  useEffect(() => {
    if (data) setPokemonDetail(data?.getPokemon);
  }, [data]);

  return (
    <Grid2
      container
      mx={0.1}
      my={0.1}
      spacing={{ xs: 2, md: 3 }}
      columns={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "white ",
      }}
    >
      <Grid2
        xs={12}
        backgroundColor={"black"}
        border={"solid"}
        borderColor={"white"}
        sx={{
          opacity: "50%",
          borderBottomLeftRadius: "25%",
          borderBottomRightRadius: "25%",
        }}
      >
        <Box
          color={"white"}
          onClick={() => {
            if (pokemonDetail?.preevolutions)
              navigate(`/pokedex/${pokemonDetail?.preevolutions[0]?.key}`);
          }}
        >
          <Typography mb={2}>PRE-EVOLUTION</Typography>
          <Typography variant="subtitle" color={"white"}>
            {pokemonDetail?.preevolutions
              ? pokemonDetail?.preevolutions[0]?.key.toUpperCase()
              : "-"}
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              my: 2,
              color: "white",
            }}
          >
            <Image
              src={
                pokemonDetail?.preevolutions
                  ? pokemonDetail?.preevolutions[0]?.sprite
                  : ""
              }
              width={150}
              fit="none"
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {pokemonDetail?.preevolutions
              ? pokemonDetail?.preevolutions[0]?.types.map((x) => (
                  <Typography
                    sx={{
                      border: "ButtonHighlight",
                      background: pokemonTypesColor(x?.name),
                      px: 2,
                      py: 1,
                      borderRadius: 1,
                      mx: 2,
                    }}
                  >
                    {x?.name}
                  </Typography>
                ))
              : null}
          </Box>
        </Box>
      </Grid2>
      <Grid2 xs={12} sm={12} md={4}>
        <Box color={"black"}>
          <Typography mb={2}>ABILITIES</Typography>
          <Typography>{pokemonDetail?.abilities?.first?.name}</Typography>
          <Typography mb={2}>
            {pokemonDetail?.abilities?.first?.desc}
          </Typography>
          <Typography>{pokemonDetail?.abilities?.hidden?.name}</Typography>
          <Typography mb={2}>
            {pokemonDetail?.abilities?.hidden?.desc}
          </Typography>
          <Typography>{pokemonDetail?.abilities?.second?.name}</Typography>
          <Typography mb={2}>
            {pokemonDetail?.abilities?.second?.desc}
          </Typography>
          <Typography>{pokemonDetail?.abilities?.special?.name}</Typography>
          <Typography mb={2}>
            {pokemonDetail?.abilities?.special?.desc}
          </Typography>
        </Box>
      </Grid2>
      <Grid2 xs={12} sm={12} md={4}>
        <Typography variant="subtitle" color={"black"}>
          {pokemonDetail?.key.toUpperCase()}
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            my: 2,
            color: "black",
          }}
        >
          <Box>
            <Typography mr={2}>HEIGHT: </Typography>
            <Typography mr={2}>{pokemonDetail?.height} m</Typography>
          </Box>
          <Image src={pokemonDetail?.sprite} width={150} fit="contain" />
          <Box>
            <Typography ml={2}>WEIGHT: </Typography>
            <Typography ml={2}>{pokemonDetail?.weight} kg</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {pokemonDetail?.types.map((x) => (
            <Typography
              sx={{
                border: "ButtonHighlight",
                background: pokemonTypesColor(x?.name),
                px: 2,
                py: 1,
                borderRadius: 1,
                mx: 2,
              }}
            >
              {x.name}
            </Typography>
          ))}
        </Box>
      </Grid2>
      <Grid2 xs={12} sm={12} md={4}>
        <Box color={"black"}>
          <Typography mb={2}>BASESTATS</Typography>
          <Typography>attack: {pokemonDetail?.baseStats?.attack}</Typography>
          <Typography>defense: {pokemonDetail?.baseStats?.defense}</Typography>
          <Typography>hp: {pokemonDetail?.baseStats?.hp}</Typography>
          <Typography>
            special attack: {pokemonDetail?.baseStats?.specialattack}
          </Typography>
          <Typography>
            special defense: {pokemonDetail?.baseStats?.specialdefense}
          </Typography>
          <Typography>speed: {pokemonDetail?.baseStats?.speed}</Typography>
        </Box>
      </Grid2>
      <Grid2
        xs={12}
        backgroundColor={"black"}
        border={"solid"}
        borderColor={"white"}
        sx={{
          opacity: "50%",
          borderTopLeftRadius: "25%",
          borderTopRightRadius: "25%",
        }}
      >
        <Box
          color={"white"}
          onClick={() => {
            if (pokemonDetail?.evolutions)
              navigate(`/pokedex/${pokemonDetail?.evolutions[0]?.key}`);
          }}
        >
          <Typography mb={2}>EVOLUTION</Typography>
          <Typography variant="subtitle" color={"white"}>
            {pokemonDetail?.evolutions
              ? pokemonDetail?.evolutions[0]?.key.toUpperCase()
              : "-"}
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              my: 2,
              color: "white",
            }}
          >
            <Image
              src={
                pokemonDetail?.evolutions
                  ? pokemonDetail?.evolutions[0]?.sprite
                  : "-"
              }
              width={150}
              fit="none"
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {pokemonDetail?.evolutions
              ? pokemonDetail?.evolutions[0]?.types.map((x) => (
                  <Typography
                    sx={{
                      border: "ButtonHighlight",
                      background: pokemonTypesColor(x?.name),
                      px: 2,
                      py: 1,
                      borderRadius: 1,
                      mx: 2,
                    }}
                  >
                    {x?.name}
                  </Typography>
                ))
              : null}
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
}
