import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { products, categories } from '../data/products.js'

export default function Products() {
  const [params, setParams] = useSearchParams()
  const categoria = params.get('categoria') || ''
  const busca = (params.get('busca') || '').toLowerCase()
  const ordem = params.get('ordem') || ''

  const set = (key, value) => {
    const next = new URLSearchParams(params)
    value ? next.set(key, value) : next.delete(key)
    setParams(next)
  }

  let list = products.filter((p) =>
    (!categoria || p.category === categoria) &&
    (!busca || `${p.name} ${p.brand}`.toLowerCase().includes(busca))
  )
  if (ordem === 'menor') list = [...list].sort((a, b) => a.price - b.price)
  if (ordem === 'maior') list = [...list].sort((a, b) => b.price - a.price)
  if (ordem === 'nome') list = [...list].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="wrap section list-page">
      <aside className="filters" aria-label="Filtros">
        <h2>Filtrar por</h2>
        <p className="filters-title">Categoria</p>
        <label className="check"><input type="radio" name="cat" checked={!categoria} onChange={() => set('categoria', '')} /> Todas</label>
        {categories.map((c) => (
          <label key={c} className="check">
            <input type="radio" name="cat" checked={categoria === c} onChange={() => set('categoria', c)} /> {c}
          </label>
        ))}
      </aside>

      <section>
        <div className="section-head">
          <h1 className="h1-sm">
            {busca ? `Resultados para "${params.get('busca')}"` : categoria || 'Todos os produtos'}
            <small> {list.length} {list.length === 1 ? 'produto' : 'produtos'}</small>
          </h1>
          <label className="sort">Ordenar por
            <select value={ordem} onChange={(e) => set('ordem', e.target.value)}>
              <option value="">Mais relevantes</option>
              <option value="menor">Menor preço</option>
              <option value="maior">Maior preço</option>
              <option value="nome">Nome (A–Z)</option>
            </select>
          </label>
        </div>
        {list.length === 0
          ? <p className="empty">Nenhum produto encontrado. Tente outra categoria ou palavra.</p>
          : <div className="grid">{list.map((p) => <ProductCard key={p.id} product={p} />)}</div>}
      </section>
    </div>
  )
}
