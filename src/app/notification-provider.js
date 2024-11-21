'use client';

import React, {createContext, useState} from 'react';

export const NotificationContext = createContext({
    message: '',
    state: '',
    setNotification: () => { }
});

export default function NotificationProvider({
    children,
}) {
    const [message, setMessage] = useState('');
    const [state, setState] = useState('');
    const setNotification = (message, state) => {
        setMessage(message);
        setState(state);
    };
    const clear = () => {
        setMessage(null);
        setState(null);
    };

    return <NotificationContext.Provider value={{
        message,
        setMessage,
        state,
        setState,
        setNotification,
        clear
    }}>{children}</NotificationContext.Provider>;
}
