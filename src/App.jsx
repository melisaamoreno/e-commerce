import { Route, Routes } from 'react-router-dom'
import { Layout } from './Components/Layout/Layout'
import { Home } from './Pages/Home/Home'
import { Products } from './Pages/Rental/Products'
import { Error } from './Pages/404/Error'
import { ProductDetail } from './Pages/Rental/ProductDetail'
import './layout.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productos" element={<Products />} />
        <Route path="productos/:id" element={<ProductDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  )
}

export default App
