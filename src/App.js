
import './App.css';
import RecipeCard from './Components/RecipeCard';
import SearchBar from './Components/SearchBar';
import { useState, useEffect } from 'react';
import Footer from './Components/Footer';

const apiUrl ="https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
const [isLoading, setIsLoading] = useState(false);
const [query, setQuery] = useState("");
const [recipes, setRecipes] = useState([]);

//  funcrion to search for the recipes
const searchRecipes = async () =>{
  setIsLoading(true);
  const url = apiUrl + query
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data);
  setRecipes(data.meals);
  setIsLoading(false);
};

useEffect(()=>{
searchRecipes();
}, []);

const handleSubmit = (event)=> {
  event.preventDefault();
  searchRecipes();
};
  return (
    <>
    <div className="container">
      <h1>Subha RannaGhor</h1>
      <p className="header-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus distinctio dignissimos voluptatibus esse deserunt. Natus dolorum laboriosam repellendus pariatur! Est alias necessitatibus sequi consequuntur accusamus sit assumenda adipisci, cumque dolores!</p>
      <SearchBar handleSubmit= {handleSubmit} query={query} setQuery={setQuery} onChange ={event => (event.target.value)}
      isLoading={isLoading}
      />

      <div className="recipes">
        {
          recipes ? recipes.map(recipe =>(
            <RecipeCard key={recipe.idMeal} recipe ={recipe}/>
          )): "No Recipes!"}
        
      </div>
      <Footer/>
    </div>
    
    </>
  );
}

export default App;
