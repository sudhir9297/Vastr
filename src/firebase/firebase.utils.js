import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBbf7GZgHQmoY9LcNe_p9Pvkdb_bRz1UB0",
    authDomain: "sbrand-a4845.firebaseapp.com",
    databaseURL: "https://sbrand-a4845.firebaseio.com",
    projectId: "sbrand-a4845",
    storageBucket: "",
    messagingSenderId: "803523673114",
    appId: "1:803523673114:web:f0c0036e63d13ff0"
  };

  firebase.initializeApp(config);


  export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return ;

    const userRef=firestore.doc(`users/${userAuth.uid}`);

    const snapShot=await userRef.get();

    if(!snapShot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user');
      }
    }
    return userRef;
  }



  export const auth=firebase.auth();
  export const firestore =firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;