import React, { useState } from 'react';
import * as Constants from '../constants';
import axios from 'axios';
import Modal from './Modal';

const Ash = () => {
    const [data, setData] = useState({ pokemon: [] });
    const [showModal, setShowModal] = useState(false);

    const fecthData = async () => {
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
            <div className="person" onClick={fecthData}>
            {showModal && 
                <Modal pokemon={data.pokemon} />
            }
            {console.log(data)}
            </div>
        </div>
    )
};

export default Ash;