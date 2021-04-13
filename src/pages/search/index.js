import React, {useState, useEffect} from "react"
import {useLocation} from "react-router-dom"
import {getRecipes}  from "../../services/apiservices"
import Recipe from "../../components/Recipe"
import AdvancedSearch from "../../components/AdvancedSearch"
import Pagination from "../../components/Pagination"
import "./styles.css"


const Search = () => {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const userInput = searchParams.get("userInput")
    //Search setUp
    const [recipes, setRecipes] = useState([])
    const [filters, setFilters] = useState()
    const [typing, setTyping] = useState(userInput || "")
    //Pagination setUp
    const [config, setConfig] = useState({
        query: userInput || "",
        offset: 0,
        number: 20
    })
    const [pagination, setPagination] = useState()

    console.log(config)

    //Normal and Filtered Search functions
    const getAllRecipes = async () => {
        const response = await getRecipes({...config, ...filters});
        setRecipes(response.results);
        const paginationRelated = { offset: response.offset, number: response.number, totalResults: response.totalResults };
        setPagination(paginationRelated);
        const previousConfig = {...config, ...filters}
        localStorage.setItem("previousConfig", JSON.stringify(previousConfig))
        
    }
    useEffect(() => {
        const previousConfig = localStorage.getItem("previousConfig")
        if(previousConfig){
            setConfig({query: previousConfig.query, offset: previousConfig.query, number: previousConfig.number})
            setFilters({cuisine: previousConfig.cuisine, diet: previousConfig.diet, intolerances: previousConfig.intolerances})
        }
        
    }, [])

    useEffect(() => {
        if(config.query !== ""){
            getAllRecipes()
        }
    }, [config, filters]);

    const updateQuery = (e) => {
        setTyping(e.target.value)
    };

    const getSearch = (e) => {
        e.preventDefault()
        setConfig({...config, query: typing })
    };
    const onFilterChange = (name, filterValue) => {
        const newFilters = {...filters, [name]: filterValue};
        setFilters(newFilters)
    }

    // Pagination Functions 
    const changePage = (action) => {
        const newOffset = action === "next" ? config.offset + config.number : config.offset - config.number; 
        const newConfig = {...config, offset: newOffset};
        setConfig(newConfig);
    }

   

    return(
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
                {recipes.map(recipe => (
                    <Recipe
                        id={recipe.id}
                        recipe={recipe}
                        title={recipe.title} 
                        image={recipe.image}
                        key={recipe.id}
                        />
                ))} 
                </div>
                {pagination && <Pagination 
                    number={pagination.number}
                    offset={pagination.offset}
                    totalResults={pagination.totalResults}
                    changePage={changePage}
                />}
            </div>
        </div>
    ) 
}

export default Search 