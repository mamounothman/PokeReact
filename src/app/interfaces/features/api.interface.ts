interface PokemonlistingData {
    count: number;
    results:Array<{
        name: string;
        url: string;
    }>
}

interface PokemonDetailsData {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: Array<{
        slot: number;
        type: {
            name: string;
            url: string;
        }
    }>;
    sprites: {
        front_default: string
    }
}