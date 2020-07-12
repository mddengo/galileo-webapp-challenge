import { loadProviders, LOAD_PROVIDERS_ACTION } from './providerActions';

export type Provider = {
    doctor_id: string,
    first_name: string,
    last_name: string,
    dob: string,
    degree: string
}

type ProviderAction = ReturnType<typeof loadProviders>;

type ProviderState = {
    providers: Provider[]
};
const initialState: ProviderState = { providers: [] };

export function ProviderReducer(
    state = initialState,
    action: ProviderAction
): ProviderState {
    switch (action.type) {
        case LOAD_PROVIDERS_ACTION:
            return { providers: action.payload };
        default:
            return state;
    }
}