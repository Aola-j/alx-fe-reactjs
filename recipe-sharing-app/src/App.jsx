import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import {  createBrowserRouter, RouterProvider, Route, } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div>
      <h1>My Recipes</h1>
      <RouterProvider router={router} />
    </div>
  )
}

// Home page layout
const Home = () => (
  <div>
    <AddRecipeForm />
    <SearchBar />
    <RecipeList />
  </div>
)

import { useParams } from 'react-router-dom'
const RecipeDetailsWrapper = () => {
  const { id } = useParams()
  return <RecipeDetails recipeId={id} />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/recipes/:id',
    element: <RecipeDetailsWrapper />,
  },
])

export default App