import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POKEMON_DETAIL_SPECIES } from "../queries/pokedex";

export default function PokedexDetail() {
  const navigate = useNavigate();
  const { number } = useParams();

  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL_SPECIES, {
    variables: { number: +number },
  });

  console.log(data, loading, error?.message);

  return (
    <>
      <div>Pokemon Detail</div>
      <div onClick={() => navigate("/pokedex")}>Back</div>;
    </>
  );
}
