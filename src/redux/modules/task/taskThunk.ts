/**
 * Thunk for loading the tasks
 */
import fetch from 'cross-fetch';
import { Dispatch, AnyAction } from 'redux';
import { load } from './taskActions';
import { GET_TASKS_URL } from '../../../helper/constants';

export const loadTasks = () => { //async (dispatch: Dispatch<AnyAction>) => {
    return async (dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await fetch(GET_TASKS_URL);
        const tasks = await response.json();
        dispatch(
                load(
                    tasks
                )
            );
    } catch (err) {
        console.log(err);
    }
}
}