import { writable } from 'svelte/store';

export const pokemonToBeShown = writable(5);
export const pokemonStore = writable([]);
