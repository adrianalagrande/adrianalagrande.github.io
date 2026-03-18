import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Beneficios', id: 'beneficios' },
    { label: 'Cómo Funciona', id: 'como-funciona' },
    { label: 'Requisitos', id: 'requisitos' },
    { label: 'Calculadora', id: 'calculadora' },
    { label: 'Contacto', id: 'contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#003366] to-[#004080] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">IF</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight transition-colors ${
                isScrolled ? 'text-[#003366]' : 'text-white'
              }`}>
                Inver-Fácil
              </span>
              <span className={`text-xs font-medium transition-colors ${
                isScrolled ? 'text-[#D4AF37]' : 'text-[#FFD700]'
              }`}>
                FN
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all hover:bg-[#003366]/10 ${
                  isScrolled ? 'text-[#003366]' : 'text-white hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:9833407230"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled ? 'text-[#003366]' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              983 340 7230
            </a>
            <Button
              onClick={() => scrollToSection('contacto')}
              className="bg-[#D4AF37] hover:bg-[#C4A030] text-[#003366] font-semibold px-6"
            >
              Solicitar Préstamo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-[#003366]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white rounded-xl shadow-xl mt-2 p-4 border border-gray-100">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-4 py-3 text-left text-[#003366] font-medium rounded-lg hover:bg-[#003366]/5 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <hr className="my-2" />
              <a
                href="tel:9833407230"
                className="flex items-center gap-2 px-4 py-3 text-[#003366] font-medium"
              >
                <Phone className="w-4 h-4" />
                983 340 7230
              </a>
              <Button
                onClick={() => scrollToSection('contacto')}
                className="bg-[#D4AF37] hover:bg-[#C4A030] text-[#003366] font-semibold w-full mt-2"
              >
                Solicitar Préstamo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
