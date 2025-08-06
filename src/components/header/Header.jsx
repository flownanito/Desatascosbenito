import { Phone, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-service-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SH</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-service">ServiHogar Pro</h1>
              <p className="text-xs text-muted-foreground">Fontanería & Cerrajería</p>
            </div>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-service transition-colors">Inicio</a>
            <a href="#servicios" className="text-foreground hover:text-service transition-colors">Servicios</a>
            <a href="#nosotros" className="text-foreground hover:text-service transition-colors">Nosotros</a>
            <a href="#contacto" className="text-foreground hover:text-service transition-colors">Contacto</a>
          </nav>

          {/* Botón de llamada */}
          <div className="flex items-center space-x-4">
            <Button className="btn-accent hidden sm:flex items-center space-x-2">
              <Phone size={16} />
              <span className="font-medium">911 234 567</span>
            </Button>
            
            {/* Menú móvil */}
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;