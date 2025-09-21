import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import {  Routes, Route, useParams } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'

const router = 'Router'

function App() {
  return (
    <div>
      <h1>My Recipes</h1>
      
        <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Recipe details page */}
        <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </div>
  )
}

// Home page layout
const Home = () => (
  <div>
    <AddRecipeForm />
    <SearchBar />
    <RecipeList />
    <FavoritesList />
    <RecommendationsList />
  </div>
)

const RecipeDetailsWrapper = () => {
  const { id } = useParams()
  return <RecipeDetails recipeId={id} />
}


export default App