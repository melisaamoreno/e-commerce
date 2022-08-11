import { Route, Routes } from 'react-router-dom'
import { Layout } from './Components/Layout/Layout'
import { Home } from './Pages/Home/Home'
import { Products } from './Pages/Rental/Products'
import { Nosotros } from './Pages/Nosotros/Nosotros'
import { Error } from './Pages/404/Error'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productos" element={<Products />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  )
}

export default App
