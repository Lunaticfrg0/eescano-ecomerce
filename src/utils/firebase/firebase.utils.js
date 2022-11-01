import { initializeApp } from "firebase/app";
import { 
  getAuth,  
  signInWithRedirect, 
  signInWithPopup, GoogleAuthProvider, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDUaY7LEzQrpQF2iWGXVOOkNCjA3YmmAxM",
    authDomain: "eescano-ecommerce-db.firebaseapp.com",
    projectId: "eescano-ecommerce-db",
    storageBucket: "eescano-ecommerce-db.appspot.com",
    messagingSenderId: "1081746287858",
    appId: "1:1081746287858:web:c33f0684cffb32f176b46b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)
  
  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (userAuth, aditionalInformation = {}) => {
    const userDocRef = doc(db, "users", userAuth.uid)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)

    console.log(userSnapshot)

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...aditionalInformation
            })
        } catch (error) {
            console.log('error creating user')
        }
    }
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
  }

  export const signOutUser = async () => await signOut(auth);