import React, { useState } from 'react';
import { useSelector } from "react-redux";
import Button from './Button';
import plusIcon from '../assets/images/plus.png';
import ModalNewPokemon from './ModalNewPokemon';
import Modal from './Modal';

const Sidebar = () => {
    const [newModal, setNewModal] = useState(false);
    const [modal, setModal] = useState(false);
    const [data, setData] = useState();
    const pokemonList = useSelector((state) => state.pokemons.value);

    const getPokemon = (item) => {
        setModal(true)
        setData(item)
    };
    
    return (
        <div className="sidebar">
            {pokemonList.map((item, index) => {
                return (
                    <div className="sidebar__item" key={index} onClick={() => getPokemon(item)}>
                        <div className="sidebar__avatar">
                            X
                        </div>
                    </div>
                );
            })}
            {pokemonList.length < 6 &&  (
                <Button
                    icon={<img src={plusIcon} alt="+" />}
                    onClick={() => setNewModal(true)}
                />
            )}
            <Modal 
                pokemon={data} 
                openModal={modal} 
                close={() => setModal(false)}
            />
            <ModalNewPokemon 
                open={newModal} 
                close={() => setNewModal(false)}
            />
        </div>
    );
};

export default Sidebar;
