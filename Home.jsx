import { Link } from 'react-router-dom'
import ProductArt from '../components/ProductArt.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { products, categories } from '../data/products.js'

export default function Home() {
  const hero = products[0]
  const featured = products.filter((p) => p.oldPrice).slice(0, 4)
  return (
    <>
      <section className="hero">
        <div className="wrap hero-in">
          <div>
            <p className="hero-tag">Coleção de verão com até 25% off</p>
            <h1>Seu próximo passo começa aqui.</h1>
            <p className="lead">Tênis, camisetas, calças e bonés de marcas que você vai querer usar hoje mesmo.</p>
            <Link to="/produtos" className="btn">Ver produtos</Link>
          </div>
          <Link to={`/produtos/${hero.id}`} className="hero-art" aria-label={hero.name}>
            <ProductArt product={hero} />
          </Link>
        </div>
      </section>

      <section className="wrap section">
        <h2>Coleções em destaque</h2>
        <div className="cats">
          {categories.map((c) => (
            <Link key={c} to={`/produtos?categoria=${encodeURIComponent(c)}`} className="cat">
              <span>{c}</span>
              <small>{products.filter((p) => p.category === c).length} itens</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <h2>Produtos em promoção</h2>
          <Link to="/produtos" className="link">Ver todos</Link>
        </div>
        <div className="grid">{featured.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>
    </>
  )
}
