import { Task } from './task';

export function typedAction<T extends string>(type: T): { type: T };

export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T; payload: P };

export function typedAction(type: string, payload?: any) {
  return { type, payload };
}

export const LOAD_TASKS_ACTION = 'tasksLoad';

export const load = (tasks: Task[]) => {
  return typedAction(LOAD_TASKS_ACTION, tasks);
};
