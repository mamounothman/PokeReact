import  PokemonDetails  from "../../app/components/pokemon/pokemonDetails";
import { render, screen, userEvent, waitFor } from "../utils/test-utils";
import { pokemon } from "../mocks/pokemonData";

describe("PokemonDetails", () => {
    it("Render Pokemon details", async () => {
        const {container } = render(<PokemonDetails pokemon={pokemon} />);

        const heightText = await container.getElementsByClassName('height')[0].textContent;
        expect(heightText).toBe("70 cm");

        const weightText = await container.getElementsByClassName('weight')[0].textContent;
        expect(weightText).toBe("6.9 kg");

        const nameText = await container.getElementsByClassName('name')[0].textContent;
        expect(nameText).toBe("bulbasaur");

    });
});