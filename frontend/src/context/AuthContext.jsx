import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);
export const AuthContextProvider = ({ children }) => {

    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('userInfo')) || null);

    return <AuthContext.Provider value={{authUser, setAuthUser}}>
        {children}
    </AuthContext.Provider>;
}