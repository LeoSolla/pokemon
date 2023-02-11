import React from 'react';

const TextInput = ({ className, label, placeholder, name, register, errors }) => {

    return (
        <div className={`${className} input__container`}>
            {label && (
                <label className="input__label">
                    {label}
                </label>
            )}
            <input className="input" type="text" placeholder={placeholder} name={name} {...register(name)}/>
            {errors[name] && <span className="error">{errors[name].message}</span>}
        </div>
    )
};

export default TextInput;
