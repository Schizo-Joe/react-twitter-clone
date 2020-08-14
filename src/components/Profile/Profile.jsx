import React, {useContext} from 'react';
import './Profile.css';
import {CurrentUserDetailsContext} from '../../CurrentUserDetailsProvider';
import firebaseApp from '../../Firebase';

function Profile() {
     const auth = firebaseApp.auth(); 
    const db = firebaseApp.firestore();
    const [currentUserDetails, setCurrentUserDetails] = useContext(CurrentUserDetailsContext);
    const nameChange = () => {

        db.collection("users")
          .where("email", "==", currentUserDetails.email)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              console.log(doc.id)
              db.collection('users').doc(doc.id).update({displayName: "Not Messi"});
            });
          });
    }
    return (
        <div className="profile__page">
            <h2>Profile</h2>
            <button onClick={nameChange}>Click</button>
        </div>
    )
}

export default Profile;
