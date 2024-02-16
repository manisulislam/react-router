
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Order_summary from './components/Order_summary'
import NoMatch from './components/NoMatch'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path="order_summary" element={<Order_summary></Order_summary>} />
        <Route path="*" element={<NoMatch></NoMatch>} />

      </Routes>
    </>
  )
}

export default App
