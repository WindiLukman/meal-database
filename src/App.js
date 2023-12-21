// App.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase/firebase'; // Adjust the path to match your actual file structure
import Signup from './components/Signup';
import Login from './components/Login';
import MealSearch from './components/MealSearch';

const App = () => {
    const [user, setUser] = useState(null);
    const [redirectToMealsearch, setRedirectToMeals] = useState(false);
    const navigate = useNavigate();

    const handleAuth = () => {
        setUser(auth.currentUser);
        setRedirectToMeals(true);
    };

    useEffect(() => {
        if (redirectToMealsearch) {
            navigate('/mealsearch');
        }
    }, [redirectToMealsearch, navigate]);

    return (
        <div>
            {user ? (
                <MealSearch />
            ) : (
                <>
                    <Login onAuth={handleAuth} />
                    <Signup onAuth={handleAuth} />
                </>
            )}
        </div>
    );
};

export default App;
