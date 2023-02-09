import React, { } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import closeIcon from '../assets/images/close.png';
import setPhoto from '../assets/images/camera.png';
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

const ModalNewPokemon = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });
    const onSubmit = data => console.log(data);

return (
    <div className="newModal">
        <div className="newModal__content">

            <img className="newModal__close" src={closeIcon} alt="Fechar"/>
            
            <form onSubmit={handleSubmit(onSubmit)} className="newModal__form">
                <div className="newModal__formPhoto">
                    <img src={setPhoto} alt="Escolha uma foto"/>
                </div>

                <div className="newModal__formContent">
                    <div className="newModal__formPokemon">
                        <div className="newModal__field">
                            <label>Nome</label>
                            <input type="text" placeholder="Nome" {...register("nome")} />
                            <span>{errors.nome?.message}</span>
                        </div>

                        <div className="newModal__field">
                            <label>HP</label>
                            <input type="number" placeholder="HP" {...register("hp")} />
                            <span>{errors.hp?.message}</span>
                        </div>
                        <div className="newModal__field">
                            <label>Peso</label>
                            <input type="number" placeholder="Peso" {...register("peso")} />
                            <span>{errors.peso?.message}</span>
                        </div>
                        <div className="newModal__field">
                            <label>Altura</label>
                            <input type="number" placeholder="Altura" {...register("altura")} />
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

                    <div className="newModal__formHabilities">
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

                    <div className="newModal__formStatics">
                        <div className="newModal__field">
                            <label>Defesa</label>
                            <input type="number" placeholder="00" {...register("defesa")} />
                            <span>{errors.defesa?.message}</span>
                        </div>
                        <div className="newModal__field">
                            <label>Ataque</label>
                            <input type="number" placeholder="00" {...register("ataque")} />
                            <span>{errors.ataque?.message}</span>
                        </div>
                        <div className="newModal__field">
                            <label>Defesa especial</label>
                            <input type="number" placeholder="00" {...register("defesaespecial")} />
                            <span>{errors.defesaespecial?.message}</span>
                        </div>
                        <div className="newModal__field">
                            <label>Ataque especial</label>
                            <input type="number" placeholder="00" {...register("ataqueespecial")} />
                            <span>{errors.ataqueespecial?.message}</span>
                        </div>
                        <div className="newModal__field">
                            <label>Velocidade</label>
                            <input type="number" placeholder="00" {...register("velocidade")} />
                            <span>{errors.velocidade?.message}</span>
                        </div>
                    </div>
                </div>
                <div className="newModal__formCreate">
                    <Button type="submit" text="CRIAR POKEMON" />
                </div>
            </form>
            
        </div>
    </div>
    );
};

export default ModalNewPokemon;