import getRandomInt from "./helpers/getRandomInt";

const randomID = getRandomInt(1, 807);

export const GRAPHQL_API = "https://beta.pokeapi.co/graphql/v1beta";

export const GET_POKEMON_QUERY = `
    query pokemon {
        pokemon: pokemon_v2_pokemonspecies(limit: 1, offset: ${randomID}) {
        name
        id
        }
    }
`;