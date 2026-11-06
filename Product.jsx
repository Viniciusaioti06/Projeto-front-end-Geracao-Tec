import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductArt from '../components/ProductArt.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { products, brl } from '../data/products.js'

export default function Product({ onAdd }) {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  const [color, setColor] = useState(null)
  const [size, setSize] = useState(null)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return <div className="wrap section empty">Produto não encontrado. <Link to="/produtos" className="link">Voltar à lista</Link></div>
  }

  const current = color || product.colors[0]
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const add = () => {
    if (!size) return
    onAdd(qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="wrap section">
      <nav className="crumbs" aria-label="Você está em">
        <Link to="/">Home</Link> / <Link to="/produtos">Produtos</Link> / <Link to={`/produtos?categoria=${encodeURIComponent(product.category)}`}>{product.category}</Link>
      </nav>

      <div className="detail">
        <div className="detail-img" style={{ '--tint': current }}>
          <ProductArt product={product} color={current} />
        </div>

        <div className="detail-info">
          <p className="card-cat">{product.category} · {product.brand}</p>
          <h1 className="h1-sm">{product.name}</h1>
          <p className="price big">
            {product.oldPrice && <s>{brl(product.oldPrice)}</s>} <strong>{brl(product.price)}</strong>
          </p>
          <p>{product.desc}</p>

          <p className="filters-title">Cor</p>
          <div className="swatches" role="radiogroup" aria-label="Cor">
            {product.colors.map((c) => (
              <button key={c} role="radio" aria-checked={c === current} aria-label={`Cor ${c}`}
                className={c === current ? 'swatch on' : 'swatch'} style={{ background: c }} onClick={() => setColor(c)} />
            ))}
          </div>

          <p className="filters-title">Tamanho</p>
          <div className="sizes" role="radiogroup" aria-label="Tamanho">
            {product.sizes.map((s) => (
              <button key={s} role="radio" aria-checked={s === size} className={s === size ? 'size on' : 'size'} onClick={() => setSize(s)}>{s}</button>
            ))}
          </div>

          <div className="buy">
            <div className="qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Diminuir quantidade">−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)} aria-label="Aumentar quantidade">+</button>
            </div>
            <button className="btn" onClick={add} disabled={!size}>{added ? 'Adicionado!' : 'Adicionar ao carrinho'}</button>
          </div>
          {!size && <p className="hint">Escolha um tamanho para continuar.</p>}
        </div>
      </div>

      {related.length > 0 && (
        <section className="section">
          <h2>Produtos relacionados</h2>
          <div className="grid">{related.map((p) => <ProductCard key={p.id} product={p} />)}</div>
        </section>
      )}
    </div>
  )
}
