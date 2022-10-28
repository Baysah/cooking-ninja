//styles
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Import Pages
import HomePage from './Pages/homePage/HomePage';
import RecipeDetails from './Pages/recipeDetails/RecipeDetails';
import Search from './Pages/search/Search';
import CreateRecipe from './Pages/create/CreateRecipe';
import PageNotFound from './Pages/pageNotFound/404';

//import other components
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="" element={<HomePage />} end />
            <Route path="create" element={<CreateRecipe />} />
            <Route path="search" element={<Search />} />
            <Route path="recipes/:id" element={<RecipeDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
