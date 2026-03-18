import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  User,
  Mail
} from 'lucide-react';
import { toast } from 'sonner';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('¡Mensaje enviado! Te contactaremos pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfonos',
      items: ['983 340 7230', '999 177 9465'],
      action: 'tel:9833407230',
      color: 'bg-green-500',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      items: ['983 340 7230'],
      action: 'https://wa.me/529833407230',
      color: 'bg-green-600',
    },
    {
      icon: MapPin,
      title: 'Dirección',
      items: ['Calle 34 No 161', 'Por 35 y 37, Colonia Centro'],
      action: '#',
      color: 'bg-red-500',
    },
    {
      icon: Clock,
      title: 'Horario',
      items: ['Lunes a Viernes: 9:00 - 18:00', 'Sábados: 9:00 - 14:00'],
      action: '#',
      color: 'bg-blue-500',
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#003366]/10 text-[#003366] font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366] mb-4">
            ¿Listo para tu préstamo?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Contáctanos por cualquiera de nuestros canales. Estamos listos 
            para ayudarte a obtener tu préstamo de forma rápida y segura.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#003366] rounded-xl flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#003366]">Solicita tu Préstamo</h3>
                  <p className="text-gray-500 text-sm">Te contactaremos en minutos</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#003366] mb-2">
                    ¡Solicitud enviada!
                  </h4>
                  <p className="text-gray-600">
                    Nos pondremos en contacto contigo muy pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="nombre" className="text-gray-700 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Nombre completo
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="telefono" className="text-gray-700 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Teléfono
                    </Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Tu número de teléfono"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Correo electrónico (opcional)
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="mensaje" className="text-gray-700">
                      ¿Cuánto necesitas? (opcional)
                    </Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Ej: Necesito $5,000 pesos para..."
                      rows={3}
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D4AF37] hover:bg-[#C4A030] text-[#003366] font-bold py-6"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-[#003366]/30 border-t-[#003366] rounded-full animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Solicitar Préstamo
                      </span>
                    )}
                  </Button>

                  <p className="text-center text-gray-500 text-sm">
                    Al enviar, aceptas que nos contactemos contigo.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.action}
                className="block group"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className={`w-14 h-14 ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#003366] text-lg">{info.title}</h4>
                      {info.items.map((item, i) => (
                        <p key={i} className="text-gray-600 text-sm">
                          {item}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}

            {/* Quick CTA */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-[#003366] to-[#004080]">
              <CardContent className="p-6 text-center">
                <h4 className="text-white font-bold text-lg mb-2">
                  ¿Prefieres llamar ahora?
                </h4>
                <p className="text-white/70 text-sm mb-4">
                  Estamos disponibles para atenderte
                </p>
                <a
                  href="tel:9833407230"
                  className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#C4A030] text-[#003366] font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  983 340 7230
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
