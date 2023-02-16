import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Hover from '../helpers/Hover';

import searchPokemon from "../assets/images/searchTooltip.png";
import searchingPokemon from "../assets/images/searchingTooltip.png";
import fullPokemon from "../assets/images/tooltipError.png";

import * as Constants from '../constants';
import axios from 'axios';
import Modal from './Modal';

const Ash = () => {
    const [data, setData] = useState({ pokemon: [] });
    const [showModal, setShowModal] = useState(false);
    const [hover, isHover] = Hover();
    const [captura, setCaptura] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [tooltip, setTooltip] = useState(searchPokemon);

    const pokemons = useSelector((state) => state.pokemons.value);

    const Tooltip = ({ tooltip }) => {
        return <img src={tooltip} className="tooltip" alt="Tooltip" />
      };

    useEffect(() => {
        if (captura) {
          if (pokemons.length < 6) {
            setTooltip(searchingPokemon);
            fetchData();
          } else {
            setCaptura(false);
          }
        } else {
          checkTooltip();
        }
      }, [captura]);

      useEffect(() => {
        checkTooltip();
      }, [pokemons]);
    
      const checkTooltip = () => {
        pokemons.length < 6 ? setTooltip(searchPokemon) : setTooltip(fullPokemon);
      };

    const fetchData = async () => {
        setIsHidden(true)
        setData({});
        const queryResult = await axios.post (
            Constants.GRAPHQL_API, {
                query: Constants.GET_POKEMON_QUERY
            }
        );
        const result = queryResult.data.data.pokemon_v2_pokemonstat_by_pk;
            setData({ pokemon: result});
            setTimeout(() => {
                setCaptura(false);
                setShowModal(true);
                setIsHidden(false)
              }, 1200);
    };

    return (
        <div className={isHidden ? "ashHide" : "ash"}>         
        {(isHover || captura) && <Tooltip tooltip={tooltip} />}   
            {(!captura || tooltip == fullPokemon) && (
                <div className="person" onClick={() => setCaptura(true)} ref={hover}>
                    
                </div>
            )}

            {captura && tooltip !== fullPokemon && (<div className="ashWalk"></div>)}

            {showModal && (
                <Modal 
                    apiPokemon={data} 
                    openModal={showModal} 
                    close={() => setShowModal(false)}
                />
            )}
        </div>
    )
};

export default Ash;