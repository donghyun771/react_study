import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './pages/Counter';

test('renders learn react link', () => {
  render(<Counter />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
