import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { addPokemon } from '../features/Pokemons';
import * as yup from "yup";
import closeIcon from '../assets/images/close.png';
import Button from './Button';

const schema = yup.object({
    nome: yup.string().required("O Nome é obrigatório."),
    hp: yup.string().required("O HP é obrigatório."),
    peso: yup.string().required("O Peso é obrigatório."),
    altura: yup.string().required("A Altura é obrigatória."),
    habilidade1: yup.string().required("A Habilidade é obrigatória."),
    habilidade2: yup.string().required("A Habilidade é obrigatória."),
    habilidade3: yup.string().required("A Habilidade é obrigatória."),
    habilidade4: yup.string().required("A Habilidade é obrigatória."),
    defesa: yup.string().required("A Defesa é obrigatória."),
    ataque: yup.string().required("O Ataque é obrigatório."),
    defesaespecial: yup.string().required("A Desefa Especial é obrigatória."),
    ataqueespecial: yup.string().required("O Ataque Especial é obrigatório."),
    velocidade: yup.string().required("A Velocidade é obrigatória."),
  }).required();

const ModalNewPokemon = ({ open, close, initialValues = {} }) => {
    const [inputs, setInputs] = useState(initialValues);
    const onChangeHandler = useCallback(
        ({target:{name,value}}) => setInputs(state => ({ ...state, [name]:value }), [])
    );

    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });
    const onSubmit = data => console.log(data);

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
                                <label>Nome</label>
                                    <input type="text" placeholder="Nome" key="nome" {...register("nome")} onChange={onChangeHandler} value={inputs.key} />
                                <span>{errors.nome?.message}</span>
                                {console.log(errors)}
                            </div>

                            <div className="newModal__field">
                                <label>HP</label>
                                <input type="number" placeholder="HP" key="hp" {...register("hp")} onChange={onChangeHandler} value={inputs.key}/>
                                <span>{errors.hp?.message}</span>
                            </div>
                            <div className="newModal__field">
                                <label>Peso</label>
                                <input type="number" placeholder="Peso" key="peso" {...register("peso")} onChange={onChangeHandler} value={inputs.key}/>
                                <span>{errors.peso?.message}</span>
                            </div>
                            <div className="newModal__field">
                                <label>Altura</label>
                                <input type="number" placeholder="Altura" key="altura" {...register("altura")} onChange={onChangeHandler} value={inputs.key}/>
                                <span>{errors.altura?.message}</span>
                            </div>
                        </div>

                        <div className="newModal__labelField">
                            <div className="separator"></div>
                                <label className="label_title">Tipo</label>
                            <div className="separator"></div>
                        </div>
                            

                        <div className="newModal__formType">
                            <div className="newModal__field">
                                <select>
                                    <option value="0">Selecione o(s) tipo(s)</option>
                                </select>
                            </div>
                        </div>

                        <div className="newModal__labelField">
                            <div className="separator"></div>
                                <label className="label_title">Habilidades</label>
                            <div className="separator"></div>
                        </div>

                        <div className="newModal__formAbilities">
                            <div className="newModal__field">
                                <input type="text" placeholder="Habilidade 1" {...register("habilidade1")} />
                                <span className="abilityError">{errors.habilidade1?.message}</span>
                            </div>
                            <div className="newModal__field">
                                <input type="text" placeholder="Habilidade 2" {...register("habilidade2")} />
                                <span className="abilityError">{errors.habilidade2?.message}</span>
                            </div>
                            <div className="newModal__field">
                                <input type="text" placeholder="Habilidade 3" {...register("habilidade3")} />
                                <span className="abilityError">{errors.habilidade3?.message}</span>
                            </div>
                            <div className="newModal__field">
                                <input type="text" placeholder="Habilidade 4" {...register("habilidade4")} />
                                <span className="abilityError">{errors.habilidade4?.message}</span>
                            </div>
                        </div>

                        <div className="newModal__labelField">
                            <div className="separator"></div>
                                <label className="label_title">Estatísticas</label>
                            <div className="separator"></div>
                        </div>

                        <div className="newModal__formStatistics">
                            <div className="newModal__field">
                                <svg className="statistics" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5894 2.94199L9.83877 0.129214C9.63314 0.0439093 9.4127 0 9.19008 0C8.96745 0 8.74702 0.0439093 8.54138 0.129214L1.79073 2.94199C1.16137 3.20217 0.75 3.81746 0.75 4.49956C0.75 11.4788 4.77578 16.3027 8.53787 17.8708C8.95275 18.0431 9.42037 18.0431 9.83526 17.8708C12.8484 16.6156 17.6266 12.2804 17.6266 4.49956C17.6266 3.81746 17.2153 3.20217 16.5894 2.94199Z" fill="#2E3A59"/>
                                </svg>
                                <label>Defesa</label>
                                <input type="number" placeholder="00" {...register("defesa")} />
                                <span>{errors.defesa?.message}</span>
                            </div>
                            <div className="newModal__field">
                                <svg className="statistics" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0626 4.50004H8.12508V0.562505C8.12508 0.251721 7.87336 0 7.56257 0H6.43756C6.12678 0 5.87505 0.251721 5.87505 0.562505V4.50004H1.93752C1.00552 4.50004 0.25 5.25556 0.25 6.18756C0.25 7.11956 1.00552 7.87508 1.93752 7.87508C2.67123 7.87508 3.28929 7.40398 3.52167 6.75007H10.4785C10.7108 7.40398 11.3289 7.87508 12.0626 7.87508C12.9946 7.87508 13.7501 7.11956 13.7501 6.18756C13.7501 5.25556 12.9946 4.50004 12.0626 4.50004ZM4.75004 15.0766L6.53213 17.7495C6.75467 18.0835 7.24546 18.0835 7.46835 17.7495L9.25009 15.0766V7.87508H4.75004V15.0766Z" fill="#2E3A59"/>
                                </svg>
                                <label>Ataque</label>
                                <input type="number" placeholder="00" {...register("ataque")} />
                                <span>{errors.ataque?.message}</span>
                            </div>
                            <div className="newModal__field">
                                <svg className="statistics" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5894 2.94199L9.83877 0.129214C9.63314 0.0439093 9.4127 0 9.19008 0C8.96745 0 8.74702 0.0439093 8.54138 0.129214L1.79073 2.94199C1.16137 3.20217 0.75 3.81746 0.75 4.49956C0.75 11.4788 4.77578 16.3027 8.53787 17.8708C8.95275 18.0431 9.42037 18.0431 9.83526 17.8708C12.8484 16.6156 17.6266 12.2804 17.6266 4.49956C17.6266 3.81746 17.2153 3.20217 16.5894 2.94199Z" fill="#2E3A59"/>
                                </svg>
                                <label>Defesa especial</label>
                                <input type="number" placeholder="00" {...register("defesaespecial")} />
                                <span>{errors.defesaespecial?.message}</span>
                            </div>
                            <div className="newModal__field">
                                <svg className="statistics" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0626 4.50004H8.12508V0.562505C8.12508 0.251721 7.87336 0 7.56257 0H6.43756C6.12678 0 5.87505 0.251721 5.87505 0.562505V4.50004H1.93752C1.00552 4.50004 0.25 5.25556 0.25 6.18756C0.25 7.11956 1.00552 7.87508 1.93752 7.87508C2.67123 7.87508 3.28929 7.40398 3.52167 6.75007H10.4785C10.7108 7.40398 11.3289 7.87508 12.0626 7.87508C12.9946 7.87508 13.7501 7.11956 13.7501 6.18756C13.7501 5.25556 12.9946 4.50004 12.0626 4.50004ZM4.75004 15.0766L6.53213 17.7495C6.75467 18.0835 7.24546 18.0835 7.46835 17.7495L9.25009 15.0766V7.87508H4.75004V15.0766Z" fill="#2E3A59"/>
                                </svg>
                                <label>Ataque especial</label>
                                <input type="number" placeholder="00" {...register("ataqueespecial")} />
                                <span>{errors.ataqueespecial?.message}</span>
                            </div>
                            <div className="newModal__field">
                                <svg className="statistics" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0.25C4.02938 0.25 0 4.27938 0 9.25C0 10.9 0.445313 12.4456 1.22063 13.775C1.39594 14.0756 1.73 14.25 2.07812 14.25H15.9219C16.27 14.25 16.6041 14.0756 16.7794 13.775C17.5547 12.4456 18 10.9 18 9.25C18 4.27938 13.9706 0.25 9 0.25ZM14.1 5.70031L10.7078 10.2231C10.8894 10.5241 11 10.8728 11 11.25C11 11.6163 10.8944 11.9547 10.7225 12.25H7.2775C7.10563 11.9547 7 11.6163 7 11.25C7 10.1453 7.89531 9.25 9 9.25C9.17656 9.25 9.34437 9.28 9.5075 9.32312L12.9 4.79969C13.1494 4.46969 13.6188 4.40219 13.9503 4.64969C14.2813 4.89844 14.3488 5.36875 14.1 5.70031V5.70031Z" fill="#2E3A59"/>
                                </svg>
                                <label>Velocidade</label>
                                <input type="number" placeholder="00" {...register("velocidade")} />
                                <span>{errors.velocidade?.message}</span>
                            </div>
                        </div>
                    </div>
                    <div className="newModal__formCreate">
                        <Button 
                            type="submit" 
                            text="CRIAR POKEMON"
                            onClick={() => {dispatch(addPokemon(inputs))}} />
                    </div>
                </form>
                
            </div>
        </div>
        )}
    </>
    );
};

export default ModalNewPokemon;