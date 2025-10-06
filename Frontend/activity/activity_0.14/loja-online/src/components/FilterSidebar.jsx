import styled from 'styled-components';

// Estilos principais
const Sidebar = styled.aside`
  width: 200px;
  border-right: 1px solid #ccc;
  padding: 1rem;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CategoryItem = styled.li`
  cursor: pointer;
  margin-bottom: 0.5rem;
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`;

export default function FilterSidebar({ categories, selectedCategory, onSelectCategory }) {
  // Ativa categoria com Enter ou Espaço
  function handleKeyDown(e, cat) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelectCategory(cat);
    }
  }

  return (
    <Sidebar>
      <h3>Categorias</h3>
      <CategoryList>
        <CategoryItem
          role="button"
          tabIndex={0}
          aria-pressed={!selectedCategory}
          selected={!selectedCategory}
          onClick={() => onSelectCategory('')}
          onKeyDown={(e) => handleKeyDown(e, '')}
        >
          Todas
        </CategoryItem>

        {categories.map((cat) => (
          <CategoryItem
            key={cat}
            role="button"
            tabIndex={0}
            aria-pressed={selectedCategory === cat}
            selected={selectedCategory === cat}
            onClick={() => onSelectCategory(cat)}
            onKeyDown={(e) => handleKeyDown(e, cat)}
          >
            {cat}
          </CategoryItem>
        ))}
      </CategoryList>
    </Sidebar>
  );
}