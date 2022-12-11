import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMeComponent from './about-me-component';

test('renders learn react link', () => {
  render(<AboutMeComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
