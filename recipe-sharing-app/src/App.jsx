import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/Searchbar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import './App.css'

function App() {
  return(
    <Router>
      <div>
        <SearchBar />
        <h1>Recipe</h1>
        <FavoritesList />
        <RecommendationsList />
        <AddRecipeForm />
        <Routes>
          <Route path='/' element={<RecipeList />} />
          <Route path='/recipes/:recipeID' element={<RecipeDetails />}/>
        </Routes>
      </div>
    </Router>
  );
};
export default App;