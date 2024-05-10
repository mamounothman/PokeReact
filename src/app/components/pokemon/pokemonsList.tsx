import { usePokemonsListWithDetailsQuery } from "../../features/api/apiSlice";

function PokemonsList({ onPokemonSelected }: onPokemonSelectedProps) {
    const {data, isError, isLoading, isUninitialized} = usePokemonsListWithDetailsQuery();
    
    if(isError || isUninitialized) return "something went wrong";

    if(isLoading) return "loading...";

    return (
        <>
            <header className="header">
                <h1>PokeReact</h1>
            </header>
            <main>
                <article>
                    
                    <ul className="list">
                        {data.map((pokemon) => (
                            <li key={pokemon.name} className="list-item" onClick={() => onPokemonSelected(pokemon)}>
                                <div className="d-flex justify-content">
                                    <div>
                                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                    </div>
                                    <div>
                                        <a href="#" role="button" className="but-main">
                                            {pokemon.name}
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </article>
            </main>
        </>
    );
  }

export default PokemonsList