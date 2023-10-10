import React, { useEffect } from 'react';
import '../components/PokemonBattle.css';
import SearchInput from '../components/SearchInput';
import DescriptionCard from '../PokemonDetails/DescriptionCard'
import AbilitiesCard from "../PokemonDetails/AbilitiesCard";
import { getPokemons, URL } from "../api/PokemonApi";
import { extractData } from "../Helper/extractData";
import { useDispatch } from "react-redux";
import * as types from "../redux/actionType";



export default function PokemonBattle() {
    const dispatch = useDispatch();
  // intialaze the pokemon state to the best pokemon ever
  useEffect(() => {
    getPokemons(`${URL}/pikachu`).then(({ data }) => {
      dispatch({ type: types.SET_POKEMON, payload: extractData(data) });
    });
  }, [dispatch]);
  return (
    <section id="pokebattle" >
        <div className='container'>
            <h1 className="section-title">Pokemon Api</h1>
            <SearchInput/>
            <div className='PokemonDetails'>
            <DescriptionCard />
            <AbilitiesCard />
            </div>
        </div>

    </section>
    
  )
}
