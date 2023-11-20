import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from './App';

test('default', () => {
  expect(true).toBe(true);
});

test('Render', () => {
  render(<App />);
  expect(true).toBeTruthy();
});
