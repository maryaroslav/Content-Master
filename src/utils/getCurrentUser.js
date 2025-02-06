import { store } from '../store/store';

export const getCurrentUser = () => {
    const state = store.getState();
    return state.auth.user;
};