const PokeAPI = (data) => {
    return {
        id: data.pokemon_v2_pokemon.id,
        name: data.pokemon_v2_pokemon.name,
        hp: data.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_pokemon.pokemon_v2_pokemonstats[0].base_stat,
        height: data.pokemon_v2_pokemon.height,
        weight: data.pokemon_v2_pokemon.weight,
        ability1: data.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_ability.name,
        ability2: data.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[1].pokemon_v2_ability.name,
        type1: data.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name,
        type2: data.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_pokemon.pokemon_v2_pokemontypes[1].pokemon_v2_type.name,
        attack: data.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_pokemon.pokemon_v2_pokemonstats[1].base_stat,
        defense: data.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_pokemon.pokemon_v2_pokemonstats[2].base_stat,
        specialattack: data.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_pokemon.pokemon_v2_pokemonstats[3].base_stat,
        specialdefense: data.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_pokemon.pokemon_v2_pokemonstats[4].base_stat,
        velocity: data.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_pokemon.pokemon_v2_pokemonstats[5].base_stat,
        sprites: data.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default
      }
};

export default PokeAPI;