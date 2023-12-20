// src/components/Auth.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuth } from '../context/AuthProvider';

const Auth = () => {
    const { user } = useAuth();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();

    if (user) {
        // Redirect to the homepage if the user is already authenticated
        history.push('/');
    }

    const handleSignIn = async () => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            // Redirect to the homepage after successful login
            history.push('/');
        } catch (error) {
            console.error('Error signing in:', error.message);
        }
    };

    const handleSignUp = async () => {
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            // Redirect to the homepage after successful sign-up
            history.push('/');
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    };

    return (
        <div>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
};

export default Auth;
