import React, { useState } from 'react';
import * as Constants from '../constants';
import axios from 'axios';
import Modal from './Modal';

const Ash = () => {
    const [data, setData] = useState({ pokemon: [] });
    const [showModal, setShowModal] = useState(false);

    const fetchData = async () => {
        const queryResult = await axios.post (
            Constants.GRAPHQL_API, {
                query: Constants.GET_POKEMON_QUERY
            }
        );
        const result = queryResult.data.data;
            setData({ pokemon: result.pokemon });
            setShowModal(true);
    };

    return (
        <div className="ash">
            <div className="person" onClick={fetchData}>
            {showModal && (
                <Modal apiPokemon={data.pokemon} openModal={showModal} close={() => setShowModal(false)} />
            )}
            {console.log(data)}
            </div>
        </div>
    )
};

export default Ash;