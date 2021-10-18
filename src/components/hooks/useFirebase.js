import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword } from "firebase/auth";
import initailizeAuthentication from '../Firebase/firebase.init';
initailizeAuthentication();


const GOprovider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user,setUser]=useState({});
    const auth = getAuth();

    const signInUsingGoogle=()=>{
      return  signInWithPopup(auth, GOprovider);
    }

    const signOutUsingGoogle=()=>{
        signOut(auth).then(() => {
            setUser({});
          })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            }
          });
    },[]);

    return {
        auth,
        user,
        setUser,
        updateProfile,
        signInUsingGoogle,
        signOutUsingGoogle,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword
    }
};

export default useFirebase;