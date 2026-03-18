import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle2, 
  XCircle,
  User,
  Home,
  FileText,
  Users,
  AlertCircle
} from 'lucide-react';

const Requisitos = () => {
  const requisitosSolicitante = [
    { text: 'Tener entre 21 y 65 años de edad', icon: User },
    { text: 'Ser asalariado, emprendedor o tener empleo fijo', icon: User },
    { text: 'Contar con casa propia (no indispensable)', icon: Home },
    { text: 'Vivir en la zona de cobertura', icon: Home },
  ];

  const requisitosDocumentos = [
    { text: 'Copia de INE vigente', icon: FileText },
    { text: 'Comprobante de domicilio actualizado', icon: FileText },
  ];

  const requisitosAval = [
    { text: 'Tener entre 21 y 65 años de edad', icon: User },
    { text: 'No vivir en el mismo domicilio que el solicitante', icon: Home },
    { text: 'Contar con casa propia', icon: Home },
    { text: 'Vivir en la misma zona', icon: Home },
    { text: 'Copia de INE vigente y comprobante de domicilio', icon: FileText },
  ];

  const noNecesitas = [
    'Buró de crédito limpio',
    'Ahorro previo',
    'Comprobante de ingresos',
    'Cuenta bancaria',
    'Garantías adicionales',
  ];

  return (
    <section id="requisitos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Requisitos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366] mb-4">
            ¿Qué necesitas?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Te hacemos las cosas fáciles. Solo necesitas cumplir con estos 
            sencillos requisitos para obtener tu préstamo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Solicitante */}
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#003366] to-[#004080] p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Requisitos del Solicitante</h3>
                  <p className="text-white/70 text-sm">Para personas físicas</p>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {requisitosSolicitante.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{req.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Documentos */}
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#004080] to-[#0059b3] p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Documentos Requeridos</h3>
                  <p className="text-white/70 text-sm">Solo dos documentos</p>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {requisitosDocumentos.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{req.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-[#D4AF37]/10 rounded-xl">
                <p className="text-sm text-[#003366] font-medium">
                  <AlertCircle className="w-4 h-4 inline mr-2" />
                  Los documentos deben estar vigentes y ser legibles.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Aval */}
          <Card className="border-0 shadow-xl overflow-hidden lg:col-span-2">
            <div className="bg-gradient-to-r from-[#D4AF37] to-[#C4A030] p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Requisitos del Aval</h3>
                  <p className="text-white/70 text-sm">Persona que respalda tu préstamo</p>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {requisitosAval.map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{req.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* No Necesitas */}
        <div className="mt-12">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-gray-50 to-white">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#003366] mb-2">
                  Lo que NO necesitas
                </h3>
                <p className="text-gray-600">
                  En Inver-Fácil FN hacemos las cosas diferentes
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {noNecesitas.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Requisitos;
