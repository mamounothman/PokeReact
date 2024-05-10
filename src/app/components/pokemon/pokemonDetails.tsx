function PokemonDetails( {pokemon} : PokemonDetailsData) {

    return (
        <>
            <header className="header">
                <h1>{pokemon.name}</h1>
            </header>
            <main>
                <article>
                    
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <ul className="list">
                        <li className="list-item p-item">
                            <div className="d-flex justify-content">
                                <label>Name </label>
                                <div>{pokemon.name}</div>
                            </div>
                        </li>
                        <li className="list-item p-item">
                            <div className="d-flex justify-content">
                                <label>Height</label>
                                <div>{pokemon.height * 10} cm</div>
                            </div>
                        </li>
                        <li className="list-item p-item">
                            <div className="d-flex justify-content">
                                <label>Weight</label>
                                <div>{pokemon.weight * 0.1 } kg</div>
                            </div>
                            
                        </li>
                        <li className="list-item p-item">
                            <div className="d-flex justify-content">
                                <label>Types</label>
                                <div>{pokemon.types.map((item) => item.type.name + " ")}</div>
                            </div>
                        </li>
                    </ul>
                </article>
            </main>
        </>
    );
}

export default PokemonDetails
  