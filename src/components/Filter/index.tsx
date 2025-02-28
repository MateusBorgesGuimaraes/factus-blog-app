import React from 'react';
import styles from './styles.module.css';
import { Select } from '../formComponents/select';

interface FilterProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
  onSortChange: (order: 'desc' | 'asc') => void;
  selectedSort: 'desc' | 'asc';
}

enum filters {
  NEWEST = 'Mais novo',
  OLDEST = 'Mais velho',
}

interface Category {
  id: string;
  label: string;
}

export const Filter = ({
  onCategoryChange,
  selectedCategory,
  onSortChange,
  selectedSort,
}: FilterProps) => {
  const categories: Category[] = [
    { id: 'all', label: 'Todos' },
    { id: 'livros', label: 'Livros' },
    { id: 'ficcao', label: 'Ficção' },
    { id: 'história', label: 'Historia' },
    { id: 'tecnologia', label: 'Tecnologia' },
    { id: 'ciencia', label: 'Ciência' },
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
        <Select
          name="filtro"
          options={Object.values(filters)}
          value={selectedSort === 'desc' ? filters.NEWEST : filters.OLDEST}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            const value = e.target.value;
            onSortChange(value === filters.NEWEST ? 'desc' : 'asc');
          }}
        />
      </div>
    </nav>
  );
};
