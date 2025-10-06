import styled from 'styled-components';

const Nav = styled.nav`
  padding: 1rem;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const CartButton = styled.button`
  background-color: #555;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;

  &:hover {
    background-color: #666;
  }
`;

export default function Navbar({ cartItemCount, onCartClick }) {
  return (
    <Nav>
      <Title>Loja Online</Title>
      <CartButton 
        onClick={onCartClick} 
        aria-label={`Abrir carrinho com ${cartItemCount} itens`}
      >
        Carrinho ({cartItemCount})
      </CartButton>
    </Nav>
  );
}