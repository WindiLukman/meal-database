import React from 'react';
import './style.css';

const MealItem = ({ data }) => {
  console.log(data);

  return (
    <div className="card">
      <img src={data.strMealThumb} alt="meal" />
      <div className="info">
        <h2>{data.strMeal}</h2>
        <p>{data.strArea} food</p>
      </div>
      <div className="recipe">
        <h2>Recipe</h2>
        <p>{data.strInstructions}</p>
        {/* Displaying ingredients */}
        <h3>Ingredients:</h3>
        <ul>
          {Array.from({ length: 20 }, (_, i) => i + 1).map(i => {
            const ingredient = data[`strIngredient${i}`];
            const measure = data[`strMeasure${i}`];
            if (ingredient && measure) {
              return <li key={i}>{ingredient} - {measure}</li>;
            }
            return null;
          })}
        </ul>
        {/* End of ingredients */}
        <img src={data.strMealThumb} alt="recipe" />
        <a href={data.strSource} target="_blank" rel="noopener noreferrer">
          Watch video
        </a>
      </div>
    </div>
  );
};

export default MealItem;
