import { Route, Routes } from 'react-router-dom'
import { Layout } from './Components/Layout/Layout'
import { Home } from './Pages/Home/Home'
import { Products } from './Pages/Rental/Products'
import { Error } from './Pages/404/Error'
import { ProductDetail } from './Pages/Rental/ProductDetail'
import './layout.css'
import { ProtectedRoutes } from './Components/Auth/ProtectedRoutes'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="productos" element={<Products />} />
          <Route path="productos/:id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  )
}

export default App
