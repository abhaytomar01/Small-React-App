import React, { useState, useEffect } from 'react';
// import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchPokemonImage = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/${pokemon.name}');
        const data = await response.json();
        setImage(data.sprites.front_default);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchPokemonImage();
  }, [pokemon.name]);

  return (  
    <div className='container flex-col flex-wrap text-center items-center'>
    <div className="pokemon-card grid grid-flow-row top-8 ml-5 mb-5 w-80 p-4 bg-zinc-800 rounded-lg">
      <div className='w-full h-72 rounded-lg bg-zinc-700 overflow-hidden'>
        <img className='w-full h-full object-cover object-center' src={image} alt={pokemon.name} />
      </div>
      <h3 className='mt-2 ml-1 text-zinc-400 text-xl tracking-tighter'>{pokemon.name}</h3>
    </div>
    </div>
  );
};

export default PokemonCard;