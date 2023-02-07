import React from 'react';
import { useHistory } from 'react-router-dom';
import pokemonLogo from '../../assets/images/pokemonLogo.png';

const HomePage = () => {
    const history = useHistory();
    
    return (
        <div className="home">
            <div className="home__logo">
                <img src={pokemonLogo} alt="Pokemon" />
            </div>
            <div className="home__start" onClick={() => history.push('/map')}>
                start
            </div>
        </div>
    );
};

export default HomePage;
