import { Card, CardContent } from '@/components/ui/card';
import { 
  FileText, 
  ClipboardCheck, 
  CheckCircle, 
  Wallet,
  ArrowRight
} from 'lucide-react';

const ComoFunciona = () => {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Solicita tu Préstamo',
      description: 'Contáctanos por teléfono o WhatsApp y cuéntanos cuánto dinero necesitas. Te explicaremos todas las opciones disponibles para ti.',
      color: 'bg-[#003366]',
    },
    {
      number: '02',
      icon: ClipboardCheck,
      title: 'Presenta tus Documentos',
      description: 'Solo necesitas tu INE vigente y un comprobante de domicilio actualizado. ¡Sin más papeleo ni complicaciones!',
      color: 'bg-[#004080]',
    },
    {
      number: '03',
      icon: CheckCircle,
      title: 'Evaluación Rápida',
      description: 'En solo 10 minutos evaluamos tu solicitud según tu capacidad de pago. Sin consultar buró de crédito.',
      color: 'bg-[#0059b3]',
    },
    {
      number: '04',
      icon: Wallet,
      title: 'Recibe tu Dinero',
      description: 'Una vez aprobado, recibes tu dinero inmediatamente. Los pagos son semanales con cobro a domicilio.',
      color: 'bg-[#D4AF37]',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#003366]/10 text-[#003366] font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Proceso Simple
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366] mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Obtener tu préstamo con Inver-Fácil FN es muy fácil. 
            Solo sigue estos 4 simples pasos y en minutos tendrás tu dinero.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#003366] via-[#004080] to-[#D4AF37] -translate-y-1/2 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  {/* Number Badge */}
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Step Number */}
                  <div className="text-5xl font-bold text-gray-200 mb-4">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold text-[#003366] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-[#003366] mb-1">
                ¿Listo para comenzar?
              </h3>
              <p className="text-gray-600">
                Solicita tu préstamo ahora y recibe respuesta en 10 minutos
              </p>
            </div>
            <a
              href="tel:9833407230"
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#C4A030] text-[#003366] font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
            >
              Llamar Ahora
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
