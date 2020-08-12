import React, {useEffect, useState, createContext} from 'react';
import firebaseApp from './Firebase';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const auth = firebaseApp.auth();
    const [currentUser, setCurrentUser] = useState(null);
    const [currentUserDetails, setCurrentUserDetails] = useState([]);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                setCurrentUser(authUser);
            } else {
                setCurrentUser(null);
            }
        })

        return (unsubscribe);
    }, []);

    return (
        <AuthContext.Provider value={[currentUser, setCurrentUser], [currentUserDetails, setCurrentUserDetails]}>
            {children}
        </AuthContext.Provider>
    )
}
