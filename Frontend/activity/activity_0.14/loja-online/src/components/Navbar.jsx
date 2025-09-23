export default function Navbar({ cartItemCount, onCartClick }) {
  return (
    <nav style={{
      padding: '1rem', 
      backgroundColor: '#333', 
      color: '#fff', 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1>Loja Online</h1>
      <button 
        onClick={onCartClick} 
        aria-label={`Abrir carrinho com ${cartItemCount} itens`}
        style={{
          backgroundColor: '#555', 
          color: '#fff', 
          border: 'none', 
          padding: '0.5rem 1rem', 
          cursor: 'pointer',
          borderRadius: '4px'
        }}
      >
        Carrinho ({cartItemCount})
      </button>
    </nav>
  );
}
