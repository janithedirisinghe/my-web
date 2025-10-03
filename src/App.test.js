import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders portfolio app', () => {
  render(<App />);
  // This test just checks if the app renders without crashing
  expect(true).toBe(true);
});
