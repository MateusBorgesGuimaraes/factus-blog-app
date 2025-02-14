import Image from 'next/image';
import style from './styles.module.css';
import formatLink from '@/functions/formatLink';

interface ProfileProps {
  color?: string;
  imageUrl: string;
  name: string;
}

export const Profile = ({ color = '#000', imageUrl, name }: ProfileProps) => {
  return (
    <div className={style.profileContainer}>
      <div className={style.profileImage}>
        <Image
          src={formatLink(`users/profile`, imageUrl)}
          alt="profile"
          width={40}
          height={40}
        />
      </div>
      <h3 className={style.profileName} style={{ color: color }}>
        {name}
      </h3>
    </div>
  );
};
