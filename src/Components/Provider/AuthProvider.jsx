import React, { createContext, useEffect, useState } from 'react'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithPopup, updateProfile } from "firebase/auth";
import app from './../../firebase/firebase.init'

const auth = getAuth(app);
export let AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(true);

  let googleProvider = new GoogleAuthProvider();
  let githubProvider = new GithubAuthProvider();


  let emailPasswordRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  let googleRegister = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  let githubRegister = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  }

  let userVarification = (currentUser) => {
    setLoading(true);
    return sendEmailVerification(currentUser);
  }

  let userName = (user, name) => {
    setLoading(true);
    return updateProfile(user, {
      displayName: name
    })
  }

  // let userLogin = 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false)
    })
    
    return ()=> {
      return unsubscribe();
    };
  }, [])

  
  console.log(user)

  let authData = {
    user,
    loading,
    emailPasswordRegister,
    googleRegister,
    githubRegister,
    userVarification,
    userName

  }

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider