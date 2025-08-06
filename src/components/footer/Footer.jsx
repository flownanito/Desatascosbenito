import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-service-green text-white">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Información de la empresa */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-service-green font-bold text-lg">SH</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">ServiHogar Pro</h3>
                <p className="text-sm opacity-80">Fontanería & Cerrajería</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Más de 10 años ofreciendo servicios profesionales de fontanería y cerrajería. 
              Tu tranquilidad es nuestra prioridad.
            </p>
          </div>

          {/* Contacto rápido */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="opacity-80" />
                <span className="font-semibold text-red-200">911 234 567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="opacity-80" />
                <span>info@servihogarpro.es</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="opacity-80" />
                <span>Calle Principal 123, Madrid</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="opacity-80" />
                <span>Emergencias 24/7</span>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-bold mb-4">Nuestros Servicios</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="opacity-80">• Reparación de fugas</div>
              <div className="opacity-80">• Apertura de puertas</div>
              <div className="opacity-80">• Instalaciones</div>
              <div className="opacity-80">• Cambio cerraduras</div>
              <div className="opacity-80">• Mantenimiento</div>
              <div className="opacity-80">• Emergencias 24/7</div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm opacity-80">
            <p>&copy; 2024 ServiHogar Pro. Todos los derechos reservados.</p>
            <p className="mt-2 sm:mt-0">Diseño web profesional y minimalista</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;