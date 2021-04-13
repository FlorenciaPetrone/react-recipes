import React from "react";
import {Switch, Route} from "react-router-dom";
import "./styles.css"


// Import Components 
import Home from "./pages/home"
import RecipeDetails from "./pages/recipeDetails";
import Search from "./pages/search"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <div className="body-container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/recipe/:id" component={RecipeDetails}/> 
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
