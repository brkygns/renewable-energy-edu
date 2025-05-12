import EnergyPage from '@/components/EnergyPage';

export const metadata = {
  title: 'Güneş Enerjisi - Yenilenebilir Enerji Kaynakları',
  description: 'Güneş enerjisinin tanımı, çalışma prensipleri, avantajları, dezavantajları ve gerçek dünya uygulamaları hakkında bilgi edinin.',
};

export default function SolarEnergyPage() {
  return (
    <EnergyPage
      title="Güneş Enerjisi"
      heroImage="/images/quiz/solar.jpg"
      definition="Güneş enerjisi, güneşten gelen ışınların doğrudan elektrik veya ısı enerjisine dönüştürülmesiyle elde edilen yenilenebilir bir enerji kaynağıdır. Güneş, dünyamızda var olan en büyük enerji kaynağıdır ve her gün dünyaya ulaşan güneş enerjisi, insanlığın bir yılda tükettiği enerjiden çok daha fazladır. Güneş enerjisi, fotovoltaik (PV) hücreler aracılığıyla doğrudan elektriğe dönüştürülebilir veya yoğunlaştırılmış güneş enerjisi sistemleri (CSP) ile ısı üretmek için kullanılabilir. Güneş enerjisi, temiz ve yenilenebilir olması, herhangi bir karbon emisyonu üretmemesi ve dünyanın birçok bölgesinde erişilebilir olması nedeniyle giderek artan bir öneme sahiptir."
      mechanismTitle="Güneş Enerjisi Nasıl Çalışır?"
      mechanismContent="Güneş enerjisi temel olarak iki farklı yöntemle elde edilir:

1. Fotovoltaik (PV) Sistemler: Güneş panelleri, güneş ışığını doğrudan elektrik enerjisine dönüştüren yarı iletken malzemelerden (genellikle silikon) yapılmıştır. Güneş ışınları panel yüzeyine çarptığında, paneldeki atomlar uyarılır ve elektronlar serbest kalır. Bu elektronların akışı elektrik akımını oluşturur. Üretilen doğru akım (DC), bir inverter aracılığıyla alternatif akıma (AC) dönüştürülerek evlerde ve işyerlerinde kullanılabilir hale getirilir.

2. Yoğunlaştırılmış Güneş Enerjisi (CSP) Sistemleri: Bu sistemler aynalar veya lensler kullanarak güneş ışınlarını yoğunlaştırır ve yüksek sıcaklıkta ısı üretir. Üretilen ısı, bir buhar türbini çalıştırmak veya başka bir ısı motoru aracılığıyla elektrik üretmek için kullanılabilir. CSP sistemleri genellikle büyük ölçekli enerji üretimi için kullanılır ve güneş kulesi, parabolik oluk ve Fresnel yansıtıcıları gibi çeşitli tasarımlara sahip olabilir."
      mechanismImage="/images/quiz/solar.jpg"
      advantages={[
        "Yenilenebilir ve sürdürülebilir bir enerji kaynağıdır.",
        "Çevre dostu olup, işletme sırasında karbon emisyonu üretmez.",
        "Operasyonel maliyetleri düşüktür ve bakım gereksinimleri azdır.",
        "Modüler yapısı sayesinde küçük veya büyük ölçekli uygulamalara uyarlanabilir.",
        "Uzak bölgelerde ve şebekeden bağımsız enerji üretimi sağlayabilir.",
        "Enerji bağımsızlığını artırır ve ithal yakıtlara bağımlılığı azaltır.",
        "Teknolojik gelişmelerle verimliliği artmakta ve maliyetleri düşmektedir."
      ]}
      disadvantages={[
        "Güneş ışınlarının yoğunluğu hava koşullarına ve günün saatine bağlıdır.",
        "Gece saatlerinde üretim yapılamaz, bu da depolama sistemlerine ihtiyaç doğurur.",
        "Enerji depolama sistemleri (bataryalar) hala göreceli olarak pahalıdır.",
        "Geniş ölçekli güneş çiftlikleri için büyük arazi alanlarına ihtiyaç vardır.",
        "İlk kurulum maliyetleri yüksek olabilir, ancak bu maliyet giderek düşmektedir.",
        "Panellerin üretimi sırasında bazı toksik maddeler kullanılabilir.",
        "Panel verimliliği zamanla azalabilir (yılda yaklaşık %0.5-1 oranında)."
      ]}
      applications="Güneş enerjisi teknolojileri hem küçük ölçekli hem de büyük ölçekli uygulamalarda giderek yaygınlaşmaktadır. Konut çatılarında kurulan sistemler, ev sahiplerinin elektrik faturalarını azaltmalarını ve bazen fazla üretilen elektriği şebekeye satmalarını sağlar. Ticari binalar ve endüstriyel tesisler, enerji maliyetlerini düşürmek için giderek daha fazla güneş enerjisi sistemleri kurmaktadır.

Büyük ölçekli güneş çiftlikleri, özellikle güneş ışınımının yüksek olduğu bölgelerde önemli miktarda elektrik üretebilir. Örneğin, Çin'deki Tengger Çölü Güneş Parkı, Hindistan'daki Bhadla Güneş Parkı ve ABD'deki Solar Star, dünyanın en büyük güneş enerji tesisleri arasındadır ve yüzlerce megawatt elektrik üretebilmektedir.

Gelecekte, güneş enerjisi teknolojilerinin daha da gelişmesi bekleniyor. Yeni nesil güneş hücreleri, daha yüksek verimlilik ve daha düşük maliyetlerle enerji üretebilecek. Ayrıca, bina entegre fotovoltaik sistemler (BIPV), güneş enerjisini mimari tasarımın bir parçası haline getirerek hem estetik hem de fonksiyonel çözümler sunacak. Şeffaf güneş panelleri, pencere camlarını elektrik üreten yüzeylere dönüştürebilecek. Güneş enerjisiyle çalışan araçlar, gemiler ve hatta uçaklar, ulaşım sektöründe devrim yaratabilir.

Güneş enerjisi ayrıca, tarımsal sulama, içme suyu arıtma ve deniz suyundan tatlı su elde etme gibi özel uygulamalarda da kullanılmaktadır. Özellikle gelişmekte olan ülkelerde, güneş enerjisi temiz su erişimini artırmada önemli bir rol oynayabilir."
      environmentalImpact="Güneş enerjisi, enerji üretimi sırasında herhangi bir sera gazı emisyonu üretmediği için çevre açısından en temiz enerji kaynaklarından biridir. Geleneksel fosil yakıtlara dayalı enerji üretim yöntemlerine kıyasla, güneş enerjisi sistemleri hava kirliliğine, asit yağmurlarına veya iklim değişikliğine doğrudan katkıda bulunmaz.

Bununla birlikte, güneş panellerinin üretimi, nakliyesi ve kurulumu sırasında karbon ayak izi oluşabilir. Ancak, bir güneş enerji sisteminin yaşam döngüsü boyunca ürettiği toplam karbon emisyonu, fosil yakıtlarla çalışan sistemlere göre çok daha düşüktür. Genellikle, bir güneş paneli kullanım ömrü boyunca (25-30 yıl) üretim sürecinde harcanan enerjiyi 1-4 yıl içinde geri kazandırır.

Güneş panelleri üretiminde kullanılan bazı malzemeler (örn. kadmiyum, kurşun) toksik olabilir, ancak endüstri standartları ve düzenlemeleri bu maddelerin çevreye salınımını sınırlar. Ayrıca, panellerin kullanım ömrü sonunda uygun şekilde geri dönüştürülmesi veya bertaraf edilmesi önemlidir. Geri dönüşüm teknolojileri geliştikçe, kullanılmış güneş panellerindeki değerli malzemelerin yeniden kullanımı artmaktadır.

Büyük ölçekli güneş çiftlikleri arazi kullanımı açısından bir etki yaratabilir, ancak bu tesisler genellikle tarımsal değeri düşük olan kurak alanlarda kurulur. Ayrıca, çift kullanımlı güneş tarımı (agrivoltaics) gibi yenilikçi yaklaşımlar, güneş panelleri ile tarımsal üretimi bir arada yapabilmeyi sağlar. Rüzgâr enerjisi gibi diğer yenilenebilir kaynaklarla karşılaştırıldığında, güneş panelleri daha az görsel etki yaratır ve gürültü kirliliğine neden olmaz."
      caseStudies={[
        {
          title: "Noor Ouarzazate Güneş Kompleksi, Fas",
          description: "Dünya'nın en büyük yoğunlaştırılmış güneş enerjisi (CSP) tesisi olup, 580 MW kapasiteye ulaştığında 1 milyon kişiye elektrik sağlayabilecek.",
          imageUrl: "/images/quiz/solar.jpg"
        },
        {
          title: "Benban Güneş Parkı, Mısır",
          description: "Afrika'nın en büyük güneş parkı olan Benban, 1.8 GW kapasitesiyle yılda yaklaşık 3.8 TWh elektrik üreterek 2 milyon ev için elektrik sağlıyor.",
          imageUrl: "/images/quiz/solar.jpg"
        },
        {
          title: "Tesla Güneş Çatı Kiremitleri",
          description: "Geleneksel çatı kiremitlerine benzeyen, ancak güneş enerjisi üreten yenilikçi bir tasarım. Estetik görünüm ve fonksiyonelliği birleştiriyor.",
          imageUrl: "/images/quiz/solar.jpg"
        }
      ]}
      resourceLinks={[
        {
          title: "Uluslararası Enerji Ajansı (IEA) - Güneş Enerjisi",
          url: "https://www.iea.org/fuels-and-technologies/solar"
        },
        {
          title: "Uluslararası Yenilenebilir Enerji Ajansı (IRENA) - Güneş Enerjisi",
          url: "https://www.irena.org/solar"
        },
        {
          title: "ABD Enerji Bakanlığı - Güneş Enerjisi Teknolojileri Ofisi",
          url: "https://www.energy.gov/eere/solar/solar-energy-technologies-office"
        },
        {
          title: "SolarPower Europe - Avrupa Güneş Enerjisi İstatistikleri",
          url: "https://www.solarpowereurope.org/"
        },
        {
          title: "Renewable Energy Journal - Güneş Enerjisi Araştırmaları",
          url: "https://www.sciencedirect.com/journal/renewable-energy/special-issues"
        }
      ]}
    />
  );
} 