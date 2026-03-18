import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Calculator, TrendingUp, Calendar, DollarSign, Info } from 'lucide-react';

const Calculadora = () => {
  const [monto, setMonto] = useState<number>(5000);
  const [semanas, setSemanas] = useState<number>(16);

  // Tasa de interés: $83 por cada $1,000 (8.3% semanal aprox)
  const tasaPorMil = 83;
  const pagoSemanal = Math.round((monto / 1000) * tasaPorMil);
  const pagoTotal = pagoSemanal * semanas;
  const intereses = pagoTotal - monto;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const montosPredefinidos = [3000, 5000, 7000, 10000];
  const semanasPredefinidas = [8, 12, 16, 20];

  return (
    <section id="calculadora" className="py-20 bg-gradient-to-br from-[#003366] to-[#004080]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-white/10 text-[#D4AF37] font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Simulador
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Calcula tu préstamo
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ajusta el monto y el plazo para ver cuánto pagarás semanalmente. 
            Sin sorpresas, todo transparente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Calculator Controls */}
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#003366] rounded-xl flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#003366]">Simulador de Préstamo</h3>
                  <p className="text-gray-500 text-sm">Ajusta según tus necesidades</p>
                </div>
              </div>

              {/* Monto Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#003366]" />
                    ¿Cuánto necesitas?
                  </label>
                  <span className="text-2xl font-bold text-[#003366]">
                    {formatCurrency(monto)}
                  </span>
                </div>
                <Slider
                  value={[monto]}
                  onValueChange={(value) => setMonto(value[0])}
                  min={3000}
                  max={10000}
                  step={500}
                  className="mb-4"
                />
                <div className="flex gap-2 flex-wrap">
                  {montosPredefinidos.map((m) => (
                    <button
                      key={m}
                      onClick={() => setMonto(m)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        monto === m
                          ? 'bg-[#003366] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {formatCurrency(m)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Semanas Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#003366]" />
                    ¿A cuántas semanas?
                  </label>
                  <span className="text-2xl font-bold text-[#003366]">
                    {semanas} semanas
                  </span>
                </div>
                <Slider
                  value={[semanas]}
                  onValueChange={(value) => setSemanas(value[0])}
                  min={8}
                  max={20}
                  step={4}
                  className="mb-4"
                />
                <div className="flex gap-2 flex-wrap">
                  {semanasPredefinidas.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSemanas(s)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        semanas === s
                          ? 'bg-[#003366] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {s} semanas
                    </button>
                  ))}
                </div>
              </div>

              {/* Info Note */}
              <div className="flex items-start gap-2 p-4 bg-[#D4AF37]/10 rounded-xl">
                <Info className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">
                  Por cada <span className="font-bold text-[#003366]">$1,000</span> pagas solo{' '}
                  <span className="font-bold text-[#D4AF37]">$83</span> semanales.
                  Ejemplo: $5,000 = $415 semanales por 16 semanas.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Results Card */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-[#D4AF37] to-[#C4A030]">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Resumen de tu Préstamo</h3>
                  <p className="text-white/70 text-sm">Estos son los detalles</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Pago Semanal */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <p className="text-white/80 text-sm mb-2">Pago semanal</p>
                  <p className="text-5xl font-bold text-white">
                    {formatCurrency(pagoSemanal)}
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    durante {semanas} semanas
                  </p>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-white/70 text-sm mb-1">Monto solicitado</p>
                    <p className="text-xl font-bold text-white">
                      {formatCurrency(monto)}
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-white/70 text-sm mb-1">Plazo</p>
                    <p className="text-xl font-bold text-white">
                      {semanas} semanas
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-white/70 text-sm mb-1">Intereses</p>
                    <p className="text-xl font-bold text-white">
                      {formatCurrency(intereses)}
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-white/70 text-sm mb-1">Total a pagar</p>
                    <p className="text-xl font-bold text-white">
                      {formatCurrency(pagoTotal)}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  onClick={() => {
                    const element = document.getElementById('contacto');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-white hover:bg-gray-100 text-[#003366] font-bold py-6 text-lg"
                >
                  Solicitar este préstamo
                </Button>

                <p className="text-center text-white/60 text-sm">
                  Esta es una simulación. Los montos pueden variar según evaluación.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Calculadora;
