/**
 * Constants for the web app
 */
import { Action } from 'redux';
import { RootState } from '../redux';
import { ThunkAction } from 'redux-thunk';
export const GET_PROVIDERS_URL = 'https://testapi.io/api/akirayoglu/0/reference/getDoctors';
export const GET_TASKS_URL = 'https://testapi.io/api/akirayoglu/0/tasks/getTasks';
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>