import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from '../App';
import Projecten from './Projecten';

test('should render projects', () => {
  const { getByText } = render(
  <App>
    <Projecten/>
  </App>);
  const element = getByText(/Man bijt hond xl/i);
  expect(element).toBeInTheDocument();
});

