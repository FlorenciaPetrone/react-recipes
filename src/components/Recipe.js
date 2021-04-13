import React from "react"
import { Link } from "react-router-dom"

const Recipe = ({id, title, image}) => {
    return(
        <div className="recipe-container">
            <img src={image} alt={title} /> 
            <Link to={`/recipe/${id}`} key={id} className="recipe-link">
                <h1>{title}</h1>
            </Link>
        </div>
    )
}

export default Recipe