import React, { createContext, useEffect, useState } from 'react'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './../../firebase/firebase.init'

const auth = getAuth(app);
export let AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(true);

  let googleProvider = new GoogleAuthProvider();


  let emailPasswordRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  let googleRegister = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  let userVerification = (currentUser) => {
    setLoading(true);
    return sendEmailVerification(currentUser);
  }

  let userName = (user, name) => {
    setLoading(true);
    return updateProfile(user, {
      displayName: name
    })
  }
  
  let userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  let signOutUser = () => {
    return signOut(auth);
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false)
    })
    
    return ()=> {
      return unsubscribe();
    };
  }, [])

  

  let authData = {
    user,
    loading,
    auth,
    emailPasswordRegister,
    googleRegister,
    userVerification,
    userName,
    userLogin,
    signOutUser

  }

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider