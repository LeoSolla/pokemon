import React from 'react';

import chevron from '../assets/images/chevronDownBlack.png';
import defense from '../assets/images/defense.svg';
import attack from '../assets/images/attack.svg';
import specialattack from '../assets/images/specialattack.svg';
import specialdefense from '../assets/images/specialdefense.svg';
import velocity from '../assets/images/velocity.svg';


const NumberInput = ({ className, label, placeholder, name, suffix, register, errors }) => {

    const images = {
        defense,
        attack,
        specialattack,
        specialdefense,
        velocity,
    }

    return (
        <div className={`${className} input__container`}>
            <div className="input__title">
                {images[name] &&
                    <img className="image" src={images[name]} alt={name}
                />}
                {label && (
                    <label className="input__label">
                        {label}
                    </label>
                )}
            </div>
            <div className="input__number">
                <input className="input" type="number" placeholder={placeholder} name={name} {...register(name)}/>
                {suffix && (
                    <p className="input__suffix">
                        {suffix}
                    </p>
                )}
                <div className="input__btns">
                    <img src={chevron} className="input__increase" alt="Mais" />
                    <img src={chevron} className="input__decrease" alt="Menos" />
                </div>
            </div>
            {errors[name] && <span className="error">{errors[name].message}</span>}
        </div>
    )
};

export default NumberInput;
