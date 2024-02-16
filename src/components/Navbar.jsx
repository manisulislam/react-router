// import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const NavbarStyles=({isActive})=>{
    return {
      fontWight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    }
  }
  return (
    <nav className="primary_navbar">
        <NavLink style={NavbarStyles} to="/">Home</NavLink>
        <NavLink style={NavbarStyles} to="/about">About</NavLink>
        <NavLink style={NavbarStyles} to="/products">Products</NavLink>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
    </nav>
  )
}

export default Navbar