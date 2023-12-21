// Meal.js
import React, { useState, useEffect } from 'react';
import MealItem from './MealItem';
import './style.css';

const Meal = () => {
  const [search, setSearch] = useState('');
  const [myMeal, setMeal] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [triggerSearch, setTriggerSearch] = useState(false);

  useEffect(() => {
    const storedSearchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setSearchHistory(storedSearchHistory);
  }, []);

  useEffect(() => {
    if (triggerSearch) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => {
          setMeal(data.meals);
          setSearch('');
          // Update search history
          const newSearchHistory = Array.from(new Set([search, ...searchHistory])).slice(0, 5);
          setSearchHistory(newSearchHistory);
          localStorage.setItem('searchHistory', JSON.stringify(newSearchHistory));
          setTriggerSearch(false);
        });
    }
  }, [triggerSearch, search, searchHistory]);

  const handleSearch = () => {
    setTriggerSearch(true);
  };

  const handleSearchHistoryClick = term => {
    setSearch(term);
    setTriggerSearch(true);
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Search Your Food Recipe</h1>
          <h4>Discover Culinary Magic: Your Food Adventure Awaits!</h4>
        </div>
        <div className="searchBox">
          <input type="search" className="search-bar" onChange={e => setSearch(e.target.value)} value={search} />
          <button onClick={handleSearch}>Search</button>
          <div className="searchHistory">
            <h3>Search History:</h3>
            <ul>
              {searchHistory.map((term, index) => (
                <li key={index} onClick={() => handleSearchHistoryClick(term)}>
                  {term}
                </li>
              ))}
            </ul>
            <button onClick={clearSearchHistory}>Clear History</button>
          </div>
        </div>
        <div className="container">
          {myMeal === null ? (
            <p className="notSearch">Not found</p>
          ) : (
            myMeal.map((res, index) => <MealItem key={index} data={res} />)
          )}
        </div>
      </div>
    </>
  );
};

export default Meal;
