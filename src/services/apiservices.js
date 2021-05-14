import axios from "axios";

// const API_KEY= "0d0b04ebf0cd4c9a8820941daaf1f364";
// const API_KEY = "6ce4ba2828054da3930808a2db423f1e";
const API_KEY = "6b5e835d093a4825b6f91e07e8970e5d";
const BASE_URL = "https://api.spoonacular.com/recipes";

export const getRecipes = async (config) => {
  const response = await axios.get(
    `${BASE_URL}/complexSearch?apiKey=${API_KEY}`,
    {
      params: config,
    }
  );
  return response.data;
};

export const getRecipeDetails = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/${id}/information?apiKey=${API_KEY}&includeNutrition=true`
  );
  return response.data;
};
