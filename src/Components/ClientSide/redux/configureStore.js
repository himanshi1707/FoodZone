import {createStore} from 'redux';
import { Reducer, initialState } from '../redux/Reducer'

export const ConfigureStore = () => {
    const store = createStore(
        Reducer, // reducer
        initialState, // our initialState
    );

    return store;
}