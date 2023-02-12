import React from 'react';
import chevron from '../assets/images/chevronDownBlack.png';

const Dropdown = ({ options, multiple }) => {

    return (
        <div className="dropdown__container">
            <img src={chevron} className="dropdown__icon" alt="Chevron" />
            <select className="dropdown">
                <option className="dropdown__option" value="">
                    Selecione o(s) tipo(s)
                </option>
                {options.map(({ id, value, name }) => (
                    <option className="dropdown__option" key={id} value={value}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    )
};

export default Dropdown;
