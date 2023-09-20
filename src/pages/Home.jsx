import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Work from '../components/Work/Work';
import Team from '../components/Team/Team';
import Clients from '../components/Clients/Clients';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Work />
        <Team />
        <Clients />
      </main>
    </>
  );
}
