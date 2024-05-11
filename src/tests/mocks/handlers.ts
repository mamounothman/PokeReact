import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(
    'https://pokeapi.co/api/v2/pokemon',
    () => {
      return HttpResponse.json({
        count: 1302,
        next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
        previous: null,
        results: [
          { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        ],
      });
    },
    { status: 200 },
  ),
  http.get(
    'https://pokeapi.co/api/v2/pokemon/1',
    () => {
      return HttpResponse.json({
        name: 'bulbasaur',
        weight: 69,
        height: 7,
        sprites: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        },
        types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
      });
    },
    { status: 200 },
  ),
];
