import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMON } from "../queries/pokedex";

export default function Pokedex() {
  const navigate = useNavigate();
  const location = useLocation();

  const [type, setType] = useState("");
  const { loading, error, data } = useQuery(GET_ALL_POKEMON, {
    variables: {},
  });
  const [filteredPokedex, setFilteredPokedex] = useState([]);

  if (loading) return <div> Loading </div>;
  if (error) return <div> {error} </div>;

  console.log(data, loading, error, location.search);

  return (
    <>
      <div onClick={() => navigate("/")}>Homepage</div>
      <div>List Pokedex</div>
      <div onClick={() => navigate("/pokedex?type=grass")}>Type</div>
      <div onClick={() => navigate("/pokedex/1")}>Detail</div>;
    </>
  );
}
