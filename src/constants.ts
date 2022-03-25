import { dev } from '$app/env';

const isProduction = !dev;
export const basepath = isProduction ? '/poke' : '/';

interface IPath {
  path: string;
  title: string;
}

export const paths: IPath[] = [
  {
    path: basepath,
    title: 'Home'
  },
  {
    path: basepath + 'about',
    title: 'About'
  },
  {
    path: basepath + 'pokemons',
    title: 'Pokemons'
  }
];
