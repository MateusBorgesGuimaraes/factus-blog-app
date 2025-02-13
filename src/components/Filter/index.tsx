import React from 'react';
import styles from './styles.module.css';
import { Select } from '../formComponents/select';

interface FilterProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

enum filters {
  NEWEST = 'Mais novo',
  OLDEST = 'Mais velho',
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
        <Select label="opções" options={Object.values(filters)} name="filtro" />
      </div>
    </nav>
  );
};
