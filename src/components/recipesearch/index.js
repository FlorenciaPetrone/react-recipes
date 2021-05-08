import React from "react";
import "./styles.css";

const RecipeSearch = ({ submitHandler, inputValue, onChangeHandler }) => {
  return (
    <div className="recipe-search-container">
      <form className="search-form" onSubmit={submitHandler}>
        <input
          className="search-bar"
          type="text"
          value={inputValue}
          onChange={onChangeHandler}
          placeholder="Find a good recipe!"
        />
        <button
          className="search-button"
          type="submit"
          disabled={inputValue === ""}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default RecipeSearch;
