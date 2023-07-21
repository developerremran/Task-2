import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';
 

export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(true);
    const [loading, setLoading] = useState(true)

    // firebaseConnected

    // newUserRegisterEmailAndPassword 

    const newUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // email and password login 
    const oldUser = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
        
    }

    const userUpdateNP=(name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
          })
    }


    // current user check 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged((auth), currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unSubscribe
        }
    }, [])


    const authInfo = {
        user,
        newUser,
        oldUser,
        logOutUser,
        userUpdateNP
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;