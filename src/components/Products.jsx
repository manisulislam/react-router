import { Link , Outlet} from "react-router-dom"
const Products = () => {
  return (
    <>
    <div>Products page</div>
    <nav>
    <Link to='featured'>Featured</Link>
    <Link to='new'>New</Link>
    </nav>
    <Outlet></Outlet>
    </>
  )
}

export default Products