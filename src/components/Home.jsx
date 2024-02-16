import { useNavigate } from "react-router-dom"
const Home = () => {

  const navigate=useNavigate()
  return (
    <>
    <div>Home</div>
    <button onClick={()=>navigate("order_summary")}>Order place</button>
    
    </>
  )
}

export default Home