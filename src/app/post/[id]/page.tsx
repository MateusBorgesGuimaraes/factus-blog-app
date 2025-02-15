import { PostContentPage } from '@/components/pages/Post';

type Params = {
  params: {
    id: string;
  };
};

export default async function PostPage({ params }: Params) {
  const { id } = await params;
  return (
    <section>
      <PostContentPage id={id} />
    </section>
  );
}
