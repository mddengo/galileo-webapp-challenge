/**
 * Selectors for provider
 */
import { RootState } from '../../../redux';

export const getTasks = (state: RootState) => state.tasks.tasks;