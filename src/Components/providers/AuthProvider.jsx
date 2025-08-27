import PropTypes from 'prop-types';
import { useState, useEffect, createContext } from "react";
import auth from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('auth state changed', currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser
        , logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}




/**
 * 1.create context and export it
 * 2.set provider with value
 * 3.use the authProvider in the main.jsx file
 * 4.acces children in the AuthProvider component as children and use it in the middle of the provider.** */