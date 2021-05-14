import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRecipes } from "../../services/apiservices";
import Recipe from "../../components/recipe";
import AdvancedSearch from "../../components/advancedsearch";
import Pagination from "../../components/pagination";
import "./styles.css";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userInput = searchParams.get("userInput");

  const previousConfig = JSON.parse(localStorage.getItem("previousConfig"));
  //Search setUp
  const [recipes, setRecipes] = useState([]);
  const defaultFilters = {
    cuisine: previousConfig.cuisine,
    diet: previousConfig.diet,
    intolerances: previousConfig.intolerances,
  };
  const [filters, setFilters] = useState(defaultFilters);
  const [typing, setTyping] = useState(userInput || previousConfig.query || "");
  //Pagination setUp
  const [config, setConfig] = useState({
    query: userInput || previousConfig.query || "",
    offset: previousConfig.offset || 0,
    number: previousConfig.number || 20,
  });
  const [pagination, setPagination] = useState();

  //Normal and Filtered Search functions
  const getAllRecipes = async () => {
    const response = await getRecipes({ ...config, ...filters });
    setRecipes(response.results);
    const paginationRelated = {
      offset: response.offset,
      number: response.number,
      totalResults: response.totalResults,
    };
    setPagination(paginationRelated);
    const previousConfig = { ...config, ...filters };
    localStorage.setItem("previousConfig", JSON.stringify(previousConfig));
  };

  useEffect(() => {
    if (config.query !== "") {
      getAllRecipes();
    }
  }, [config, filters]);

  const updateQuery = (e) => {
    setTyping(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setConfig({ ...config, query: typing });
  };
  const onFilterChange = (name, filterValue) => {
    const newFilters = { ...filters, [name]: filterValue };
    setFilters(newFilters);
  };

  // Pagination Functions
  const changePage = (action) => {
    const newOffset =
      action === "next"
        ? config.offset + config.number
        : config.offset - config.number;
    const newConfig = { ...config, offset: newOffset };
    setConfig(newConfig);
  };

  return (
    <div className="search-container">
      <div className="image-search-container">
        <AdvancedSearch
          inputValue={typing}
          onChangeHandler={updateQuery}
          submitHandler={getSearch}
          onChange={onFilterChange}
          selectedFilters={filters}
        />
        <div className="recipes-list-container">
          {recipes.map((recipe) => (
            <Recipe
              id={recipe.id}
              recipe={recipe}
              title={recipe.title}
              image={recipe.image}
              key={recipe.id}
            />
          ))}
        </div>
        {pagination && (
          <Pagination
            number={pagination.number}
            offset={pagination.offset}
            totalResults={pagination.totalResults}
            changePage={changePage}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
