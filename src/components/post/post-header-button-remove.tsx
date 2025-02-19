import Image from 'next/image';
import React from 'react';
import styles from './styles.module.css';

interface PostHeaderButtonRemoveProps {
  onClick: () => void;
}

export const PostHeaderButtonRemove = ({
  onClick,
}: PostHeaderButtonRemoveProps) => {
  return (
    <button className={styles.delete}>
      <Image
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        src="/icons/exclude-post-icon.svg"
        alt=" Delete Post"
        width={12}
        height={12}
      />
    </button>
  );
};
