import getRandomInt from '../helpers/getRandomInt';

const randomId = getRandomInt(1,807);

const PokeData = (data) => {
    return {
        id: randomId,
        name: data.name,
        hp: data.hp,
        height: data.height,
        weight: data.weight,
      };
  }
  
  export default PokeData;