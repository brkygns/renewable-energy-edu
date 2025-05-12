import Link from 'next/link';

export const metadata = {
  title: 'Temel Kavramlar - Yenilenebilir Enerji Kaynakları',
  description: 'Yenilenebilir enerji kaynakları hakkında temel kavramlar, tanımlar ve kaynakların önemi.',
};

export default function BasicConceptsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gradient-to-r from-green-800 to-blue-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full bg-green-800 bg-opacity-70">
            {/* Temel kavramlar görseli */}
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Yenilenebilir Enerji Kavramları
          </h1>
          <p className="text-xl max-w-3xl mb-4">
            Yenilenebilir enerji kaynakları ve temel prensipleri hakkında bilgi edinin.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Yenilenebilir Enerji Nedir?</h2>
          <div className="prose max-w-none leading-relaxed text-black">
            <p>
              Yenilenebilir enerji, doğal süreçlerden elde edilen ve tükenmeden sürekli olarak yenilenen enerji kaynaklarını ifade eder. 
              Bu kaynaklar, güneş, rüzgâr, su, jeotermal ısı ve biyokütle gibi doğal olaylardan elde edilir. Yenilenebilir enerji 
              kaynakları, fosil yakıtların aksine, kullanıldıkça tükenmeyen ve çevreye çok daha az zarar veren enerji alternatifleridir.
            </p>
            <p className="mt-4">
              Yenilenebilir enerji kavramı, sürdürülebilirlik prensibiyle yakından ilişkilidir. Sürdürülebilir enerji, gelecek 
              nesillerin ihtiyaçlarını karşılama kabiliyetlerini tehlikeye atmadan, günümüz ihtiyaçlarını karşılayan enerji üretim 
              ve tüketim yöntemlerini içerir. Yenilenebilir enerji kaynakları, doğaları gereği sürdürülebilir olma potansiyeline 
              sahiptir, çünkü tükenmedikleri sürece gelecek nesiller tarafından da kullanılabilirler.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Yenilenebilir ve Yenilenemeyen Enerji Kaynakları Arasındaki Farklar</h2>
          <div className="overflow-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Özellik</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Yenilenebilir Kaynaklar</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Yenilenemeyen Kaynaklar</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {comparisonData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">{item.property}</td>
                    <td className="px-6 py-4 text-sm text-black">{item.renewable}</td>
                    <td className="px-6 py-4 text-sm text-black">{item.nonRenewable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Yenilenebilir Enerji Kaynaklarının Önemi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="prose max-w-none leading-relaxed text-black">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Çevresel Açıdan Önemi</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Yenilenebilir enerji kaynakları, geleneksel fosil yakıtlardan çok daha az sera gazı emisyonu üretir, bu da iklim değişikliğiyle mücadelede kritik önem taşır.</li>
                <li>Hava ve su kirliliğini azaltarak, genel çevre sağlığını iyileştirir.</li>
                <li>Doğal kaynakların ve biyoçeşitliliğin korunmasına katkıda bulunur.</li>
                <li>Ekosistemlerin ve doğal yaşam alanlarının korunmasına yardımcı olur.</li>
                <li>Su, toprak ve orman kaynakları üzerindeki baskıyı azaltır.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Ekonomik Açıdan Önemi</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Yenilenebilir enerji sektörü, yeni istihdam olanakları yaratır ve yerel ekonomileri güçlendirir.</li>
                <li>Enerji ithalatına bağımlılığı azaltarak, enerji güvenliğini artırır ve ekonomik istikrara katkıda bulunur.</li>
                <li>Teknolojik yenilikleri ve araştırma-geliştirme faaliyetlerini teşvik eder.</li>
                <li>Uzun vadede, yenilenebilir enerji teknolojilerinin maliyetleri düşerken, fosil yakıt fiyatları genellikle artış eğilimindedir.</li>
              </ul>
            </div>

            <div className="prose max-w-none leading-relaxed text-black">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Sosyal Açıdan Önemi</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Yenilenebilir enerji, elektriğe erişimi olmayan uzak bölgelerde enerji erişimini artırabilir, bu da yaşam kalitesini iyileştirir.</li>
                <li>Fosil yakıtlarla ilişkili sağlık sorunlarını azaltarak, toplum sağlığını iyileştirir.</li>
                <li>Enerji demokratikleşmesini destekler, insanların kendi enerjilerini üretmelerine olanak tanır.</li>
                <li>Enerji yoksulluğunu azaltmaya yardımcı olabilir, özellikle gelişmekte olan ülkelerde.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Küresel ve Jeopolitik Açıdan Önemi</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Enerji kaynaklarının daha adil dağılımını sağlayarak, enerji konusundaki küresel çatışmaları azaltabilir.</li>
                <li>Fosil yakıt rezervlerine sahip ülkelere olan bağımlılığı azaltır.</li>
                <li>Uluslararası işbirliğini teşvik eder, özellikle iklim değişikliği gibi küresel sorunlarla mücadelede.</li>
                <li>Sürdürülebilir kalkınma hedeflerine ulaşmak için kritik öneme sahiptir.</li>
                <li>Gelecek nesiller için daha sürdürülebilir ve yaşanabilir bir dünya sağlar.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Yenilenebilir Enerji Kaynakları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {energySources.map((source, index) => (
              <Link 
                key={index} 
                href={source.href}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-green-700 to-blue-700 flex items-center justify-center"
                  >
                    <h3 className="text-white text-xl font-semibold text-center p-4">{source.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{source.title}</h3>
                  <p className="text-black text-sm">{source.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Interactive Elements */}
        <div className="bg-green-700 text-white p-6 md:p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-4">Bilgilerinizi Test Edin</h2>
          <p className="mb-6">Bu konuda öğrendiklerinizi pekiştirmek için testlerimizi çözün.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/testler" 
              className="bg-white text-green-700 hover:bg-gray-100 font-bold py-2 px-6 rounded-md text-center transition-colors"
            >
              Testlere Git
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const comparisonData = [
  {
    property: "Yenilenme Süresi",
    renewable: "İnsan ömrü ölçeğinde sürekli olarak yenilenir (güneş, rüzgâr, vb.)",
    nonRenewable: "Oluşması milyonlarca yıl sürer (kömür, petrol, doğal gaz)"
  },
  {
    property: "Çevresel Etki",
    renewable: "Genellikle temiz, düşük emisyon ve daha az çevresel zarar",
    nonRenewable: "Yüksek karbon emisyonu, hava ve su kirliliği, çevresel tahribat"
  },
  {
    property: "Kaynaklar",
    renewable: "Güneş, rüzgâr, su, jeotermal, biyokütle",
    nonRenewable: "Kömür, petrol, doğal gaz, nükleer yakıtlar (uranyum)"
  },
  {
    property: "Maliyet Eğilimi",
    renewable: "Teknolojik gelişmelerle düşme eğiliminde",
    nonRenewable: "Kaynaklar azaldıkça artma eğiliminde"
  },
  {
    property: "Erişilebilirlik",
    renewable: "Coğrafi olarak daha yaygın, ancak yoğunluk değişebilir",
    nonRenewable: "Belirli bölgelerde yoğunlaşmış, eşitsiz dağılım"
  },
  {
    property: "Enerji Güvenliği",
    renewable: "Yerel kaynaklara dayalı, bağımsızlığı artırır",
    nonRenewable: "Genellikle ithalata bağımlılık, jeopolitik riskler"
  },
  {
    property: "Depolama",
    renewable: "Bazı kaynaklar için zorluklar (güneş, rüzgâr)",
    nonRenewable: "Nispeten kolay depolanabilir ve taşınabilir"
  }
];

const energySources = [
  {
    title: "Güneş Enerjisi",
    description: "Güneşten gelen ışınların elektrik veya ısı enerjisine dönüştürülmesi.",
    image: "/images/quiz/solar.jpg",
    href: "/gunes-enerjisi"
  },
  {
    title: "Rüzgâr Enerjisi",
    description: "Rüzgârın kinetik enerjisinin elektrik enerjisine dönüştürülmesi.",
    image: "/images/quiz/wind.jpg",
    href: "/ruzgar-enerjisi"
  },
  {
    title: "Hidroelektrik Enerji",
    description: "Akan suyun mekanik enerjisinden elektrik üretimi.",
    image: "/images/quiz/hydro.jpg",
    href: "/hidroelektrik-enerji"
  },
  {
    title: "Jeotermal Enerji",
    description: "Yerkürenin derinliklerindeki ısı enerjisinin kullanılması.",
    image: "/images/quiz/geothermal.jpg",
    href: "/jeotermal-enerji"
  },
  {
    title: "Biyokütle Enerjisi",
    description: "Organik maddelerin enerji üretimi için kullanılması.",
    image: "/images/quiz/biomass.jpg",
    href: "/biyokutle-enerjisi"
  },
  {
    title: "Dalga ve Okyanus Enerjisi",
    description: "Deniz dalgalarının ve akıntılarının enerjisinden yararlanılması.",
    image: "/images/quiz/wave.jpg",
    href: "/dalga-okyanus-enerjisi"
  },
  {
    title: "Hidrojen Enerjisi",
    description: "Hidrojenin yakıt olarak kullanılmasıyla elde edilen enerji.",
    image: "/images/quiz/hydrogen.jpg",
    href: "/hidrojen-nukleer-enerji"
  },
  {
    title: "Nükleer Enerji",
    description: "Atom çekirdeklerinin parçalanması veya birleşmesiyle açığa çıkan enerji.",
    image: "/images/quiz/nuclear.jpg",
    href: "/hidrojen-nukleer-enerji"
  }
]; 