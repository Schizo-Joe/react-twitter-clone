import React, {useEffect, useState, createContext} from 'react';

export const CurrentUserDetailsContext = createContext();

export const CurrentUserDetailsProvider = ({children}) => {

    const [currentUserDetails, setCurrentUserDetails] = useState({name: "",email: "", userName: "", verified: false, profileImage: ""});

    return (
        <CurrentUserDetailsContext.Provider value={[currentUserDetails, setCurrentUserDetails]}>
            {children}
        </CurrentUserDetailsContext.Provider>
    )
}
