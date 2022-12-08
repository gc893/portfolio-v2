import React from 'react';
import { render, screen } from '@testing-library/react';
import ContentContainer from './content-container';

test('renders learn react link', () => {
  render(<ContentContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
