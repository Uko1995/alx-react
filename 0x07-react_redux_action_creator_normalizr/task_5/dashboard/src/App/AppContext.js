import { createContext } from 'react';

export const defaultUser = {
    email: '',
    password: '',
    isLoggedIn: false
};

export const defaultLogOut = () => {
    console.log('Logging out');
};

export const AppContext = createContext({
    user: defaultUser,
    logOut: defaultLogOut
});