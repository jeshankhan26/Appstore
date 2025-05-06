import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Images/firebase.init';
export const AuthContext =createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
        
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }




    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const userdata={
        user,setUser,createAccount,logout,login
    }
    
    return <AuthContext value={userdata}>
        {children}
    </AuthContext>
    
};

export default AuthProvider;