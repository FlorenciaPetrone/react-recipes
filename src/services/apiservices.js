import axios from "axios"

// const APP_KEY = "baf4c7b23e7945a1a8443bffa4516503"
const APP_KEY = "6ce4ba2828054da3930808a2db423f1e"


export const getRecipes = async (config) => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APP_KEY}`, {
        params: config
    });
    return response.data;
};

export const getRecipeDetails = async (id) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${APP_KEY}&includeNutrition=true`);
    const data = await response.json();
    return data;
};

//https://api.spoonacular.com/recipes/${id}/information