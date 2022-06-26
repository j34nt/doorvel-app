import React, { useReducer } from 'react';
import { ParentProvider } from './doorvel/context/parents/ParentProvider';
import { parentReducer } from './doorvel/context/parents/ParentReducer';
import ParentState from './doorvel/context/parents/ParentState';
import ChildsState from './doorvel/context/childs/ChildsState';
import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme';

const init = () => {
    return {loaded:false}
}

export const DoorvelApp = () => {
    const [parents, dispatch] = useReducer(parentReducer, [], init);
    return (
        // <ParentProvider value={{parents, dispatch}}>
        <ParentState>
            <ChildsState>
                <AppTheme>
                    <AppRouter />
                </AppTheme>

            </ChildsState>

        </ParentState>

        // </ParentProvider>
    )
}