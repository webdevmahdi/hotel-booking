import React, { createContext } from 'react'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";


export let AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  let googleProvider = new GoogleAuthProvider();
  let githubProvider = new GithubAuthProvider();

  const auth = getAuth(app);

  let emailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  let googleRegister = () => {
    return signInWithPopup(auth, googleProvider);
  }

  let githubSignUp = () => {
    return signInWithPopup(auth, githubProvider);
  }

  let authData = {
    emailPass,
    googleProvider,
    githubProvider,
    

  }

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider