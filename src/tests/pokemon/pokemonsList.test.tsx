import { HttpResponse, http } from "msw";
import  PokemonsList  from "../../app/components/pokemon/pokemonsList";
import { server } from "../mocks/server";
import { render, screen, userEvent, waitFor } from "../utils/test-utils";

describe("PokemonsList", () => {

    it("Display PokemonsList component on API success", async () => {
        render(<PokemonsList onPokemonSelected={undefined} />);

        const text = await screen.findByText('bulbasaur');
        expect(text).toBeInTheDocument();

        const pokemonsListItems = await screen.queryAllByRole('listitem');
        expect(pokemonsListItems).toHaveLength(1);

    });

    it("Display 'Somthing went wrong' messgae on API failed", async () => {
        server.use(
            http.get(import.meta.env.VITE_API_URL + "pokemon?limit=10", () => {
                return HttpResponse(null, {status: 500});
            })
        );
        render(<PokemonsList onPokemonSelected={undefined} />);

        const text = await screen.findByText('something went wrong');
        expect(text).toBeInTheDocument();
    });

    it("check PokemonsList item selected", async () => {
        const user = userEvent.setup();
        const onPokemonSelectedMock = vi.fn();
        render(<PokemonsList onPokemonSelected={onPokemonSelectedMock} />);
        expect(onPokemonSelectedMock).not.toHaveBeenCalled();

        const pokemonListItemClick = await screen.findByRole('listitem');

        await user.click(pokemonListItemClick);

        await waitFor(() => {
            expect(onPokemonSelectedMock).toHaveBeenCalledTimes(1);
        });
    });

});