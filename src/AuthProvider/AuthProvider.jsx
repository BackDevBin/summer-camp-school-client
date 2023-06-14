import React from 'react';
import { useState } from 'react';
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext } from 'react';
import { useEffect } from 'react';
import app from '../firebase/firebase.init';




export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {


    const [user,setUser] = useState(null);
    const [loader , setLoader] = useState(true);
    

    const createUser = (email , password ) =>{
        setLoader(true);
        
        return createUserWithEmailAndPassword(auth , email, password);
    }

    const createLogin = (email , password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userUpdateData =(logUser, name,photo) =>{
        
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
          })
    }

    const logOut = () =>{
        
        return signOut(auth);
    }

    

    const GoogleLogin = () =>{
        
        return signInWithPopup(auth,googleProvider)
    }


    useEffect(() =>{
        const unsubscribe = onAuthStateChanged( auth, currentUser =>{
              setUser(currentUser);
              setLoader(false);
          })
  
          return () =>{
              return unsubscribe();
          }
      },[])



    const authInfo ={
        user,
        loader,
        createUser,
        createLogin,
        logOut,
        GoogleLogin,
        userUpdateData
    
       
    }



    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;