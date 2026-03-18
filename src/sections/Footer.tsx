import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Facebook,
  Instagram,
  Shield,
  CheckCircle
} from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Beneficios', id: 'beneficios' },
    { label: 'Cómo Funciona', id: 'como-funciona' },
    { label: 'Requisitos', id: 'requisitos' },
    { label: 'Calculadora', id: 'calculadora' },
    { label: 'Contacto', id: 'contacto' },
  ];

  return (
    <footer className="bg-[#003366] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#C4A030] rounded-full flex items-center justify-center">
                <span className="text-[#003366] font-bold text-xl">IF</span>
              </div>
              <div>
                <span className="font-bold text-xl">Inver-Fácil</span>
                <span className="block text-[#D4AF37] text-sm font-medium">FN</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Tu crédito sin complicaciones. Préstamos personales rápidos, 
              seguros y accesibles para todos.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/529833407230" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm">Teléfono</p>
                  <a href="tel:9833407230" className="text-white hover:text-[#D4AF37] transition-colors">
                    983 340 7230
                  </a>
                  <br />
                  <a href="tel:9991779465" className="text-white hover:text-[#D4AF37] transition-colors">
                    999 177 9465
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm">Dirección</p>
                  <p className="text-white text-sm">
                    Calle 34 No 161<br />
                    Por 35 y 37<br />
                    Colonia Centro
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm">Horario</p>
                  <p className="text-white text-sm">
                    Lun - Vie: 9:00 - 18:00<br />
                    Sáb: 9:00 - 14:00
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Trust Badges */}
          <div>
            <h4 className="font-bold text-lg mb-6">Confianza</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                <Shield className="w-8 h-8 text-[#D4AF37]" />
                <div>
                  <p className="text-white font-medium text-sm">Seguro y Confiable</p>
                  <p className="text-white/60 text-xs">Tu información está protegida</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                <CheckCircle className="w-8 h-8 text-[#D4AF37]" />
                <div>
                  <p className="text-white font-medium text-sm">+1,000 Clientes</p>
                  <p className="text-white/60 text-xs">Nos respaldan</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                <Clock className="w-8 h-8 text-[#D4AF37]" />
                <div>
                  <p className="text-white font-medium text-sm">10 Minutos</p>
                  <p className="text-white/60 text-xs">Tiempo de aprobación</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Inver-Fácil FN. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Aviso de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
