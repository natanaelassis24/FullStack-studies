import styled from 'styled-components';
import CardProduto from './CardProduto';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default function ProductList({ products, onAddToCart, produtosAdicionadosIds }) {
  return (
    <ListContainer role="list">
      {products.map(product => (
        <div key={product.id} role="listitem">
          <CardProduto
            product={product}
            onAddToCart={onAddToCart}
            adicionado={produtosAdicionadosIds.includes(product.id)} // aqui o botão vai mudar de cor conforme o carrinho
          />
        </div>
      ))}
    </ListContainer>
  );
}
