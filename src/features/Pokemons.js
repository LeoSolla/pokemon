import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: "pokemons",
    initialState: { value: [] },
    reducers: {
        addPokemon: (state, action) => {
            state.value.push(action.payload);
        },
        deletePokemon: (state, action) => {
            state.value.forEach((item, index) => {
                if (item.id === action.payload) state.value.splice(index, 1);
            });
        }
    },
});

export const { addPokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;