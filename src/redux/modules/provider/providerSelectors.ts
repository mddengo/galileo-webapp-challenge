/**
 * Selectors for provider
 */
import { RootState } from '../../../redux';

export const getProviders = (state: RootState) => state.providers.providers;