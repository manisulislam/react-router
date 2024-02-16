
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Order_summary from './components/Order_summary'
import NoMatch from './components/NoMatch'
import Products from './components/Products'
import FeaturedProducts from './components/FeaturedProducts'
import NewProducts from './components/NewProducts'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path="order_summary" element={<Order_summary></Order_summary>} />
        <Route path="*" element={<NoMatch></NoMatch>} />
        <Route path='products' element={<Products></Products>}>
          <Route index element={<FeaturedProducts></FeaturedProducts>}/>
          <Route path='featured' element={<FeaturedProducts></FeaturedProducts>}/>
          <Route path='new' element={<NewProducts></NewProducts>}/>
        </Route>

      </Routes>
    </>
  )
}

export default App
