/**
 * Thunk for loading the providers
 */
import { Dispatch, AnyAction } from 'redux';
import fetch from 'cross-fetch';
import { GET_PROVIDERS_URL } from '../../../constants';

// export const loadAllProviders = () => {
//     return async (dispatch: Dispatch<AnyAction>) => {
//         try {
//             const response = await fetch(GET_PROVIDERS_URL);
//             const providers = await response.json();
//             dispatch(
//                 loadProviders(
//                     providers
//                 )
//             );
//         } catch (err) {
//             console.log(err);
//         }
//     }
// }

export const getAllProviders = () =>
    fetch(GET_PROVIDERS_URL)
        .then(res =>
            res.json()
        )
        .catch(err => console.error(err))