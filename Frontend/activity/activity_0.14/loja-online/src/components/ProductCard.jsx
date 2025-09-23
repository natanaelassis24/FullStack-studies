import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: white;
`;

const Botao = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => (props.adicionado ? '#198754' : '#6c757d')};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => (props.adicionado ? '#157347' : '#5a6268')};
  }
`;

export default function ProductCard({ product, onAddToCart, adicionado }) {
  return (
    <Card>
      <h3>{product.name}</h3>
      <p>Preço: R$ {product.price.toFixed(2)}</p>
      <Botao
        adicionado={adicionado}
        onClick={() => onAddToCart(product)}
        aria-pressed={adicionado}
        aria-label={adicionado ? `Produto ${product.name} adicionado ao carrinho` : `Adicionar produto ${product.name} ao carrinho`}
        title={adicionado ? 'Produto já adicionado' : 'Clique para adicionar ao carrinho'}
      >
        {adicionado ? 'Adicionado' : 'Adicionar ao carrinho'}
      </Botao>
    </Card>
  );
}
