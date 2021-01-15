import React, {useEffect, useState} from 'react';
import Recipe from './recipe';
import './App.css';

const App = () => {

  const APP_ID = 'c994b8ac';
  const APP_KEY = '57b8f3ddede39361a2b3bef17399c465';

  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    getRecipes()
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-button" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
        key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  )
}

export default App;
