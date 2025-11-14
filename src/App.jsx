import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;