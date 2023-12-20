import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

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
        <div className="App">
            <header className="App-header">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                {recipes && recipes.map((recipe, index) => (
                    <div key={index}>
                        <h2>{recipe.strMeal}</h2>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    </div>
                ))}
            </header>
        </div>
    );
}

export default App;
