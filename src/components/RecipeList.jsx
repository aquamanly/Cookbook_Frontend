import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://v554zq-8080.csb.app/api/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.slug} className="recipe-card">
          <h3>{recipe.recipeName}</h3>
          <p>{recipe.ingredients}</p>
          <Link to={`/recipes/${recipe.slug}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
