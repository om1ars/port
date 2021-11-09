import HeroSection from './components/heroSection';
import About from './components/about';
import './App.css'

export default function App() {
  return (
    <div  className='side__text'>
      <h1>Portfolio</h1>
      <HeroSection />
      <About />
    </div>
  );
}
