import React, { useState, useEffect, useRef } from 'react';
import { Store, Menu, X } from 'lucide-react';

type NavItem = 'caracteristicas' | 'precios' | 'clientes' | 'equipo';

const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState<NavItem>('precios');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<NavItem, HTMLAnchorElement>>(new Map());

  const navItems: { id: NavItem; label: string }[] = [
    { id: 'caracteristicas', label: 'Características' },
    { id: 'precios', label: 'Precios' },
    { id: 'clientes', label: 'Clientes' },
    { id: 'equipo', label: 'Programadores' }
  ];

  // Update indicator position when active nav changes
  useEffect(() => {
    const activeElement = itemRefs.current.get(activeNav);
    const navElement = navRef.current;

    if (activeElement && navElement) {
      const navRect = navElement.getBoundingClientRect();
      const activeRect = activeElement.getBoundingClientRect();

      setIndicatorStyle({
        left: activeRect.left - navRect.left,
        width: activeRect.width
      });
    }
  }, [activeNav]);

  // Scroll spy using Intersection Observer (más confiable)
  useEffect(() => {
    const sections = ['caracteristicas', 'precios', 'clientes', 'equipo'] as NavItem[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id as NavItem;
            setActiveNav(sectionId);
          }
        });
      },
      {
        // Activar cuando la sección esté en el 20-40% superior de la pantalla
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Initial indicator position
  useEffect(() => {
    const timer = setTimeout(() => {
      const activeElement = itemRefs.current.get(activeNav);
      const navElement = navRef.current;

      if (activeElement && navElement) {
        const navRect = navElement.getBoundingClientRect();
        const activeRect = activeElement.getBoundingClientRect();

        setIndicatorStyle({
          left: activeRect.left - navRect.left,
          width: activeRect.width
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (e: React.MouseEvent, nav: NavItem) => {
    e.preventDefault();
    setActiveNav(nav);
    setMobileMenuOpen(false); // Cerrar menú móvil al navegar

    const element = document.getElementById(nav);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex h-11 w-full max-w-4xl items-center justify-between rounded-full border border-white/10 bg-slate-950/95 px-4 shadow-2xl shadow-black/20">
        {/* Logo */}
        <div className="flex items-center gap-1.5">
          <div className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
            <Store className="h-4 w-4" />
          </div>
          <span className="text-sm font-bold tracking-tight text-white hidden sm:block">DiGuork</span>
        </div>

        {/* Desktop Nav with sliding indicator */}
        <div
          ref={navRef}
          className="hidden md:flex items-center gap-1 rounded-full bg-white/5 p-1 border border-white/5 relative"
        >
          {/* Sliding indicator */}
          <div
            className="absolute top-1 bottom-1 rounded-full bg-white/10 shadow-sm transition-all duration-500 ease-out"
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              transform: 'translateZ(0)'
            }}
          />

          {navItems.map((item) => (
            <a
              key={item.id}
              ref={(el) => {
                if (el) itemRefs.current.set(item.id, el);
              }}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`relative z-10 rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${activeNav === item.id
                ? 'text-white'
                : 'text-slate-300 hover:text-white'
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              const element = document.getElementById('prueba-gratis');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
            className="flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1.5 text-xs font-bold text-slate-950 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            Prueba Gratis
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden ml-1 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto w-full max-w-4xl rounded-2xl border border-white/10 bg-slate-950 p-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${activeNav === item.id
                  ? 'bg-white/10 text-white'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;