import AnimalFarm from 'assets/books/animal-farm.jpeg';
import Hooked from 'assets/books/hooked.jpeg';
import ShoeDog from 'assets/books/shoe-dog.jpeg';

import { BookProps } from './Book';

export const books: BookProps[] = [
  {
    title: 'Shoe Dog',
    subtitle: 'A Memoir by the Creator of Nike',
    author: 'Phil Knight',
    description:
      'The full story of Nike, from its start as a sketch on a napkin to its evolution into one of the world’s most iconic brands.',
    cover: ShoeDog,
    status: 'Finished',
    dateFinished: '11/01/2023',
    hasNotes: false,
    link: 'https://amzn.to/3Hxy5U2',
  },
  {
    title: 'Hooked',
    subtitle: 'How to Build Habit-Forming Products',
    author: 'Nir Eyal',
    description:
      'Hooked is a how-to guide for building habit-forming products. Nir Eyal explains the secrets behind what makes us engage with certain products out of sheer habit.',
    cover: Hooked,
    status: 'Currently Reading',
    hasNotes: false,
    link: 'https://amzn.to/3wBpRnQ',
  },
  {
    title: 'Animal Farm',
    subtitle: 'A Fairy Story',
    author: 'George Orwell',
    description:
      'Animal Farm is an allegorical novella by George Orwell, first published in England on 17 August 1945. According to Orwell, the book reflects events leading up to the Russian Revolution of 1917 and then on into the Stalinist era of the Soviet Union.',
    cover: AnimalFarm,
    status: 'Currently Reading',
    hasNotes: false,
    link: 'https://amzn.to/407Ho4h',
  },
];
