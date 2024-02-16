import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // loading
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  // firebase auth
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update name

  const updateUser = (infoUser) => {
    // setLoading(true);
    return updateProfile(auth.currentUser, infoUser);
  };

  // login user

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user password reset
  const passwordReset = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // handle google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // logout

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // verify email
  const handleEmailVerify = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // user checking

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const infoObj = {
    createUser,
    updateUser,
    loginUser,
    passwordReset,
    googleLogin,
    loading,
    setLoading,
    user,
    logout,
    handleEmailVerify,
  };

  // Auth
  return (
    <AuthContext.Provider value={infoObj}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
