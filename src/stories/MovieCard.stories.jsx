import React from 'react';

import { MovieCard } from '../components/movieCard';

export default {
  title: 'Example/MovieCard',
  component: MovieCard,
  argTypes: {
    handleClick: { action: 'handle click' },
    handleEdit: { action: 'handle edit' },
    handleDelete: { action: 'handle delete' },
  },
};

const Template = (args) => <MovieCard {...args} />;

const movie = {
  banner: 'http://placehold.jp/250x300.png',
  description: 'B2B',
  duration: 'duration 2',
  genre: 'drama',
  id: '2',
  overview: 'payment',
  runtime: 'navigating clicks-and-mortar',
  title: 'navigating',
  url: 'https://rosina.com',
  year: '2020-06-13T01:37:03.885Z',
};

export const MovieCardExample = Template.bind({});
MovieCardExample.args = {
  movie,
};
