import React, { useContext, useEffect, useState, createContext } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, app } from '../firebaseconfig';

  export const logout = () => {
    window.location.reload()
    return signOut(auth);
  };


export const AuthStatus = () => {
  const auth = getAuth();
  
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        resolve(currentUser);
      } else {
        resolve(null);
      }
    }, reject);
  });
};