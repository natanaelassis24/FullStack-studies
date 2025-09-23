import CardProduto from './CardProduto';

export default function ProductList({ products, onAddToCart }) {
  return (
    <div
      role="list"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem'
      }}
    >
      {products.map(product => (
        <CardProduto
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          role="listitem" // se possível, ou dentro de CardProduto
        />
      ))}
    </div>
  );
}
