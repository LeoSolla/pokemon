import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: "pokemons",
    initialState: { value: [] },
    reducers: {
        addPokemon: (state, action) => {
            state.value.push(action.payload);
        },
    },
});

export const { addPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;