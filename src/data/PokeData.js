import getRandomInt from '../helpers/getRandomInt';

const PokeData = (data) => {
    const randomId = getRandomInt(1,807);
    return {
        id: randomId,
        name: data.name,
        hp: data.hp,
        height: data.height,
        weight: data.weight,
        ability1: data.ability1,
        ability2: data.ability2,
        ability3: data.ability3,
        ability4: data.ability4,
        type: data.type,
        attack: data.attack,
        defense: data.defense,
        specialattack: data.specialattack,
        specialdefense: data.specialdefense,
        velocity: data.velocity
      };
  };
  
  export default PokeData;