import { useState } from 'react'

import PokemonDetails from './components/pokemon/pokemonDetails';
import PokemonsList from './components/pokemon/pokemonsList';

import './App.css'

function App() {
  const [selectedPokemon, selectPokemon] = useState<any>(undefined);
  return (
    <>
      <main>
        {selectedPokemon ? (
          <>
            <PokemonDetails pokemon={selectedPokemon} />
            <br />
            <button onClick={() => selectPokemon(undefined)}>back</button>
          </>
        ) : (
          <PokemonsList onPokemonSelected={selectPokemon} />
        )}
      </main>
    </>
  )
}

export default App
