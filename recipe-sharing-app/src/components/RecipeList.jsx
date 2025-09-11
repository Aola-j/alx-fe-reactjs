import { Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'
import FavoriteButton from './FavoriteButton'

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.filteredRecipes);

if (recipes.length === 0) {
    return <p>No recipes found. Try adding one!</p>
  }


    return (
      <div>
        {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '1rem' }}>
          
          <Link to={`/recipes/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>

          <DeleteRecipeButton recipeId={recipe.id} />
           <FavoriteButton recipeId={recipe.id} />
        </div>
      ))}
      </div>
    );
  };

  export default RecipeList;