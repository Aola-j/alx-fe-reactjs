import { useState, useEffect } from "react";
import recipeData from "../data.json"; // adjust the path if needed

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Set the data directly from the imported file
    setRecipes(recipeData);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Recipe List</h1>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-2">{recipe.title}</h2>
            <p className="text-gray-600 text-sm mt-1">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
