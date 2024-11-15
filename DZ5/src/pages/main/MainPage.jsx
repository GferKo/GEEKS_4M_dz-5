import React, {useEffect, useState} from 'react';
import axios from "axios";
import PokemonCard from "../../components/PokemonCard/PokemonCard.jsx";
import styles from "./MainPage.module.css";

const getPokemons = async () => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
        return response.data
    }
    catch (error) {
        return Promise.reject(error.message);
    }
}

const MainPage = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons()
            .then(data => setPokemons(data.results))
    }, [])

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h2>Pokemon</h2>
            </div>
            <div className={styles.pokemonList}>
                {pokemons.map((pokemon, index) => (
                    <PokemonCard
                        pokemon={pokemon}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default MainPage;