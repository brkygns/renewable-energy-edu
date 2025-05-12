import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/quiz/renewable.jpg"
            alt="Yenilenebilir Enerji Hero"
            fill
            className="object-cover"
            style={{ zIndex: 1 }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" style={{ zIndex: 2 }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white" style={{ zIndex: 3 }}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Yenilenebilir Enerji Kaynakları
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8">
            Geleceğimizi şekillendirecek sürdürülebilir enerji kaynakları hakkında 
            kapsamlı ve interaktif eğitim platformuna hoş geldiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/temel-kavramlar" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
            >
              Eğitime Başla
            </Link>
          </div>
        </div>
      </section>

      {/* Energy Sources Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Enerji Kaynakları
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {energySources.map((source) => (
              <Link 
                key={source.title} 
                href={source.href}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 relative flex items-center justify-center bg-black">
                  <Image
                    src={source.image}
                    alt={source.title}
                    fill
                    className="object-cover"
                    style={{ zIndex: 1 }}
                    sizes="(max-width: 768px) 100vw, 700px"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40" style={{ zIndex: 2 }}></div>
                  <h3 className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white" style={{ zIndex: 3 }}>
                    {source.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-black">{source.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Learning */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            İnteraktif Öğrenme
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-green-600 text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Dersler</h3>
              <p className="text-black">
                Karmaşık kavramları anlamanıza yardımcı olacak açıklayıcı videolar ve animasyonlar.
              </p>
              <Link href="/videolar" className="mt-4 inline-block text-green-600 hover:underline">
                Videoları İncele
              </Link>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-600 text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Testler</h3>
              <p className="text-black">
                Bilginizi pekiştirmek için interaktif testler ve değerlendirme araçları.
              </p>
              <Link href="/testler" className="mt-4 inline-block text-blue-600 hover:underline">
                Testleri Çöz
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Geleceğin Enerji Çözümlerini Keşfedin</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Yenilenebilir enerji kaynakları hakkında daha fazla bilgi edinmek için eğitim platformumuzu keşfedin.
          </p>
          <Link 
            href="/temel-kavramlar" 
            className="bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg transition-colors"
          >
            Hemen Başla
          </Link>
        </div>
      </section>
    </div>
  );
}

const energySources = [
  {
    title: "Güneş Enerjisi",
    description: "Güneş panelleri ve konsantre güneş enerjisi teknolojileri hakkında bilgi edinin.",
    image: "/images/quiz/solar.jpg",
    href: "/gunes-enerjisi"
  },
  {
    title: "Rüzgâr Enerjisi",
    description: "Rüzgâr türbinlerinin çalışma prensibi ve kurulum süreçlerini keşfedin.",
    image: "/images/quiz/wind.jpg",
    href: "/ruzgar-enerjisi"
  },
  {
    title: "Hidroelektrik Enerji",
    description: "Su gücünden elektrik üretimi ve baraj sistemleri hakkında bilgi edinin.",
    image: "/images/quiz/hydro.jpg",
    href: "/hidroelektrik-enerji"
  },
  {
    title: "Jeotermal Enerji",
    description: "Yeraltı ısısından enerji üretimi ve uygulamaları hakkında bilgi edinin.",
    image: "/images/quiz/geothermal.jpg",
    href: "/jeotermal-enerji"
  },
  {
    title: "Biyokütle Enerjisi",
    description: "Organik maddelerden enerji üretimi ve sürdürülebilirlik hakkında bilgi edinin.",
    image: "/images/quiz/biomass.jpg",
    href: "/biyokutle-enerjisi"
  },
  {
    title: "Dalga ve Okyanus Enerjisi",
    description: "Deniz dalgalarından ve okyanus akıntılarından enerji üretimi hakkında bilgi edinin.",
    image: "/images/quiz/wave.jpg",
    href: "/dalga-okyanus-enerjisi"
  },
  {
    title: "Hidrojen ve Nükleer Enerji",
    description: "Hidrojen yakıt hücreleri ve nükleer enerji teknolojileri hakkında bilgi edinin.",
    image: "/images/quiz/hydrogen.jpg",
    href: "/hidrojen-nukleer-enerji"
  }
];
