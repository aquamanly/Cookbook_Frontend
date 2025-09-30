import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList"; // Ensure this matches the filename exactly
import RecipeDetail from "./components/RecipeDetail"; // Ensure this matches the filename exactly
import RecipeForm from "./components/RecipeForm"; // Ensure this matches the filename exactly
import GpsForm from "./components/GpsForm";
import LocationTracker from "./components/GpsGoogle";
import MapDisplay from "./components/GpsMap";
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
                         <Route path="/add-location" element={<GpsForm />} />
                         <Route path="/map-thing" element={<MapDisplay />} />
                         <Route path="/location" element={<LocationTracker />} />
                         
                    </Routes>
               </div>
          </Router>
     );
}

export default App;
