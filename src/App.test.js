import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders learn react header', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /^learn react$/i });
  expect(heading).toBeInTheDocument();
});
