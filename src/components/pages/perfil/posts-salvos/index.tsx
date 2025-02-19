'use client';

import { Post } from '@/components/post';
import styles from './styles.module.css';
import { useUserStore } from '@/store/user-store';
import extractPlainText from '@/functions/extractPlainText';
import { UserService } from '@/services/user-service';

export const PostsSalvos = () => {
  const { user, removePostFromSaved } = useUserStore();

  if (!user) return null;
  async function handleRemovePost(postID: string) {
    const response = await UserService.removePostFromSaved(Number(postID));
    if (response) removePostFromSaved(postID);
  }

  return (
    <section className={styles.postsSalvosContainer}>
      <h1 className={styles.title}>Post Salvos</h1>
      <div className={styles.posts}>
        {user?.savedPosts?.data.length !== undefined &&
          user?.savedPosts?.data.length > 0 &&
          user.savedPosts.data.map((post) => (
            <Post key={post.id}>
              <Post.Header category={post.category} image={post.coverImage}>
                <Post.Header.Buttons.ButtonRemove
                  onClick={() => handleRemovePost(String(post.id))}
                />
              </Post.Header>
              <Post.Subinfos date={post.createdAt} text={post.content} />
              <Post.Title postID={post.id} title={post.title} />
              <Post.Description text={extractPlainText(post.content)} />
              <Post.Author
                name={post.author.name}
                imageUrl={post.author.profilePicture}
              />
            </Post>
          ))}
      </div>
    </section>
  );
};
