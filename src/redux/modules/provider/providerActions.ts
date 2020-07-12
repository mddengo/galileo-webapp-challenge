import {Provider} from './provider';

export function typedAction<T extends string>(type: T): { type: T };

export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T; payload: P };

export function typedAction(type: string, payload?: any) {
  return { type, payload };
}

export const LOAD_PROVIDERS_ACTION = 'providersLoad';

export const loadProviders = (providers: Provider[]) => {
  return typedAction(LOAD_PROVIDERS_ACTION, providers);
};
