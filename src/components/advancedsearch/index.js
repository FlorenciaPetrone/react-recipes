import React from "react";
import filtersData from "../../utils/filters";
import Select from "../select";
import RecipeSearch from "../recipesearch";
import "./styles.css";

const AdvancedSearch = ({
  submitHandler,
  inputValue,
  onChangeHandler,
  onChange,
  selectedFilters,
}) => {
  return (
    <div className="advanced-search-container">
      <RecipeSearch
        inputValue={inputValue}
        onChangeHandler={onChangeHandler}
        submitHandler={submitHandler}
      />
      <div className="filters-container">
        {filtersData.map(({ name, title, options }) => (
          <Select
            name={name}
            title={title}
            options={options}
            onChange={onChange}
            selectedFilters={selectedFilters && selectedFilters.name}
            key={name}
          />
        ))}
      </div>
    </div>
  );
};
export default AdvancedSearch;
