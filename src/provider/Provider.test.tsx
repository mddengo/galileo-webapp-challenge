import React from 'react';
import { render } from '@testing-library/react';
import { ProviderPortal } from './Provider';

test('renders search component', () => {
  const { getByTestId } = render(<ProviderPortal />);
  const searchBar = getByTestId('provider-search-bar');
  expect(searchBar).toBeInTheDocument();
});

test('renders provider information section', () => {
  const { getByTestId } = render(<ProviderPortal />);
  const providerInfoSection = getByTestId('provider-information');
  expect(providerInfoSection).toBeInTheDocument();
});