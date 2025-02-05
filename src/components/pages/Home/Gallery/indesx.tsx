import { HeaderSection } from '@/components/HeaderSection';
import styles from './styles.module.css';
import Image from 'next/image';

export const Gallery = () => {
  const images = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
    '/images/gallery5.jpg',
    '/images/gallery6.jpg',
  ];
  return (
    <section>
      <HeaderSection
        title="Galeria"
        description="Algumas imagens incríveis que separamos para vocês."
      />
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              className={styles.image}
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
