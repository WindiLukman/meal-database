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
                    style={{margin: '10px', padding: '10px'}}
                />
                {recipes && recipes.map((recipe, index) => (
                    <div key={index} style={{margin: '20px', padding: '20px', border: '1px solid #ddd'}}>
                        <h2 style={{color: '#333'}}>{recipe.strMeal}</h2>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{width: '100%', height: 'auto'}}/>
                        <ol>
                            {recipe.strInstructions.split(/STEP \d/).map((step, index) => {
                                if (index !== 0) {
                                    return (
                                        <li key={index} style={{textAlign: 'justify', marginBottom: '10px'}}>
                                            <strong>STEP {index}</strong> {step.trim()}
                                        </li>
                                    );
                                }
                                return null;
                            })}
                        </ol>
                    </div>
                ))}
            </header>
        </div>
    );
}

export default App;


