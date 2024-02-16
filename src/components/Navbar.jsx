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
    <nav>
        <NavLink style={NavbarStyles} to="/">Home</NavLink>
        <NavLink style={NavbarStyles} to="/about">About</NavLink>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
    </nav>
  )
}

export default Navbar