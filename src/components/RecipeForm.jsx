import { useState } from "react";
//good stuff
const RecipeForm = () => {
  const [formData, setFormData] = useState({
    recipeName: "",
    ingredients: "",
    steps: "",
    calories: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
       fetch("https://v554zq-8080.csb.app/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => alert("Recipe added!"))
      .catch((error) => console.error("Error adding recipe:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="recipeName"
        value={formData.recipeName}
        onChange={handleChange}
        placeholder="Recipe Name"
        required
      />
      <textarea
        name="ingredients"
        value={formData.ingredients}
        onChange={handleChange}
        placeholder="Ingredients"
        required
      />
      <textarea
        name="steps"
        value={formData.steps}
        onChange={handleChange}
        placeholder="Steps"
        required
      />
      <input
        type="text"
        name="calories"
        value={formData.calories}
        onChange={handleChange}
        placeholder="Calories"
        required
      />
      <input
        type="text"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
