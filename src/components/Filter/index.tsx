import React from 'react';
import styles from './styles.module.css';

interface FilterProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

interface Category {
  id: string;
  label: string;
}

export const Filter = ({ onCategoryChange, selectedCategory }: FilterProps) => {
  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'ciencia', label: 'Ciência' },
    { id: 'tecnologia', label: 'Tecnologia' },
    { id: 'filosofia', label: 'Filosofia' },
    { id: 'programacao', label: 'Programação' },
    { id: 'livros', label: 'Livros' },
    { id: 'politica', label: 'Política' },
  ];

  return (
    <nav className={styles.filterNav}>
      <div className={styles.filterCategories}>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`${styles.categoryButton} ${
              selectedCategory === category.id ? styles.active : ''
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className={styles.filterSort}>
        <span>Filtrar por:</span>
        <select className={styles.sortSelect}>
          <option value="newest">Mais novo</option>
          <option value="oldest">Mais antigo</option>
        </select>
      </div>
    </nav>
  );
};
