'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Temel Kavramlar', href: '/temel-kavramlar' },
  { name: 'Jeotermal Enerji', href: '/jeotermal-enerji' },
  { name: 'Dalga ve Okyanus Enerjisi', href: '/dalga-okyanus-enerjisi' },
  { name: 'Rüzgâr Enerjisi', href: '/ruzgar-enerjisi' },
  { name: 'Hidroelektrik Enerji', href: '/hidroelektrik-enerji' },
  { name: 'Güneş Enerjisi', href: '/gunes-enerjisi' },
  { name: 'Biyokütle Enerjisi', href: '/biyokutle-enerjisi' },
  { name: 'Hidrojen ve Nükleer Enerji', href: '/hidrojen-nukleer-enerji' },
  { name: 'Testler', href: '/testler' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Buton sınıfı oluşturucu fonksiyon
  const getButtonClass = (link: NavLink): string => {
    const baseClasses = "rounded-md text-sm font-medium";
    const stateClasses = pathname === link.href ? 'bg-green-900 text-white' : 'text-gray-100 hover:bg-green-600';
    
    // Hidrojen & Nükleer butonu için özel sınıflar
    if (link.href === '/hidrojen-nukleer-enerji') {
      return `px-2 py-1.5 ${baseClasses} ${stateClasses} text-center`;
    }
    
    // Diğer butonlar için standart sınıflar
    return `px-3 py-2 ${baseClasses} ${stateClasses}`;
  };

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              YENİLENEBİLİR ENERJİ
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center">
            <div className="flex items-center space-x-2 mr-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={getButtonClass(link)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Developer Name Section - moved to the right */}
            <a 
              href="https://www.linkedin.com/in/berkay-gunes/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-white hover:text-green-200 border-l pl-4 ml-2 border-green-600"
            >
              Yasin Berkay Güneş
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <a 
              href="https://www.linkedin.com/in/berkay-gunes/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-white mr-3"
            >
              Y.B.G.
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:bg-green-600 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                pathname === link.href
                  ? 'bg-green-900 text-white'
                  : 'text-gray-100 hover:bg-green-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 