import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Shield, Wallet, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    { icon: Clock, text: 'Trámite en 10 minutos' },
    { icon: Shield, text: 'Sin buró de crédito' },
    { icon: Wallet, text: 'Cobro a domicilio' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003366] via-[#004080] to-[#0059b3]">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Préstamos personales confiables</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Tu crédito{' '}
              <span className="text-[#D4AF37]">sin</span>{' '}
              complicaciones
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Préstamos personales de <span className="text-[#D4AF37] font-semibold">$3,000 a $10,000</span> pesos. 
              Aprobación rápida, pagos semanales y cobro a domicilio.
            </p>

            {/* Quick Benefits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2"
                >
                  <benefit.icon className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-white text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection('contacto')}
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#C4A030] text-[#003366] font-bold px-8 py-6 text-lg group"
              >
                Solicitar Ahora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('calculadora')}
                size="lg"
                variant="outline"
                className="border-white/50 bg-transparent text-white hover:bg-white/20 hover:text-white px-8 py-6 text-lg"
              >
                Calcular Préstamo
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>Sin aval</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>Sin ahorro previo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>Para asalariados y emprendedores</span>
              </div>
            </div>
          </div>

          {/* Right Content - Card */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#003366] to-[#004080] rounded-full flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366] text-lg">Inver-Fácil FN</h3>
                    <p className="text-gray-500 text-sm">Tu mejor opción financiera</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-[#003366]/5 to-transparent rounded-xl p-4">
                    <p className="text-gray-600 text-sm mb-1">Monto disponible</p>
                    <p className="text-3xl font-bold text-[#003366]">$3,000 - $10,000</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#D4AF37]/10 rounded-xl p-4">
                      <p className="text-gray-600 text-sm mb-1">Pagos</p>
                      <p className="text-lg font-bold text-[#003366]">Semanales</p>
                    </div>
                    <div className="bg-[#D4AF37]/10 rounded-xl p-4">
                      <p className="text-gray-600 text-sm mb-1">Aprobación</p>
                      <p className="text-lg font-bold text-[#003366]">10 min</p>
                    </div>
                  </div>

                  <div className="border-t pt-4 mt-4">
                    <p className="text-gray-600 text-sm mb-2">Ejemplo de préstamo:</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#003366] font-medium">$5,000</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-[#D4AF37] font-bold">$415 x 16 semanas</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-[#D4AF37] text-[#003366] rounded-full px-4 py-2 font-bold text-sm shadow-lg animate-bounce">
                ¡Aprobación rápida!
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#003366]">Clientes satisfechos</p>
                  <p className="text-xs text-gray-500">+1,000 préstamos otorgados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
