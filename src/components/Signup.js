import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { auth as firebaseAuth, database as firebaseDatabase } from '../firebase/firebase';

const Signup = ({ onAuth }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            // Create user in Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(
                firebaseAuth,
                email,
                password
            );

            // Access the user object from the userCredential
            const user = userCredential.user;

            // Store additional user data in the Realtime Database
            await set(ref(firebaseDatabase, `users/${user.uid}`), {
                email: user.email,
                // Add any additional user data you want to store
            });

            // Add any additional logic you want to perform after successful signup

        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
};

export default Signup;
