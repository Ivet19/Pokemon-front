export type Pokemon = {
  id: string;
  name: string;
  pokedexPosition: string;
  imageUrl: string;
  imageAlt: string;
  isCaptured: boolean;
  types: { type: { name: string } }[];
};
