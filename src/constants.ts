interface IPath {
  path: string;
  title: string;
}

export const paths: IPath[] = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/about',
    title: 'About'
  },
  {
    path: '/pokemon',
    title: 'Pokemon'
  }
];
