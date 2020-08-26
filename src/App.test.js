import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';

test('should see homepage', () => {
  const { getByText } = render(<App />);
  const element = getByText(/wij zijn een digital design agency/i);
  expect(element).toBeInTheDocument();
});

