import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/dnlml/poke.git', // Update to point to your repository
    user: {
      name: 'Daniele Meli', // update to use your name
      email: 'danielemeli86@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  (err) => {
    console.log(err);
  }
);
