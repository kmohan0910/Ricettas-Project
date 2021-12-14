import { Link } from "react-router-dom"
import "./Recipe.css"
export default function Recipe({recipes}) {
    return (
        <div className="recipe-list">
            {recipes.map(recipe=>(
            <div key= {recipe.id} className="card">
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make ..</p>
                    <div>{recipe.method.substring(0,100)}</div>
                    <Link to={`/recipie/${recipe.id}`}>Cook This.</Link>
                </div>
            ))}
            
        </div>
    )
}
