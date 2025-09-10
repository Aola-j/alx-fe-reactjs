import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import { Routes, Route, Router } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'

const App = () => {

  return (
    <Router>
      <h1>My Recipes</h1>

      <AddRecipeForm/>
      <RecipeList/>

      <Routes>
         <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </Router>
  )
}

const RecipeDetailsWrapper = () => {
  const { id } = useParams()
  return <RecipeDetails recipeId={id} />
}

export default App