// Ilustração do produto em SVG, tingida com a cor escolhida (sem imagens externas).
export default function ProductArt({ product, color }) {
  const c = color || product.color
  const cat = product.category
  return (
    <svg viewBox="0 0 240 160" role="img" aria-label={product.name} className="art">
      {cat === 'Tênis' && (<>
        <path d="M20 112c0-30 8-58 20-72l22 10c6 14 20 24 40 24 14 0 26 6 34 14l56 18c10 4 14 12 14 22v6H20z" fill={c} />
        <path d="M20 118h200v14c0 4-3 6-6 6H26c-4 0-6-2-6-6z" fill="#F5F0E8" stroke="#1E1E2E" strokeWidth="3" />
        <path d="M70 62l14 12M88 70l12 12M106 78l10 10" stroke="#F5F0E8" strokeWidth="4" strokeLinecap="round" />
      </>)}
      {cat === 'Camisetas' && (
        <path d="M80 24l-56 24 16 36 22-8v70h108V76l22 8 16-36-56-24c-4 14-16 22-32 22S84 38 80 24z" fill={c} stroke="#1E1E2E" strokeWidth="3" strokeLinejoin="round" />
      )}
      {cat === 'Calças' && (
        <path d="M76 14h88l12 140h-42l-14-84-14 84H64z" fill={c} stroke="#1E1E2E" strokeWidth="3" strokeLinejoin="round" />
      )}
      {cat === 'Bonés' && (<>
        <path d="M52 100c0-40 30-64 68-64s68 24 68 64z" fill={c} stroke="#1E1E2E" strokeWidth="3" />
        <path d="M180 100c26 0 44 6 44 14s-30 10-72 6z" fill={c} stroke="#1E1E2E" strokeWidth="3" />
        <circle cx="120" cy="36" r="6" fill="#1E1E2E" />
      </>)}
    </svg>
  )
}
