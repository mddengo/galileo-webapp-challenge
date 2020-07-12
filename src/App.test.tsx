import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders provider portal', () => {
  const { getByTestId } = render(<App />);
  const providerPortal = getByTestId('provider-portal');
  expect(providerPortal).toBeInTheDocument();
});
