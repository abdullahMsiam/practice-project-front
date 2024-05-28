import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth);
    }

    // find the current use with useEffect 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                console.log(currentUser);
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = { user, googleLogin, createUser, signIn, logout };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
};

export default AuthProvider; 