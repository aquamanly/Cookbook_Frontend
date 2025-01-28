import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList"; // Ensure this matches the filename exactly
import RecipeDetail from "./components/RecipeDetail"; // Ensure this matches the filename exactly
import RecipeForm from "./components/RecipeForm"; // Ensure this matches the filename exactly
//import "./styles.css";

function App() {
     return (
          <Router>
               <div className="App">
                    <h1>Recipe App</h1>
                    <Routes>
                         <Route path="/" element={<RecipeList />} />
                         <Route path="/recipes/:slug" element={<RecipeDetail />} />
                         <Route path="/add-recipe" element={<RecipeForm />} />
                    </Routes>
               </div>
          </Router>
     );
}

export default App;
