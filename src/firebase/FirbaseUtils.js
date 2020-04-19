import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBtDe1jBQBkUv1G729YfZEuVPyOPqSX90o",
    authDomain: "crwn-db-2d275.firebaseapp.com",
    databaseURL: "https://crwn-db-2d275.firebaseio.com",
    projectId: "crwn-db-2d275",
    storageBucket: "crwn-db-2d275.appspot.com",
    messagingSenderId: "713295281311",
    appId: "1:713295281311:web:7312802b8a8b29570b76aa",
    measurementId: "G-L13EG77L81"
  };

  export const createUserProfileDocument = async (userAuth, AdditionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt, 
          ...AdditionalData
        })

      } catch(error){

      }

    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
