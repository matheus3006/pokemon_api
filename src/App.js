import React ,{useState, useEffect }from 'react';
import pokemonList from './PokemonList';
import axios from 'axios'
function App() {
  const const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    return () => {
      axios.get("https://pokeapi.co/api/v2/pokemon").then(res=>{
        setPokemon(res.data.results.map(p=> p.name)); 
      });
       
    };
  }, [])
  

  return (
   <pokemonList pokemon={pokemon}/>
   
  );
}

export default App;
