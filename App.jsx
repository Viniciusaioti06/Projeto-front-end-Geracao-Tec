import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Product from './pages/Product.jsx'

export default function App() {
  const [cart, setCart] = useState(0)
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])

  return (
    <>
      <Header cartCount={cart} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/produtos/:id" element={<Product onAdd={(q) => setCart((c) => c + q)} />} />
          <Route path="*" element={<p className="wrap empty">Página não encontrada.</p>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
