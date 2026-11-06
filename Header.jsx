import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Header({ cartCount }) {
  const [q, setQ] = useState('')
  const navigate = useNavigate()
  const search = (e) => {
    e.preventDefault()
    navigate(`/produtos?busca=${encodeURIComponent(q.trim())}`)
  }
  return (
    <header className="header">
      <div className="wrap header-in">
        <Link to="/" className="logo" aria-label="Digital Store, início">digital<b>store</b></Link>
        <form onSubmit={search} className="search" role="search">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Pesquisar produto..." aria-label="Pesquisar produto" />
        </form>
        <nav className="nav" aria-label="Principal">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/produtos">Produtos</NavLink>
        </nav>
        <span className="cart" aria-label={`Carrinho com ${cartCount} itens`}>Carrinho <em>{cartCount}</em></span>
      </div>
    </header>
  )
}
