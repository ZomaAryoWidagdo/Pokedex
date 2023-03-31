import { gql } from "@apollo/client";

// ORDERS
export const GET_ALL_POKEMON = gql`
  query Query($offset: Int, $take: Int) {
    getAllPokemon(offset: $offset, take: $take) {
      flavorTexts {
        flavor
      }
      key
      num
      types {
        name
      }
      sprite
      species
      forme
      evolutions {
        sprite
        types {
          name
        }
        species
        num
        key
      }
      preevolutions {
        sprite
        types {
          name
        }
        species
        num
        key
      }
    }
  }
`;

export const GET_POKEMON_DETAIL_SPECIES = gql`
  query GetPokemon($pokemon: PokemonEnum!) {
    getPokemon(pokemon: $pokemon) {
      sprite
      backSprite
      shinySprite
      shinyBackSprite
      weight
      height
      species
      types {
        name
        matchup {
          defending {
            doubleEffectiveTypes
            doubleResistedTypes
            effectiveTypes
            effectlessTypes
            normalTypes
            resistedTypes
          }
          attacking {
            doubleEffectiveTypes
            doubleResistedTypes
            effectiveTypes
            effectlessTypes
            normalTypes
            resistedTypes
          }
        }
      }
      evolutions {
        sprite
        types {
          name
        }
        species
        num
        key
      }
      preevolutions {
        sprite
        types {
          name
        }
        species
        num
        key
      }
      num
      key
      gender {
        male
        female
      }
      color
      baseStatsTotal
      baseStats {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      abilities {
        first {
          key
          name
          desc
        }
        hidden {
          key
          name
          desc
        }
        second {
          key
          name
          desc
        }
        special {
          key
          name
          desc
        }
      }
      baseForme
      baseSpecies
      cosmeticFormes
      forme
      formeLetter
      otherFormes
    }
  }
`;
