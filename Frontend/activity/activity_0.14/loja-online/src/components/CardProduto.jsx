export default function CardProduto({ product, onAddToCart }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '6px',
      padding: '1rem',
      width: '200px',
      boxSizing: 'border-box'
    }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '4px' }} />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p><b>R$ {product.price.toFixed(2)}</b></p>
      <button 
        onClick={() => onAddToCart(product)} 
        aria-label={`Adicionar ${product.name} ao carrinho`}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '4px'
        }}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
