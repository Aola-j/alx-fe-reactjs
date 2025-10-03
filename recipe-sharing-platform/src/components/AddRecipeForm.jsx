import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required!");
      return;
    }

    // Check at least 2 ingredients
    const ingredientList = ingredients.split("\n").filter((item) => item.trim() !== "");
    if (ingredientList.length < 2) {
      setError("Please enter at least two ingredients (one per line).");
      return;
    }

    setError("");

    // New recipe object
    const newRecipe = {
      title,
      ingredients: ingredientList,
      instructions: steps.split("\n").filter((item) => item.trim() !== ""),
    };

    console.log("New Recipe Submitted:", newRecipe);

    // Reset form after submit
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>

      {error && (
        <p className="text-red-500 mb-4 text-center font-medium">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Ingredients (one per line)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. 2 eggs\n1 cup flour"
          />
        </div>

        {/* Steps */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Preparation Steps (one per line)
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. Mix ingredients\nBake at 180°C"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
