import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles.css";

// Import Components
import Home from "./pages/home";
import RecipeDetails from "./pages/recipeDetails";
import Search from "./pages/search";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="body-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/recipe/:id" component={RecipeDetails} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
