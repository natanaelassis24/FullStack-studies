import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import FilterSidebar from './components/FilterSidebar';
import Cart from './components/Cart';
import { products as allProducts } from './data/products';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cartVisible, setCartVisible] = useState(false);

  // Filtra produtos pela categoria selecionada
  const filteredProducts = selectedCategory
    ? allProducts.filter(p => p.category === selectedCategory)
    : allProducts;

  // Adiciona produto ao carrinho com controle de estoque
  function handleAddToCart(product) {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        if (existing.quantity < product.stock) { // verifica estoque
          return prev.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          alert('Quantidade máxima no estoque atingida!');
          return prev;
        }
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  // Remove item do carrinho decrementando a quantidade ou removendo completamente
  function handleRemoveItem(id) {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing.quantity === 1) {
        return prev.filter(item => item.id !== id);
      } else {
        return prev.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  }

  return (
    <>
      <Navbar
        cartItemCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onCartClick={() => setCartVisible(!cartVisible)}
      />
      <div style={{ display: 'flex', padding: '1rem' }}>
        <FilterSidebar
          categories={[...new Set(allProducts.map(p => p.category))]}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <main style={{ flex: 1, padding: '0 1rem' }}>
          <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
        </main>
        {cartVisible && (
          <Cart cartItems={cartItems} onRemoveItem={handleRemoveItem} />
        )}
      </div>
    </>
  );
}
