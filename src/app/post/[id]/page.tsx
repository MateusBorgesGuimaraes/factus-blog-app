import { PostContentPage } from '@/components/pages/Post';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function PostPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  return (
    <section>
      <PostContentPage id={id} />
    </section>
  );
}
