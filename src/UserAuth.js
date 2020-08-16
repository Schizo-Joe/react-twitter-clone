import React, { useEffect, useState, useContext, createContext } from "react";
import firebaseApp from "./Firebase";
import { CurrentUserDetailsContext } from "./CurrentUserDetailsProvider";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const [currentUser, setCurrentUser] = useState(null);

  const [currentUserDetails, setCurrentUserDetails] = useContext(
    CurrentUserDetailsContext
  );

  useEffect(() => {
      var userDetails;
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser.email);

        db.collection("users")
          .where("email", "==", authUser.email)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              userDetails = doc.data();
            });
            currentUserDetails.name = userDetails.displayName;
            currentUserDetails.email = userDetails.email;
            currentUserDetails.userName = userDetails.userName;
            currentUserDetails.verified = userDetails.verified;
            currentUserDetails.profileImage = userDetails.profileImage;
          }).catch(e => alert(e.message));

        setCurrentUser(authUser);
      } else {
        setCurrentUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={[currentUser, setCurrentUser]}>
      {children}
    </AuthContext.Provider>
  );
};
