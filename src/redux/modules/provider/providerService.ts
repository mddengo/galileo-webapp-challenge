/**
 * Service for loading the providers
 */
import fetch from 'cross-fetch';
import { GET_PROVIDERS_URL } from '../../../helper/constants';

export const getAllProviders = () =>
    fetch(GET_PROVIDERS_URL)
        .then(res =>
            res.json()
        )
        .catch(err => console.error(err))