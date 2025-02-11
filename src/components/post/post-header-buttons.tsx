import Image from 'next/image';
import styles from './styles.module.css';
import { PostHeaderButtonEdit } from './post-header-button-edit';
import { PostHeaderButtonRemove } from './post-header-button-remove';

type PostHeaderButtons = {
  children?: React.ReactNode;
};

export const PostHeaderButtons = ({ children }: PostHeaderButtons) => {
  return <>{children}</>;
};

PostHeaderButtons.ButtonRemove = PostHeaderButtonRemove;
PostHeaderButtons.ButttonEdit = PostHeaderButtonEdit;
