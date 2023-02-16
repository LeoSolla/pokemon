import React, { } from 'react';
import Button from './Button';
import closeIcon from '../assets/images/close.png';
import { useDispatch } from 'react-redux';
import { deletePokemon } from '../features/Pokemons';
import { addPokemon } from '../features/Pokemons';
import PokeAPI from '../data/PokeAPI';

const Modal = ({ apiPokemon, pokemon, openModal, close, edited, dataPokemon }) => {
    const dispatch = useDispatch();
    const capturePokemon = () => {
        dataPokemon = apiPokemon.pokemon
        const pokemonData = PokeAPI(dataPokemon);
        dispatch(addPokemon(pokemonData));
        close();
      };

return (
    <>
        {openModal && (
            <div className="modal">
                <div className="modal__content">
                    <img className="modal__close" src={closeIcon} alt="Fechar" onClick={() => {close()}}/>
                    <div className="modal__main">
                        <div className="modal__photo">
                            {!edited && (
                                <div className="modal__sprite">
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${apiPokemon.pokemon.pokemon_v2_pokemon.id}.png`} alt={apiPokemon.pokemon.pokemon_v2_pokemon.name}  />
                                </div>
                            )}
                        </div>
                        <div className="modal__name">
                            {edited ? (
                                <span>{pokemon?.name}</span>
                            ) : (
                                <span>{apiPokemon.pokemon.pokemon_v2_pokemon.name}</span>
                            )}                            
                        </div>
                        <div className="modal__info">
                            <div className="modal__field">
                                <label>HP</label>
                                {edited ? (
                                    <span>{pokemon?.hp} / {pokemon?.hp}</span>
                                ) : (
                                    <span>{apiPokemon.pokemon.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_pokemon.pokemon_v2_pokemonstats[0].base_stat} / {apiPokemon.pokemon.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_pokemon.pokemon_v2_pokemonstats[0].base_stat} </span>
                                )}
                                
                            </div>
                            <div className="modal__field">
                                <label>Altura</label>
                                {edited ? (
                                    <span>{`${pokemon?.height * 10} m`}</span>
                                ) : (
                                    <span>{`${apiPokemon.pokemon.pokemon_v2_pokemon.height * 10} m`}</span>
                                )}
                                
                            </div>
                            <div className="modal__field">
                                <label>Peso</label>
                                {edited ? (
                                    <span>{`${pokemon?.weight / 10} kg`}</span>
                                ) : (
                                    <span>{`${apiPokemon.pokemon.pokemon_v2_pokemon.weight / 10} kg`}</span>
                                )}                                
                            </div>
                        </div>
                        <div className="modal__labelField">
                            <div className="separator"></div>
                                <label className="label_title">Tipo</label>
                            <div className="separator"></div>
                        </div>

                        <div className="modal__types">

                            {!edited && (
                            <>
                                <div className={`modal__colors ${apiPokemon.pokemon.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name}`}>
                                    <span>{apiPokemon.pokemon.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name}</span>
                                </div>                                                     
                                <div className={`modal__colors ${apiPokemon.pokemon.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_pokemon.pokemon_v2_pokemontypes[1].pokemon_v2_type.name}`}>
                                    <span>{apiPokemon.pokemon.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_pokemon.pokemon_v2_pokemontypes[1].pokemon_v2_type.name}</span>
                                </div>    
                            </>      
                            // ) : (
                            // <>
                            //     {pokemon?.type.map((item, index) => (
                            //         <div className={`modal__colors ${item.name}`} key={index}>
                            //             <span>{item.label}</span>
                            //         </div>
                            //     ))} 
                            // </> 
                            )}       
                                                              
                        </div>

                        <div className="modal__labelField">
                            <div className="separator"></div>
                                <label className="label_title">Habilidades</label>
                            <div className="separator"></div>
                        </div>

                        <div className="modal__abilities">
                            {!edited && (<label>{`${apiPokemon.pokemon.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_ability.name}, `}</label>)}
                            {!edited && (<label>{apiPokemon.pokemon.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[1].pokemon_v2_ability.name}</label>)}                    
                            {pokemon?.ability1 && <label>{`${pokemon.ability1}, `}</label>}
                            {pokemon?.ability2 && <label>{`${pokemon.ability2}, `}</label>}
                            {pokemon?.ability3 && <label>{`${pokemon.ability3}, `}</label>}
                            {pokemon?.ability4 && <label>{`${pokemon.ability4}`}</label>}
                        </div>

                        <div className="modal__labelField">
                            <div className="separator"></div>
                                <label className="label_title">Estatísticas</label>
                            <div className="separator"></div>
                        </div>

                        <div className="modal__statistics">
                            <div className="modal__labelsField">
                                <div className="statistics_title">
                                    <svg className="statistics" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5894 2.94199L9.83877 0.129214C9.63314 0.0439093 9.4127 0 9.19008 0C8.96745 0 8.74702 0.0439093 8.54138 0.129214L1.79073 2.94199C1.16137 3.20217 0.75 3.81746 0.75 4.49956C0.75 11.4788 4.77578 16.3027 8.53787 17.8708C8.95275 18.0431 9.42037 18.0431 9.83526 17.8708C12.8484 16.6156 17.6266 12.2804 17.6266 4.49956C17.6266 3.81746 17.2153 3.20217 16.5894 2.94199Z" fill="#2E3A59"/>
                                    </svg>
                                    <label>Defesa</label>
                                </div>
                                <div className="statistics__number">
                                    {edited ? (
                                        <span>{pokemon?.defense}</span>
                                    ) : (
                                        <span>{apiPokemon.pokemon.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_pokemon.pokemon_v2_pokemonstats[2].base_stat}</span>
                                    )}                                    
                                </div>
                            </div>
                            <div className="modal__labelsField">
                                <div className="statistics_title">
                                    <svg className="statistics" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0626 4.50004H8.12508V0.562505C8.12508 0.251721 7.87336 0 7.56257 0H6.43756C6.12678 0 5.87505 0.251721 5.87505 0.562505V4.50004H1.93752C1.00552 4.50004 0.25 5.25556 0.25 6.18756C0.25 7.11956 1.00552 7.87508 1.93752 7.87508C2.67123 7.87508 3.28929 7.40398 3.52167 6.75007H10.4785C10.7108 7.40398 11.3289 7.87508 12.0626 7.87508C12.9946 7.87508 13.7501 7.11956 13.7501 6.18756C13.7501 5.25556 12.9946 4.50004 12.0626 4.50004ZM4.75004 15.0766L6.53213 17.7495C6.75467 18.0835 7.24546 18.0835 7.46835 17.7495L9.25009 15.0766V7.87508H4.75004V15.0766Z" fill="#2E3A59"/>
                                    </svg>
                                    <label>Ataque</label>
                                </div>
                                <div className="statistics__number">
                                    {edited ? (
                                        <span>{pokemon?.attack}</span>
                                    ) : (
                                        <span>{apiPokemon.pokemon.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_pokemon.pokemon_v2_pokemonstats[1].base_stat}</span>
                                    )}                                    
                                </div>
                            </div>
                            <div className="modal__labelsField">
                                <div className="statistics_title">
                                    <svg className="statistics" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5894 2.94199L9.83877 0.129214C9.63314 0.0439093 9.4127 0 9.19008 0C8.96745 0 8.74702 0.0439093 8.54138 0.129214L1.79073 2.94199C1.16137 3.20217 0.75 3.81746 0.75 4.49956C0.75 11.4788 4.77578 16.3027 8.53787 17.8708C8.95275 18.0431 9.42037 18.0431 9.83526 17.8708C12.8484 16.6156 17.6266 12.2804 17.6266 4.49956C17.6266 3.81746 17.2153 3.20217 16.5894 2.94199Z" fill="#2E3A59"/>
                                    </svg>
                                    <label>Defesa especial</label>
                                </div>
                                <div className="statistics__number">
                                    {edited ? (
                                        <span>{pokemon?.specialdefense}</span>
                                    ) : (
                                        <span>{apiPokemon.pokemon.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_pokemon.pokemon_v2_pokemonstats[4].base_stat}</span>
                                    )}
                                </div>
                            </div>
                            <div className="modal__labelsField">
                                <div className="statistics_title">
                                    <svg className="statistics" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0626 4.50004H8.12508V0.562505C8.12508 0.251721 7.87336 0 7.56257 0H6.43756C6.12678 0 5.87505 0.251721 5.87505 0.562505V4.50004H1.93752C1.00552 4.50004 0.25 5.25556 0.25 6.18756C0.25 7.11956 1.00552 7.87508 1.93752 7.87508C2.67123 7.87508 3.28929 7.40398 3.52167 6.75007H10.4785C10.7108 7.40398 11.3289 7.87508 12.0626 7.87508C12.9946 7.87508 13.7501 7.11956 13.7501 6.18756C13.7501 5.25556 12.9946 4.50004 12.0626 4.50004ZM4.75004 15.0766L6.53213 17.7495C6.75467 18.0835 7.24546 18.0835 7.46835 17.7495L9.25009 15.0766V7.87508H4.75004V15.0766Z" fill="#2E3A59"/>
                                    </svg>
                                    <label>Ataque especial</label>
                                </div>
                                <div className="statistics__number">
                                    {edited ? (
                                        <span>{pokemon?.specialattack}</span>
                                    ) : (
                                        <span>{apiPokemon.pokemon.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_pokemon.pokemon_v2_pokemonstats[3].base_stat}</span>
                                    )}
                                </div>
                            </div>
                            <div className="modal__labelsField">
                                <div className="statistics_title">
                                    <svg className="statistics" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 0.25C4.02938 0.25 0 4.27938 0 9.25C0 10.9 0.445313 12.4456 1.22063 13.775C1.39594 14.0756 1.73 14.25 2.07812 14.25H15.9219C16.27 14.25 16.6041 14.0756 16.7794 13.775C17.5547 12.4456 18 10.9 18 9.25C18 4.27938 13.9706 0.25 9 0.25ZM14.1 5.70031L10.7078 10.2231C10.8894 10.5241 11 10.8728 11 11.25C11 11.6163 10.8944 11.9547 10.7225 12.25H7.2775C7.10563 11.9547 7 11.6163 7 11.25C7 10.1453 7.89531 9.25 9 9.25C9.17656 9.25 9.34437 9.28 9.5075 9.32312L12.9 4.79969C13.1494 4.46969 13.6188 4.40219 13.9503 4.64969C14.2813 4.89844 14.3488 5.36875 14.1 5.70031V5.70031Z" fill="#2E3A59"/>
                                    </svg>
                                    <label>Velocidade</label>
                                </div>
                                <div className="statistics__number">
                                    {edited ? (
                                        <span>{pokemon?.velocity}</span>
                                    ) : (
                                        <span>{apiPokemon.pokemon.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_pokemon.pokemon_v2_pokemonstats[5].base_stat}</span>
                                    )}
                                </div>
                            </div>                      
                        </div>

                        <div className="modal__buttons">
                            {!edited ? (
                                <button type="submit" className="capture" onClick={capturePokemon}/>
                            ) : (
                                <Button 
                                    type="submit" 
                                    className="capture" 
                                    text="LIBERAR POKEMON" 
                                    onClick={() => {
                                        dispatch(deletePokemon(pokemon.id)); 
                                        close()
                                    }}
                                />
                            )}                                
                        </div>  
                    </div>
                </div>
            </div>
        )}
    </>
    );
};

export default Modal;