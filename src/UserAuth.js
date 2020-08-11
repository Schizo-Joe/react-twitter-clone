import React, {useEffect, useState, createContext} from 'react';
import firebaseApp from './Firebase';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = firebaseApp.auth().onAuthStateChanged((authUser) => {
            if(authUser) {
                setCurrentUser(authUser);
            } else {
                setCurrentUser(null);
            }
        })

        return (unsubscribe());
    }, []);

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}
