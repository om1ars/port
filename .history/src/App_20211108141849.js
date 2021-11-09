import HeroSection from './components/heroSection';
import About from './components/about';

export default function App() {
  return (
    <div style={{zIndex: 99}} className=''>
      <h1>Portfolio</h1>
      <HeroSection />
      <About />
    </div>
  );
}
