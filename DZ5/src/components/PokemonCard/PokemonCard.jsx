import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles from "./PokemonCard.module.css";

const getPokemonData = async (url) => {
    try {
        const response = await axios.get(url)
        return response.data
    }
    catch (error) {
        return Promise.reject(error);
    }
}

const PokemonCard = (props) => {
    const [pokemonData, setPokemonData] = useState(null)

    const {
        pokemon
    } = props

    useEffect(() => {
        const url = pokemon.url
        getPokemonData(url)
            .then(data => setPokemonData(data))
    }, [])

    return (
        <div className={styles.pokemonCard}>
            <div className={styles.pokeInfo}>
                <img src={pokemonData?.sprites?.other?.dream_world?.front_default} alt="pokemonData"/>
                <h3>{pokemon.name}</h3>
            </div>
            <button>
                Подробнее
            </button>
        </div>
    );
};

export default PokemonCard;