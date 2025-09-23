import styled from 'styled-components';
import CardProduto from './CardProduto';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default function ProductList({ products, onAddToCart }) {
  return (
    <ListContainer role="list">
      {products.map(product => (
        <div key={product.id} role="listitem">
          <CardProduto
            product={product}
            onAddToCart={onAddToCart}
          />
        </div>
      ))}
    </ListContainer>
  );
}
