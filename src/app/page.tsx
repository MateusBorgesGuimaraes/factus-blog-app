import { Gallery } from '@/components/pages/Home/Gallery/indesx';
import { Hero } from '@/components/pages/Home/Hero';
import { Highlights } from '@/components/pages/Home/Highlights';
import { PostsSection } from '@/components/pages/Home/Posts';

export default function Home() {
  return (
    <section className="homeStyles">
      <Hero />
      <PostsSection />
      <Highlights />
      <Gallery />
    </section>
  );
}
