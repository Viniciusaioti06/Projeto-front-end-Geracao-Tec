import { Link } from 'react-router-dom'
import { categories } from '../data/products.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <div>
          <p className="logo">digital<b>store</b></p>
          <p className="muted">Projeto final de Front-end. Produtos fictícios.</p>
        </div>
        <div>
          <p className="footer-title">Categorias</p>
          {categories.map((c) => (
            <Link key={c} to={`/produtos?categoria=${encodeURIComponent(c)}`}>{c}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
