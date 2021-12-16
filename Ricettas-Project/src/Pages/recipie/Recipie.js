import "./recipie.css"
// import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom"
import { useTheme } from "../../hooks/useTheme";
import { useEffect, useState } from "react"
import { projectFirestore } from "../../firebase/config"
export default function Recipie() {


  const [recipe, setRecipe] = useState(null)
  const [isPending, setPending] = useState(false)
  const [error, setError] = useState(false)
    const {id} =useParams();

    // const url = "http://localhost:3000/recipes/"+ id
    // const {error, isPending , data: recipe}= useFetch(url)

    const { mode } = useTheme()
    useEffect(() => {
      setPending(true)
      projectFirestore.collection('recipes').doc(id).get().then((doc)=>{
          if(doc.exists){
            setPending(false)
            setRecipe(doc.data())

          }
          else{
            setPending(false)
            setError('could not find the Recipe')
          }
      })
     
    }, [id])

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  )
}
