import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();


    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth).then(() => setUser(null));
    }

    // find the current use with useEffect 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
                console.log(currentUser);
            }
            else {
                setLoading(false)
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = { user, googleLogin, createUser, signIn, logout, loading };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
};

export default AuthProvider; 