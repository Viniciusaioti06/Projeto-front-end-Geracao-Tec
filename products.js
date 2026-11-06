export const categories = ['Tênis', 'Camisetas', 'Calças', 'Bonés']

export const products = [
  { id: 1, name: 'Tênis Aurora Run', brand: 'Aurora', category: 'Tênis', price: 399.9, oldPrice: 499.9, color: '#C92071', colors: ['#C92071', '#1E1E2E', '#F5F0E8'], sizes: [38, 39, 40, 41, 42, 43], desc: 'Cabedal respirável e solado leve para corridas diárias. Entressola com amortecimento que devolve energia a cada passada.' },
  { id: 2, name: 'Tênis Maré Urbano', brand: 'Maré', category: 'Tênis', price: 329.9, color: '#2B6CB0', colors: ['#2B6CB0', '#F5F0E8'], sizes: [37, 38, 39, 40, 41, 42], desc: 'Visual limpo para o dia a dia, com palmilha macia e cadarço encerado que não solta.' },
  { id: 3, name: 'Tênis Brasa High', brand: 'Brasa', category: 'Tênis', price: 459.9, oldPrice: 549.9, color: '#E4572E', colors: ['#E4572E', '#1E1E2E'], sizes: [39, 40, 41, 42, 43, 44], desc: 'Cano alto com reforço no calcanhar. Confortável logo na primeira caminhada.' },
  { id: 4, name: 'Tênis Cajá Trail', brand: 'Cajá', category: 'Tênis', price: 519.9, color: '#E0A100', colors: ['#E0A100', '#3B5B3B'], sizes: [38, 40, 41, 42, 43], desc: 'Solado com garras para terra e pedra. Impermeável nos pontos que mais pegam água.' },
  { id: 5, name: 'Camiseta Lagoa Básica', brand: 'Lagoa', category: 'Camisetas', price: 79.9, color: '#3FA796', colors: ['#3FA796', '#F5F0E8', '#1E1E2E'], sizes: ['P', 'M', 'G', 'GG'], desc: 'Algodão penteado 100%, gola reforçada e caimento solto.' },
  { id: 6, name: 'Camiseta Sol Estampada', brand: 'Sol', category: 'Camisetas', price: 99.9, oldPrice: 129.9, color: '#F2A541', colors: ['#F2A541', '#1E1E2E'], sizes: ['P', 'M', 'G'], desc: 'Estampa serigrafada que não racha na lavagem. Feita para o calor de Fortaleza.' },
  { id: 7, name: 'Camiseta Dry Treino', brand: 'Aurora', category: 'Camisetas', price: 89.9, color: '#6C4AB6', colors: ['#6C4AB6', '#1E1E2E'], sizes: ['P', 'M', 'G', 'GG'], desc: 'Tecido de secagem rápida com proteção UV 30.' },
  { id: 8, name: 'Calça Jogger Duna', brand: 'Duna', category: 'Calças', price: 189.9, color: '#8B7355', colors: ['#8B7355', '#1E1E2E'], sizes: [38, 40, 42, 44], desc: 'Moletom leve com punho elástico e bolsos com zíper.' },
  { id: 9, name: 'Calça Cargo Vento', brand: 'Vento', category: 'Calças', price: 229.9, oldPrice: 269.9, color: '#4A5D4A', colors: ['#4A5D4A', '#1E1E2E'], sizes: [38, 40, 42, 44, 46], desc: 'Sarja resistente, seis bolsos e barra ajustável.' },
  { id: 10, name: 'Boné Dad Hat Coral', brand: 'Maré', category: 'Bonés', price: 69.9, color: '#E4572E', colors: ['#E4572E', '#F5F0E8'], sizes: ['Único'], desc: 'Aba curva, regulagem de metal e bordado frontal.' },
  { id: 11, name: 'Boné Trucker Noite', brand: 'Brasa', category: 'Bonés', price: 74.9, color: '#1E1E2E', colors: ['#1E1E2E'], sizes: ['Único'], desc: 'Tela traseira que ventila e frente estruturada.' },
  { id: 12, name: 'Tênis Pixel Branco', brand: 'Pixel', category: 'Tênis', price: 279.9, oldPrice: 349.9, color: '#C8C8D0', colors: ['#C8C8D0', '#1E1E2E'], sizes: [36, 37, 38, 39, 40], desc: 'Clássico branco que combina com tudo. Fácil de limpar.' }
]

export const brl = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
