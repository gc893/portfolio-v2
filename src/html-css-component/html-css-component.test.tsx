import React from 'react';
import { render, screen } from '@testing-library/react';
import HtmlCssComponent from './html-css-component';

test('renders learn react link', () => {
  render(<HtmlCssComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
