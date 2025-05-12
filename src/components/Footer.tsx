import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Yenilenebilir Enerji Eğitim Platformu</h3>
            <p className="text-gray-100 text-sm">
              Lise ve lisans düzeyi öğrenciler için yenilenebilir enerji kaynakları 
              hakkında kapsamlı ve interaktif bir eğitim platformu.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-gray-100 text-sm">
              <li><Link href="/" className="hover:text-green-400">Ana Sayfa</Link></li>
              <li><Link href="/testler" className="hover:text-green-400">Testler</Link></li>
              <li><Link href="/hakkimizda" className="hover:text-green-400">Hakkımızda</Link></li>
              <li><Link href="/iletisim" className="hover:text-green-400">İletişim</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kaynaklar</h3>
            <ul className="space-y-2 text-gray-100 text-sm">
              <li><a href="https://www.iea.org/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Uluslararası Enerji Ajansı (IEA)</a></li>
              <li><a href="https://www.energy.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">ABD Enerji Bakanlığı</a></li>
              <li><a href="https://www.renewableenergyworld.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Renewable Energy World</a></li>
              <li><a href="https://www.sciencedirect.com/journal/renewable-energy" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Renewable Energy Journal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Yenilenebilir Enerji Eğitim Platformu. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
} 