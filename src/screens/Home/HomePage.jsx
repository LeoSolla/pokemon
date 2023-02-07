import React from 'react';
import pokemonLogo from '../../assets/images/pokemonLogo.png';

const HomePage = () => (
    <div className="home">
        <div className="home__logo">
            <img src={pokemonLogo} alt="Pokemon" />
        </div>
        <div className="home__start">
            start
        </div>
    </div>
);

export default HomePage;
