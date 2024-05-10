import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL
    }),
    endpoints: (builder) => ({
        pokemonsList: builder.query<PokemonlistingData, void>({
            query() {
                return {
                    url:"pokemon",
                    params: {
                        limit:10
                    }
                };
            }
        }),
        pokemonDetail: builder.query<PokemonDetailsData, {name: string}>({
            query: ({name}) => `pokemon/${name}` 
        }),
        pokemonsListWithDetails: builder.query<Array<PokemonDetailsData>, void>({
            async queryFn() {
                
                const result = await fetch(import.meta.env.VITE_API_URL + "pokemon?limit=10");
                
                if(!result.ok) {
                    return { error: "something went wrong"}
                }

                const data = await result.json();
                const pokemonsUrls = data.results.map((pokemon) => pokemon.url);
                const pokemons = await Promise.all(pokemonsUrls.map(async url => {
                    const resp = await fetch(url);
                    return resp.json();
                }));

                return { data: pokemons };
            }
        })
    })
})

export const {
    usePokemonsListQuery,
    usePokemonDetailQuery,
    usePokemonsListWithDetailsQuery
} = apiSlice