import { setProvider, SET_PROVIDER_ACTION } from './providerActions';

export type Provider = {
    doctor_id: string,
    first_name: string,
    last_name: string,
    dob: string,
    degree: string
}

type ProviderAction = ReturnType<typeof setProvider>;

type ProviderState = {
    providers: Provider[]
};
const initialState: ProviderState = { providers: [] };

export function ProviderReducer(
    state = initialState,
    action: ProviderAction
): ProviderState {
    const existingProviders = [ ...state.providers ];
    switch (action.type) {
        case SET_PROVIDER_ACTION:
            const newProvider = action.payload;
            if (!existingProviders.some(provider => provider.doctor_id === newProvider.doctor_id)) {
                existingProviders.push(newProvider);
                return { ...state, providers: existingProviders };
            }
            return state;
        default:
            return state;
    }
}