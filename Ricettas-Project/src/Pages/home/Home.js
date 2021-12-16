import "./home.css"
// import { useFetch } from '../../hooks/useFetch'
import Recipe from "../../components/Recipe"
import { projectFirestore } from "../../firebase/config"
import { useEffect, useState } from "react"
export default function Home() {

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  // const {data , isPending , error} = useFetch('http://localhost:3000/recipes')
  useEffect(() => {
    setIsPending(true)
    projectFirestore.collection('recipes').get().then((snapshot) => {
      if (snapshot.empty) {
        setError('No recipes to load!')
      } else {
        let result = []
        snapshot.docs.forEach((doc) => {
          console.log(data)
          result.push({ id: doc.id, ...doc.data() })

        })
        setData(result)
        setIsPending(false)
      }
    }).catch(error => {
      setError(error.message)
      setIsPending(false)
    })
  }, [])
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading</p>}
      {data && <Recipe recipes={data} />}
    </div>
  )
}
