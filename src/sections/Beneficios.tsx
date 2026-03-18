import { Card, CardContent } from '@/components/ui/card';
import { 
  Clock, 
  Home, 
  UserCheck, 
  TrendingUp, 
  Shield, 
  Banknote,
  FileCheck,
  Users
} from 'lucide-react';

const Beneficios = () => {
  const beneficios = [
    {
      icon: Clock,
      title: 'Trámite Rápido',
      description: 'Aprobación en solo 10 minutos. Sin largas esperas ni trámites complicados.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Shield,
      title: 'Sin Buró de Crédito',
      description: 'No consultamos buró de crédito. Tu historial no es impedimento.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Banknote,
      title: 'Sin Ahorro Previo',
      description: 'No necesitas tener ahorros para solicitar tu préstamo.',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Home,
      title: 'Cobro a Domicilio',
      description: 'Nos acercamos a tu hogar para recibir tus pagos semanales.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: UserCheck,
      title: 'Sin Aval',
      description: 'No necesitas aval ni garantías para obtener tu préstamo.',
      color: 'from-rose-500 to-rose-600',
    },
    {
      icon: TrendingUp,
      title: 'Montos Flexibles',
      description: 'Desde $3,000 hasta $10,000 según tu capacidad de pago.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: FileCheck,
      title: 'Requisitos Mínimos',
      description: 'Solo necesitas INE y comprobante de domicilio vigente.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Users,
      title: 'Para Todos',
      description: 'Asalariados, emprendedores o con empleo fijo. Todos son bienvenidos.',
      color: 'from-teal-500 to-teal-600',
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] font-semibold px-4 py-2 rounded-full text-sm mb-4">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366] mb-4">
            Beneficios que nos distinguen
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            En Inver-Fácil FN te ofrecemos las mejores condiciones para que obtengas 
            tu préstamo de forma rápida, segura y sin complicaciones.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((beneficio, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${beneficio.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <beneficio.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-2">
                  {beneficio.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {beneficio.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid sm:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-[#003366] to-[#004080] rounded-2xl text-white">
            <div className="text-4xl sm:text-5xl font-bold text-[#D4AF37] mb-2">+1,000</div>
            <p className="text-white/80">Préstamos otorgados</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-[#003366] to-[#004080] rounded-2xl text-white">
            <div className="text-4xl sm:text-5xl font-bold text-[#D4AF37] mb-2">10</div>
            <p className="text-white/80">Minutos para aprobación</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-[#003366] to-[#004080] rounded-2xl text-white">
            <div className="text-4xl sm:text-5xl font-bold text-[#D4AF37] mb-2">98%</div>
            <p className="text-white/80">Clientes satisfechos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
