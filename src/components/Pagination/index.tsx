import Image from 'next/image';
import styles from './styles.module.css';

interface PaginationProps {
  actualPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

export const Pagination = ({
  actualPage,
  totalPages,
  handlePageChange,
}: PaginationProps) => {
  return (
    <div className={styles.navigation}>
      {actualPage > 1 ? (
        <button onClick={() => handlePageChange(actualPage - 1)}>
          <Image
            src="/icons/next-prev-arrow-icon.svg"
            alt=""
            width={32}
            height={32}
          />
          Anterior
        </button>
      ) : (
        <button disabled>
          <Image
            src="/icons/next-prev-arrow-icon.svg"
            alt=""
            width={32}
            height={32}
          />
          Anterior
        </button>
      )}

      <p className={styles.page}>
        {actualPage} de {totalPages}
      </p>

      {actualPage < totalPages ? (
        <button onClick={() => handlePageChange(actualPage + 1)}>
          Próximo
          <Image
            src="/icons/next-prev-arrow-icon.svg"
            alt=""
            width={32}
            height={32}
          />
        </button>
      ) : (
        <button disabled>
          Próximo
          <Image
            src="/icons/next-prev-arrow-icon.svg"
            alt=""
            width={32}
            height={32}
          />
        </button>
      )}
    </div>
  );
};
