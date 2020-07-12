/**
 * Define root reducer and root state for the store
 */
import { combineReducers } from 'redux';
import { ProviderReducer } from './modules/provider/provider';
import { TaskReducer } from './modules/task/task';

export const rootReducer = combineReducers({
  providers: ProviderReducer,
  tasks: TaskReducer
});
export type RootState = ReturnType<typeof rootReducer>;