import { Toaster } from '@/components/ui/sonner';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Beneficios from './sections/Beneficios';
import ComoFunciona from './sections/ComoFunciona';
import Requisitos from './sections/Requisitos';
import Calculadora from './sections/Calculadora';
import Contacto from './sections/Contacto';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <Hero />
        <Beneficios />
        <ComoFunciona />
        <Requisitos />
        <Calculadora />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
