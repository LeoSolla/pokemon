import getRandomInt from "./helpers/getRandomInt";

export const GRAPHQL_API = "https://beta.pokeapi.co/graphql/v1beta";

const randomID = getRandomInt(1, 807);

export const GET_POKEMON_QUERY = `
  query pokemon {
    pokemon_v2_pokemonstat_by_pk(id: 1) {
      pokemon_v2_pokemon {
        id
        name
        weight
        height
        pokemon_v2_pokemonabilities {
          pokemon_v2_pokemon {
            pokemon_v2_pokemonsprites {
              sprites
            }
            pokemon_v2_pokemonstats {
              base_stat
              pokemon_v2_stat {
                name
              }
            }
            pokemon_v2_pokemontypes(limit: 2) {
              pokemon_v2_type {
                name
              }
            }
          }
          pokemon_v2_ability {
            name
          }
        }
      }
    }
  }
`;