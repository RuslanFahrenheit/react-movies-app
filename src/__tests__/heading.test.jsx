import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import { Heading } from '../components/heading';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should render a heading', () => {
  act(() => {
    render(
      <Heading
        title="add movie"
        level="h1"
      />,
      container,
    );
  });

  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
