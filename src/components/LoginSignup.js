import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Update the import statement
import { useAuth } from '../context/AuthProvider';

const LoginSignup = () => {
    const { user, signIn, signUp } = useAuth();
    const navigate = useNavigate(); // Update the hook name
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Redirect to the homepage if the user is already authenticated
    if (user) {
        navigate.push('/');
    }

    const handleSignIn = async () => {
        try {
            await signIn(email, password);
            // Redirect to the homepage after successful login
            navigate('/');
        } catch (error) {
            console.error('Error signing in:', error.message);
        }
    };

    const handleSignUp = async () => {
        try {
            await signUp(email, password);
            // Redirect to the homepage after successful sign-up
            navigate('/');
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    };

    return (
        <div>
            <h2>Login / Sign Up</h2>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <button onClick={handleSignIn}>Sign In</button>
                <button onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
    );
};

export default LoginSignup;
