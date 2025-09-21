import { useRecipeStore } from './recipeStore'

const FavoritesList = () => {
  // Map favorite IDs to full recipe objects
  const FavoritesList = () => {
  const { favorites, recipes } = useRecipeStore(
    (state) => ({ favorites: state.favorites, recipes: state.recipes }),
    shallow
  );

  const favoriteRecipes = favorites.map((id) =>
    recipes.find((recipe) => recipe.id === id)
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteRecipes.map(
          (recipe) =>
            recipe && (
              <div key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </div>
            )
        )
      )}
    </div>
  )
  }
}

export default FavoritesList
