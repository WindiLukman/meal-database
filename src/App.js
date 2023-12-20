import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import LoginSignup from './components/LoginSignup';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [recipes, setRecipes] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        if (searchTerm !== '') {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
                .then(response => response.json())
                .then(data => setRecipes(data.meals));
        }
    }, [searchTerm]);

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/login-signup">Login/Signup</Link>
                    </nav>

                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        style={{ margin: '10px', padding: '10px' }}
                    />

                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', border: '1px solid black', padding: '10px' }}>
                                    {recipes && recipes.map((recipe, index) => (
                                        <div key={index}>
                                            <Link to={`/recipe/${recipe.idMeal}`}>
                                                <h3 style={{ fontSize: '0.8rem' }}>{recipe.strMeal}</h3>
                                                <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '100%', height: 'auto' }} />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            }
                        />
                        <Route path="/recipe/:id" element={<Recipe />} />
                        <Route path="/login-signup" element={<LoginSignup />} />
                    </Routes>
                </header>
            </div>
        </Router>
    );
}

function Recipe() {
    const [recipe, setRecipe] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
            .then(data => {
                if (data.meals) {
                    setRecipe(data.meals[0]);
                }
            });
    }, [id]);

    return recipe ? (
        <div style={{ margin: '20px', padding: '20px', border: '1px solid #ddd' }}>
            <h2 style={{ color: '#333' }}>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '100%', height: 'auto' }} />
            <p>{recipe.strInstructions}</p>
            <h3>Ingredients:</h3>
            <ul>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
                    const ingredient = recipe[`strIngredient${i}`];
                    const measure = recipe[`strMeasure${i}`];
                    if (ingredient && measure) {
                        return <li key={i}>{ingredient} - {measure}</li>;
                    }
                    return null;
                })}
            </ul>
        </div>
    ) : null;
}

export default App;


