import React, { useState, useEffect } from 'react';
import PokemonCard from './Pokemon/PokemonCard';
import SearchBar from './Pokemon/SearchBar';
import './index.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
        const data = await response.json();
        setPokemons(data.results);
        setFilteredPokemons(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPokemons();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term === '') {
      setFilteredPokemons(pokemons);
    } else {
      const filtered = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredPokemons(filtered);
    }
  };

  return (
    <div>
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <div className="pokemon-grid">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default App;