import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Unexplored', path: '/unexplored' },
    { name: 'Top', path: '/top' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 transform ${isScrolled || isMobileMenuOpen || location.pathname !== '/'
        ? 'bg-[#2a1f1b] shadow-lg py-4'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-widest text-[#f29066] z-50 relative group"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            KASHI
            <span className="block text-[10px] tracking-[0.4em] text-[#e6d1b1] group-hover:text-[#f29066] transition-colors">
              THE ETERNAL CITY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm uppercase tracking-widest hover:text-[#f29066] transition-colors py-2 group ${location.pathname === item.path
                  ? 'text-[#f29066]'
                  : 'text-[#e6d1b1]'
                  }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#f29066] transform transition-transform duration-300 ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#e6d1b1] z-50 hover:text-[#f29066] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#2a1f1b] z-40 transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-2xl font-light tracking-widest hover:text-[#f29066] transition-colors ${location.pathname === item.path ? 'text-[#f29066]' : 'text-[#f8f5f2]'
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
