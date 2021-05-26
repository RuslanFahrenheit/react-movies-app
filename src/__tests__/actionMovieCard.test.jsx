import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import { ActionMovieCard } from '../components/actionMovieCard';

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
      <ActionMovieCard
        form={{}}
        submitBtnText="submit"
        cancelBtnText="reset"
        handleSubmit={() => {}}
        handleCancel={() => {}}
      />,
      container,
    );
  });

  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
