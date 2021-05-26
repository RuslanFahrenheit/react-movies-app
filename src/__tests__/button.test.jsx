import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import { Button } from '../components/button';

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

it('should render a button', () => {
  act(() => {
    render(<Button>Button</Button>, container);
  });

  expect(pretty(container.innerHTML)).toMatchSnapshot();

  act(() => {
    render(
      <Button
        type="submit"
        additionalClass="test-class"
        expanded={true}
        variant="secondary"
        onClick={() => {
        }}
      >
        Submit Button
      </Button>,
      container,
    );
  });

  expect(pretty(container.innerHTML)).toMatchSnapshot();

  act(() => {
    render(<Button component="span">Link</Button>, container);
  });

  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
