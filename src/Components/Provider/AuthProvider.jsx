import React, { createContext, useState } from 'react'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithPopup, updateProfile } from "firebase/auth";
import app from './../../firebase/firebase.init'

const auth = getAuth(app);
export let AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(true);

  let googleProvider = new GoogleAuthProvider();
  let githubProvider = new GithubAuthProvider();


  let emailPasswordRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  let googleRegister = () => {
    return signInWithPopup(auth, googleProvider);
  }

  let githubRegister = () => {
    return signInWithPopup(auth, githubProvider);
  }

  let userVarification = (currentUser) => {
    return sendEmailVerification(currentUser);
  }

  let userName = (user, name) => {
    return updateProfile(user, {
      displayName: name
    })
  }
  

  let authData = {
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