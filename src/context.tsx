import { createContext } from 'react';

export const AppContext = createContext({
    player: {},
    round: [],
    dispatch: (type: string, payload: any) => {}
});