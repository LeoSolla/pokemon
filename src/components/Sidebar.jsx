import React from 'react';
import Button from './Button';
import plusIcon from '../assets/images/plus.png';
import ModalNewPokemon from './ModalNewPokemon';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="sidebar__item">?</div>
            <Button
                icon={<img src={plusIcon} alt="+" />}
            />
            <ModalNewPokemon />
        </div>
    );
};

export default Sidebar;
