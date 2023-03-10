import React, { } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { addPokemon } from '../features/Pokemons';
import { pokeTypes } from '../data/PokeTypes';
import NumberInput from './NumberInput';
import * as yup from "yup";
import closeIcon from '../assets/images/close.png';
import Button from './Button';
import PokeData from '../data/PokeData';
import TextInput from './TextInput';
import Select from 'react-select';

const schema = yup.object({
    name: yup.string().required("O Nome é obrigatório."),
    hp: yup.string().required("O HP é obrigatório."),
    height: yup.string().required("O Peso é obrigatório."),
    weight: yup.string().required("A Altura é obrigatória."),
    ability1: yup.string().required("A Habilidade é obrigatória."),
    ability2: yup.string().required("A Habilidade é obrigatória."),
    ability3: yup.string().required("A Habilidade é obrigatória."),
    ability4: yup.string().required("A Habilidade é obrigatória."),
    defense: yup.string().required("A Defesa é obrigatória."),
    attack: yup.string().required("O Ataque é obrigatório."),
    specialdefense: yup.string().required("A Desefa Especial é obrigatória."),
    specialattack: yup.string().required("O Ataque Especial é obrigatório."),
    velocity: yup.string().required("A Velocidade é obrigatória."),
  }).required();

const ModalNewPokemon = ({ open, close, isEdited }) => {
    const dispatch = useDispatch();
    const { control, register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const options = pokeTypes.map((type) => ({
        label: type.name,
        value: type.id,
        name: type.value,
      }));
    
    const onSubmit = (data) => {
        const newPokemon = PokeData(data);
        dispatch(addPokemon(newPokemon));
        reset();
        close();
      };

return (
    <>
        {open && (
        <div className="newModal">
            <div className="newModal__content">

                <img className="newModal__close" src={closeIcon} alt="Fechar" onClick={close}/>
                
                <form onSubmit={handleSubmit(onSubmit)} className="newModal__form">
                    <div className="newModal__formPhoto">
                        <svg width="97" height="91" viewBox="0 0 97 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M41 39.05C37.6093 39.05 34.85 41.8093 34.85 45.2C34.85 48.5907 37.6093 51.35 41 51.35C44.3907 51.35 47.15 48.5907 47.15 45.2C47.15 41.8093 44.3907 39.05 41 39.05ZM41 59.55C33.087 59.55 26.65 53.113 26.65 45.2C26.65 37.287 33.087 30.85 41 30.85C48.913 30.85 55.35 37.287 55.35 45.2C55.35 53.113 48.913 59.55 41 59.55ZM32.8 10.35C32.8 9.21838 33.7225 8.29998 34.85 8.29998H47.15C48.2775 8.29998 49.2 9.21838 49.2 10.35V16.5H32.8V10.35ZM69.7 16.5H57.4V10.35C57.4 4.70018 52.8039 0.0999756 47.15 0.0999756H34.85C29.1961 0.0999756 24.6 4.70018 24.6 10.35V16.5H12.3C5.5186 16.5 0 22.0186 0 28.8V61.6C0 68.3814 5.5186 73.9 12.3 73.9H69.7C76.4814 73.9 82 68.3814 82 61.6V28.8C82 22.0186 76.4814 16.5 69.7 16.5Z" fill="#00D68F"/>
                        <mask id="path-2-outside-1_9858_167" maskUnits="userSpaceOnUse" x="57.333" y="51.3334" width="40" height="40" fill="black">
                            <rect fill="white" x="57.333" y="51.3334" width="40" height="40"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M76.9997 54.3334C67.8097 54.3334 60.333 61.81 60.333 71C60.333 80.19 67.8097 87.6667 76.9997 87.6667C86.1897 87.6667 93.6663 80.19 93.6663 71C93.6663 61.81 86.1897 54.3334 76.9997 54.3334"/>
                        </mask>
                            <path fillRule="evenodd" clipRule="evenodd" d="M76.9997 54.3334C67.8097 54.3334 60.333 61.81 60.333 71C60.333 80.19 67.8097 87.6667 76.9997 87.6667C86.1897 87.6667 93.6663 80.19 93.6663 71C93.6663 61.81 86.1897 54.3334 76.9997 54.3334" fill="white"/>
                            <path d="M76.9997 51.3334C66.1528 51.3334 57.333 60.1532 57.333 71H63.333C63.333 63.4669 69.4665 57.3334 76.9997 57.3334V51.3334ZM57.333 71C57.333 81.8469 66.1528 90.6667 76.9997 90.6667V84.6667C69.4665 84.6667 63.333 78.5332 63.333 71H57.333ZM76.9997 90.6667C87.8465 90.6667 96.6663 81.8469 96.6663 71H90.6663C90.6663 78.5332 84.5328 84.6667 76.9997 84.6667V90.6667ZM96.6663 71C96.6663 60.1532 87.8465 51.3334 76.9997 51.3334V57.3334C84.5328 57.3334 90.6663 63.4669 90.6663 71H96.6663Z" fill="white" mask="url(#path-2-outside-1_9858_167)"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M81.9997 72.6667H78.6663V76C78.6663 76.9167 77.9163 77.6667 76.9997 77.6667C76.083 77.6667 75.333 76.9167 75.333 76V72.6667H71.9997C71.083 72.6667 70.333 71.9167 70.333 71C70.333 70.0834 71.083 69.3334 71.9997 69.3334H75.333V66C75.333 65.0834 76.083 64.3334 76.9997 64.3334C77.9163 64.3334 78.6663 65.0834 78.6663 66V69.3334H81.9997C82.9163 69.3334 83.6663 70.0834 83.6663 71C83.6663 71.9167 82.9163 72.6667 81.9997 72.6667ZM76.9997 54.3334C67.8097 54.3334 60.333 61.81 60.333 71C60.333 80.19 67.8097 87.6667 76.9997 87.6667C86.1897 87.6667 93.6663 80.19 93.6663 71C93.6663 61.81 86.1897 54.3334 76.9997 54.3334Z" fill="#FF3D71"/>
                        </svg>
                    </div>

                    <div className="newModal__formContent">
                        <div className="newModal__formPokemon">
                            <div className="newModal__field">
                                <TextInput 
                                    name="name" 
                                    placeholder="Nome" 
                                    label="Nome" 
                                    register={register} 
                                    errors={errors}
                                />
                            </div>                            
                            <div className="newModal__field">
                                <NumberInput 
                                    name="hp" 
                                    placeholder="HP" 
                                    label="Hp" 
                                    register={register} 
                                    errors={errors}
                                />
                            </div>
                            <div className="newModal__field">
                                <NumberInput 
                                    name="weight" 
                                    placeholder="Peso" 
                                    label="Peso" 
                                    suffix="Kg" 
                                    register={register} 
                                    errors={errors}
                                />
                            </div>
                            <div className="newModal__field">
                                <NumberInput 
                                    name="height" 
                                    placeholder="Altura" 
                                    label="Altura" 
                                    suffix="Cm" 
                                    register={register} 
                                    errors={errors}
                                />
                            </div>
                        </div>

                        <div className="newModal__labelField">
                            <div className="separator"></div>
                                <label className="label_title">Tipo</label>
                            <div className="separator"></div>
                        </div>
                            

                        <div className="newModal__formType">
                            <div className="newModal__field">
                                <Controller
                                    name="type"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            classNamePrefix='filter'
                                            placeholder="Selecione o(s) tipo(s)"
                                            {...field}
                                            isMulti
                                            options={options}
                                        />
                                    )}
                                />
                            </div>
                        </div>

                        <div className="newModal__labelField">
                            <div className="separator"></div>
                                <label className="label_title">Habilidades</label>
                            <div className="separator"></div>
                        </div>

                        <div className="newModal__formAbilities">
                            <div className="newModal__field">
                                <TextInput 
                                    name="ability1" 
                                    placeholder="Habilidade 1" 
                                    register={register} 
                                    errors={errors}
                                />
                            </div>
                            <div className="newModal__field">
                                <TextInput 
                                    name="ability2" 
                                    placeholder="Habilidade 2" 
                                    register={register} 
                                    errors={errors}
                                />
                            </div>
                            <div className="newModal__field">
                                <TextInput 
                                    name="ability3" 
                                    placeholder="Habilidade 3" 
                                    register={register} 
                                    errors={errors}
                                />
                            </div>
                            <div className="newModal__field">
                                <TextInput 
                                    name="ability4" 
                                    placeholder="Habilidade 4" 
                                    register={register} 
                                    errors={errors}
                                />
                            </div>
                        </div>

                        <div className="newModal__labelField">
                            <div className="separator"></div>
                                <label className="label_title">Estatísticas</label>
                            <div className="separator"></div>
                        </div>

                        <div className="newModal__formStatistics">
                            <div className="newModal__field">
                                <NumberInput 
                                    name="defense" 
                                    placeholder="00" 
                                    label="Defesa" 
                                    register={register} 
                                    errors={errors}
                                />
                            </div>
                            <div className="newModal__field">
                                <NumberInput 
                                    name="attack" 
                                    placeholder="00" 
                                    label="Ataque" 
                                    register={register} 
                                    errors={errors}
                                />
                            </div>
                            <div className="newModal__field">
                                <NumberInput 
                                    name="specialdefense" 
                                    placeholder="00" 
                                    label="Defesa especial" 
                                    register={register} 
                                    errors={errors}
                                />
                            </div>
                            <div className="newModal__field">
                                <NumberInput 
                                    name="specialattack" 
                                    placeholder="00" 
                                    label="Ataque especial" 
                                    register={register} 
                                    errors={errors}
                                />
                            </div>
                            <div className="newModal__field">
                                <NumberInput 
                                    name="velocity" 
                                    placeholder="00" 
                                    label="Velocidade" 
                                    register={register} 
                                    errors={errors}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="newModal__formCreate">
                        <Button 
                            type="submit" 
                            text="CRIAR POKEMON"
                            isEdited={true}
                            disabled={errors !== 0}
                        />
                    </div>
                </form>
                
            </div>
        </div>
        )}
    </>
    );
};

export default ModalNewPokemon;