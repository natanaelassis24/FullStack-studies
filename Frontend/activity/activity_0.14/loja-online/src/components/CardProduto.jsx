import styled from 'styled-components';

// Container do card
const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 1rem;
  width: 200px;
  box-sizing: border-box;
`;

// Imagem do produto
const ProductImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;

// Botão dinâmico
const AddButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => (props.adicionado ? '#198754' : '#6c757d')};
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;

export default function CardProduto({ product, onAddToCart, adicionado }) {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p><b>R$ {product.price.toFixed(2)}</b></p>
      <AddButton 
        onClick={() => onAddToCart(product)}
        adicionado={adicionado}
        aria-label={`Adicionar ${product.name} ao carrinho`}
      >
        {adicionado ? 'Adicionado' : 'Adicionar ao carrinho'}
      </AddButton>
    </Card>
  );
}
