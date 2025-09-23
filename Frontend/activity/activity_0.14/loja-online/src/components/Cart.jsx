export default function Cart({ cartItems, onRemoveItem }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <aside style={{
      width: '300px', 
      borderLeft: '1px solid #ccc', 
      padding: '1rem',
      boxSizing: 'border-box'
    }}>
      <h3>Carrinho</h3>
      {cartItems.length === 0 && <p>Carrinho vazio</p>}
      <ul style={{ paddingLeft: 0, listStyle: 'none' }} role="list">
        {cartItems.map(item => (
          <li key={item.id} style={{ marginBottom: '1rem' }} role="listitem">
            <b>{item.name}</b> - Qtd: {item.quantity} - R$ {(item.price * item.quantity).toFixed(2)}
            <button 
              onClick={() => onRemoveItem(item.id)} 
              aria-label={`Remover ${item.name} do carrinho`}
              style={{ 
                marginLeft: '1rem', 
                cursor: 'pointer',
                padding: '0.25rem 0.5rem',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                fontSize: '0.9rem'
              }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 && <h4>Total: R$ {total.toFixed(2)}</h4>}
    </aside>
  );
}
