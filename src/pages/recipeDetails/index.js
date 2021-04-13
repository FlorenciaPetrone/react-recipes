import React, {useState, useEffect, useRef} from "react"
import {useLocation} from "react-router-dom"
import {getRecipeDetails} from "../../services/apiservices"
import "./styles.css"

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState()
    const location = useLocation()
    const id = location.pathname.slice(8)
    const summaryRef = useRef(null)
   

    const getSingleRecipe = async () => {
        const flor = await getRecipeDetails(id)
        setRecipe(flor)
    }
    console.log(recipe)
  
    useEffect(() => {
        getSingleRecipe()
    }, [])

    useEffect(() => {
        if(recipe && summaryRef.current){
            summaryRef.current.innerHTML = recipe.summary
        }
    },[recipe])

    
    const getIngredients = () => {
        return recipe?.extendedIngredients.map(({id, originalString}) => (
            <li key={id}>
                <p>{originalString}</p>
            </li>
         ) )
    }

    const getInstructions = () => {
        return recipe?.analyzedInstructions?.[0].steps.map(
            ({number, length, step}) => (
                <li key={number}>
                    <h3 className="step-number">{number}</h3>
                    {length && (
                        <h5 className="step-duration">{length.number + length.unit}</h5>
                    )}
                    <p className="step-description">{step}</p>
                </li>
            )
        );
    }
  
    return(
        <div className="recipe-details-container">
            <h1>{recipe?.title} </h1>
            <img src={recipe?.image}/>
            <div className="all">
                <div className="summary-container">
                    <h2>SUMMARY</h2>
                    <p ref={summaryRef}></p>
                </div>
                <div className="diet-information">
                    {recipe?.vegan ? (
                        <i className="far fa-check-circle">Vegan</i>
                    ) : (
                        <i className="far fa-times-circle">Vegan</i>
                    )}
                    <br />
                    {recipe?.vegetarian ? (
                        <i className="far fa-check-circle">Vegetarian</i>
                    ) : (
                        <i className="far fa-times-circle">Vegetarian</i>
                    )}
                    <br />
                    {recipe?.glutenFree ? (
                        <i className="far fa-check-circle">GlutenFree</i>
                    ) : (
                        <i className="far fa-times-circle">GlutenFree</i>
                    )}
                </div>
                <div className="ingredients-container">
                    <h2>INGREDIENTS</h2>
                    <ul>{getIngredients()}</ul>
                </div>
                <div className="instructions-container">
                    <h2>INSTRUCTIONS</h2>
                    <ul>{getInstructions()}</ul>
                </div>
            </div>
        </div>
    )
}

    

export default RecipeDetails
