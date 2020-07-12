import { load, LOAD_TASKS_ACTION } from './taskActions';

export type Task = {
    task_id: string,
    owner: string,
    priority: number
}

export type TaskForProvider = {
    [provider_id: string]: Task[]
}

type TaskAction = ReturnType<typeof load>;

type TaskState = {
    tasks: TaskForProvider;
};
const initialState: TaskState = { tasks: {} };

export function TaskReducer(
    state = initialState,
    action: TaskAction
): TaskState {
    const stateCopy = { ...state };
    switch (action.type) {
        case LOAD_TASKS_ACTION:
            console.log('in reducer');
            if (action.payload) {
                const tasks = action.payload;
                tasks.forEach((task: Task) => {
                    if (!(task.owner in stateCopy.tasks)) {
                        stateCopy.tasks[task.owner] = [];
                    }
                    stateCopy.tasks[task.owner].push(task);
                });
            }
            console.log(stateCopy);
            return stateCopy;
        default:
            return state;
    }
}