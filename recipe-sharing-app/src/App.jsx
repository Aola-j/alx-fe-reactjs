import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import { Routes, Route, Link } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'

const App = () => {

  return (
    <div>
      <h1>My Recipes</h1>

      <AddRecipeForm/>
      <RecipeList/>

      <Routes>
         <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </div>
  )
}

const RecipeDetailsWrapper = () => {
  const { id } = useParams()
  return <RecipeDetails recipeId={id} />
}

export default App