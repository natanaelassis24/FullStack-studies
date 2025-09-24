import styled from 'styled-components';

// Estilos com Styled Components
const Aside = styled.aside`
  width: 300px;
  border-left: 1px solid #ccc;
  padding: 1rem;
  box-sizing: border-box;
`;

const List = styled.ul`
  padding-left: 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
`;

const RemoveButton = styled.button`
  margin-left: 1rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
`;

export default function Cart({ cartItems, onRemoveItem }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Aside>
      <h3>Carrinho</h3>
      {cartItems.length === 0 && <p>Carrinho vazio</p>}
      <List role="list">
        {cartItems.map(item => (
          <ListItem key={item.id} role="listitem">
            <b>{item.name}</b> - Qtd: {item.quantity} - R$ {(item.price * item.quantity).toFixed(2)}
            <RemoveButton 
              onClick={() => onRemoveItem(item.id)} 
              aria-label={`Remover ${item.name} do carrinho`}
            >
              Remover
            </RemoveButton>
          </ListItem>
        ))}
      </List>
      {cartItems.length > 0 && <h4>Total: R$ {total.toFixed(2)}</h4>}
    </Aside>
  );
}