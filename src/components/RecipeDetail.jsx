import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
       fetch(`https://v554zq-8080.csb.app/api/recipes/${slug}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [slug]);

  return (
    <div>
      {recipe ? (
        <div>
          <h2>{recipe.recipeName}</h2>
          <p>{recipe.ingredients}</p>
          <p>{recipe.steps}</p>
          <p>{recipe.calories}</p>
          {recipe.imageUrl && (
            <img src={recipe.imageUrl} alt={recipe.recipeName} />
          )}
        </div>
      ) : (
        <p>Loading recipe...</p>
      )}
    </div>
  );
};

export default RecipeDetail;
