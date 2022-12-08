import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuContainer from './header-component';

test('renders learn react link', () => {
  render(<MenuContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
