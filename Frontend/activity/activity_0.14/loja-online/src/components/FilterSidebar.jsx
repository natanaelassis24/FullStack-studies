export default function FilterSidebar({ categories, selectedCategory, onSelectCategory }) {

  // Função para ativar seleção via teclado
  function handleKeyDown(e, cat) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelectCategory(cat);
    }
  }

  return (
    <aside style={{
      width: '200px', 
      borderRight: '1px solid #ccc', 
      padding: '1rem'
    }}>
      <h3>Categorias</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li 
          role="button"
          tabIndex={0}
          aria-pressed={!selectedCategory}
          style={{ 
            cursor: 'pointer', 
            fontWeight: !selectedCategory ? 'bold' : 'normal', 
            marginBottom: '0.5rem' 
          }}
          onClick={() => onSelectCategory('')}
          onKeyDown={(e) => handleKeyDown(e, '')}
        >
          Todas
        </li>
        {categories.map(cat => (
          <li
            key={cat}
            role="button"
            tabIndex={0}
            aria-pressed={selectedCategory === cat}
            style={{
              cursor: 'pointer', 
              fontWeight: selectedCategory === cat ? 'bold' : 'normal',
              marginBottom: '0.5rem'
            }}
            onClick={() => onSelectCategory(cat)}
            onKeyDown={(e) => handleKeyDown(e, cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}
