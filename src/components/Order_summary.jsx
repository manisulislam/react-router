
import { useNavigate } from "react-router-dom"

const Order_summary = () => {
    const navigate=useNavigate()
  return (
    <>
    <div>Order Confirmed.</div>
    <button onClick={()=>navigate(-1)}>Go back</button>
    </>
  )
}

export default Order_summary