import Image from 'next/image';
import style from './styles.module.css';

interface ProfileProps {
  color?: string;
}

export const Profile = ({ color = '#000' }: ProfileProps) => {
  return (
    <div className={style.profileContainer}>
      <div className={style.profileImage}>
        <Image
          src="/images/user-test1.jpg"
          alt="profile"
          width={40}
          height={40}
        />
      </div>
      <h3 className={style.profileName} style={{ color: color }}>
        Amanda Barreto
      </h3>
    </div>
  );
};
