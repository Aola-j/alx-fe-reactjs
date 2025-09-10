import { create } from 'zustand'

export const useRecipeStore = create((set) => ({
  recipes: [],
  
  //Search and filter implemetation
searchTerm: '',

  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set (state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  
  addRecipe: (newRecipe) =>
  set((state) => {
    const updatedRecipes = [...state.recipes, newRecipe]
     return {
        recipes: updatedRecipes,
        filteredRecipes: state.searchTerm
          ? updatedRecipes.filter((recipe) =>
              recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            )
          : updatedRecipes,
      }
    }),

     
   setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: state.searchTerm
        ? recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
        : recipes,
    })),


 // Delete by id
  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id)
      return {
        recipes: updatedRecipes,
        filteredRecipes: state.searchTerm
          ? updatedRecipes.filter((recipe) =>
              recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            )
          : updatedRecipes,
      }
    }),

  // Update by id
  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      )
      return {
        recipes: updatedRecipes,
        filteredRecipes: state.searchTerm
          ? updatedRecipes.filter((recipe) =>
              recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            )
          : updatedRecipes,
      }
    }),

    
}))
