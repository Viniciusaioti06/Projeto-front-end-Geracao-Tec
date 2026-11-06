import { Link } from 'react-router-dom'
import ProductArt from './ProductArt.jsx'
import { brl } from '../data/products.js'

export default function ProductCard({ product }) {
  const off = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0
  return (
    <Link to={`/produtos/${product.id}`} className="card">
      <div className="card-img" style={{ '--tint': product.color }}>
        {off > 0 && <span className="badge">-{off}%</span>}
        <ProductArt product={product} />
      </div>
      <p className="card-cat">{product.category} · {product.brand}</p>
      <h3>{product.name}</h3>
      <p className="price">
        {product.oldPrice && <s>{brl(product.oldPrice)}</s>} <strong>{brl(product.price)}</strong>
      </p>
    </Link>
  )
}
