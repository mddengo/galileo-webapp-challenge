/**
 * Thunk for loading the providers
 */
import { Dispatch, AnyAction } from 'redux';
import fetch from 'cross-fetch';
import { loadProviders } from './providerActions';
import { GET_PROVIDERS_URL } from '../../../constants';

export const loadAllProviders = () => { //async () => {
    return async (dispatch: Dispatch<AnyAction>) => {
        try {
            const response = await fetch(GET_PROVIDERS_URL);
            const providers = await response.json();
            dispatch(
                loadProviders(
                    providers
                )
            );
        } catch (err) {
            console.log(err);
        }
    }
}