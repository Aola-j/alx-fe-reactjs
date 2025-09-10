import { create } from 'zustand'

export const useRecipeStore = create((set) => ({
  recipes: [],
  
  addRecipe: (newRecipe) => 
    set((state)=> ({ 
      recipes: [...state.recipes, newRecipe] })),
     
     
   setRecipes: (recipes) => set({ recipes }),

 // Delete by id
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Update by id
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),
}))
