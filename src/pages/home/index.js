import React,{useState} from "react"
import {useHistory, Link} from "react-router-dom" 
import RecipeSearch from "../../components/RecipeSearch"
import "./styles.css"


const Home = () => {
    const [query, setQuery] = useState("");

    //Hitorial de navigacion del react router
    const history = useHistory()
    

    const updateQuery = (e) => {
        setQuery(e.target.value);
    };

    const getSearch = async (e) => {
        e.preventDefault();
        history.push(`/search?userInput=${query}`)
    };

    return(
        <div className="home-container">
            <div className="image-container">
                <div className="inputs-link-container">
                    <RecipeSearch 
                        inputValue={query}
                        onChangeHandler={updateQuery}
                        submitHandler={getSearch}
                    />
                    <div className="link-container">
                        <Link to="/search">Advanced Search</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
export default Home 