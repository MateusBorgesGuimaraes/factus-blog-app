import { Hero } from '@/components/pages/Home/Hero';
import { PostsSection } from '@/components/pages/Home/Posts';

export default function Home() {
  return (
    <section className="homeStyles">
      <Hero />
      <PostsSection />
    </section>
  );
}
