import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_ALL_POKEMON } from "../queries/pokedex";
import { allPokemonTypes } from "../helpers/allPokemonTypes";

import Grid2 from "@mui/material/Unstable_Grid2";
import { Box, Button, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import PokemonCard from "../components/PokemonCard";

export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);

  const [forFilter, setForFilter] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  const [startIndex, setStartIndex] = useState(89);

  // eslint-disable-next-line
  const { loading, error, data, refetch } = useQuery(GET_ALL_POKEMON, {
    variables: { offset: startIndex, take: 9 },
  });

  const handleLoadMore = () => {
    setStartIndex(startIndex + 9);
    refetch({ startIndex: startIndex + 9, count: 9 });
  };

  const allPokemon = useQuery(GET_ALL_POKEMON, {
    variables: { offset: startIndex },
  });

  const handleFilter = (type) => {
    const filteredArray = forFilter.filter((p) => {
      return p.types.some((t) => t.name === type);
    });
    setPokemonList([...filteredArray]);
    setIsFilter(true);
  };

  useEffect(() => {
    if (data) {
      setPokemonList([...pokemonList, ...data.getAllPokemon]);
    }
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    if (allPokemon.data) {
      setForFilter([...allPokemon.data.getAllPokemon]);
    }
    // eslint-disable-next-line
  }, [allPokemon]);

  return (
    <Box>
      <Typography mt={3} variant="h2" gutterBottom>
        POKEDEX
      </Typography>
      <Grid2 container mx={2} my={1} spacing={{ xs: 2, md: 3 }} columns={12}>
        <Grid2 xs={12}>
          {allPokemonTypes.map((x) => (
            <Button
              key={x.name}
              size="small"
              onClick={() => handleFilter(x.name)}
              variant="contained"
              sx={{ m: 0.5, backgroundColor: x.backgroundColor }}
            >
              <span>{x.name}</span>
            </Button>
          ))}
        </Grid2>
      </Grid2>
      <Grid2
        mx={2}
        my={1}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {pokemonList.map((x) => (
          <PokemonCard pokemon={x} key={x.key} />
        ))}
      </Grid2>
      {!isFilter ? (
        <LoadingButton
          size="small"
          onClick={handleLoadMore}
          loading={loading}
          loadingPosition="center"
          variant="contained"
          sx={{ my: 1 }}
        >
          <span>Get More Pokemon</span>
        </LoadingButton>
      ) : null}
    </Box>
  );
}
