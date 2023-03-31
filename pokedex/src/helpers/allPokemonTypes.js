export const allPokemonTypes = [
  { name: "Bug", backgroundColor: "#729f3f" },
  { name: "Dragon", backgroundColor: "#53a4cf" },
  { name: "Dark", backgroundColor: "#707070" },
  { name: "Electric", backgroundColor: "#eed535" },
  { name: "Fairy", backgroundColor: "#fdb9e9" },
  { name: "Fighting", backgroundColor: "#d56723" },
  { name: "Fire", backgroundColor: "#fd7d24" },
  { name: "Flying", backgroundColor: "#3dc7ef" },
  { name: "Ghost", backgroundColor: "#7b62a3" },
  { name: "Grass", backgroundColor: "#9bcc50" },
  { name: "Ground", backgroundColor: "#f7de3f" },
  { name: "Ice", backgroundColor: "#51c4e7" },
  { name: "Normal", backgroundColor: "#a4acaf" },
  { name: "Poison", backgroundColor: "#b97fc9" },
  { name: "Psychic", backgroundColor: "#f366b9" },
  { name: "Rock", backgroundColor: "#a38c21" },
  { name: "Steel", backgroundColor: "#9eb7b8" },
  { name: "Water", backgroundColor: "#4592c4" },
];

export function pokemonTypesColor(name) {
  if (name === "Bug") return "#729f3f";
  if (name === "Dragon") return "#53a4cf";
  if (name === "Dark") return "#707070";
  if (name === "Electric") return "#eed535";
  if (name === "Fairy") return "#fdb9e9";
  if (name === "Fighting") return "#d56723";
  if (name === "Fire") return "#fd7d24";
  if (name === "Flying") return "#3dc7ef";
  if (name === "Ghost") return "#7b62a3";
  if (name === "Grass") return "#9bcc50";
  if (name === "Ground") return "#f7de3f";
  if (name === "Ice") return "#51c4e7";
  if (name === "Normal") return "#a4acaf";
  if (name === "Poison") return "#b97fc9";
  if (name === "Psychic") return "#f366b9";
  if (name === "Rock") return "#a38c21";
  if (name === "Steel") return "#9eb7b8";
  if (name === "Water") return "#4592c4";
}
