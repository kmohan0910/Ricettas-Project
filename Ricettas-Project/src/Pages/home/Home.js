import "./home.css"
import {useFetch} from '../../hooks/useFetch'
import Recipe from "../../components/Recipe"
export default function Home() {
    const {data , isPending , error} = useFetch('http://localhost:3000/recipes')
    return (
        <div className="home">
          {error && <p className="error">{error}</p>}
          {isPending && <p className="loading">Loading</p>}
          {data && <Recipe recipes={data}/>}
        </div>
    )
}
