'use client';


import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TestsPage() {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<number[]>(Array(quizzes[0].questions.length).fill(-1));
  const [score, setScore] = useState(0);

  const currentQuiz = quizzes[currentQuizIndex];

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    let newScore = 0;
    answers.forEach((answer, index) => {
      if (answer === currentQuiz.questions[index].correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setAnswers(Array(currentQuiz.questions.length).fill(-1));
    setShowResults(false);
    setScore(0);
  };

  const changeQuiz = (index: number) => {
    setCurrentQuizIndex(index);
    setAnswers(Array(quizzes[index].questions.length).fill(-1));
    setShowResults(false);
    setScore(0);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gradient-to-r from-blue-800 to-green-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full bg-blue-800 bg-opacity-70">
            {/* Quiz görseli */}
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Yenilenebilir Enerji Testleri
          </h1>
          <p className="text-xl max-w-3xl mb-4">
            Öğrendiklerinizi test edin ve bilgilerinizi pekiştirin.
          </p>
        </div>
      </section>

      {/* Quiz Selection */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Test Seçin</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {quizzes.map((quiz, index) => (
              <button
                key={index}
                onClick={() => changeQuiz(index)}
                className={`p-4 border rounded-lg transition-colors ${
                  currentQuizIndex === index
                    ? 'bg-green-700 text-white border-green-800'
                    : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-50'
                }`}
              >
                <h3 className="font-semibold text-black">{quiz.title}</h3>
                <p className="text-sm mt-1 opacity-80 text-black">{quiz.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Current Quiz */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{currentQuiz.title}</h2>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
              {currentQuiz.questions.length} Soru
            </span>
          </div>

          {!showResults ? (
            <>
              <div className="space-y-8">
                {currentQuiz.questions.map((question, qIndex) => (
                  <div key={qIndex} className="border rounded-lg p-6">
                    <h3 className="text-black text-lg font-semibold mb-4">{qIndex + 1}. {question.text}</h3>
                    {question.image && (
                      <div className="relative h-60 mb-4">
                        <Image
                          src={question.image}
                          alt={`Soru ${qIndex + 1}`}
                          width={300}
                          height={180}
                        />
                      </div>
                    )}
                    <div className="space-y-3">
                      {question.options.map((option, aIndex) => (
                        <div
                          key={aIndex}
                          onClick={() => handleAnswerSelect(qIndex, aIndex)}
                          className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                            answers[qIndex] === aIndex
                              ? 'bg-blue-100 border-blue-300'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                              answers[qIndex] === aIndex
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-700 text-white'
                            }`}>
                              {String.fromCharCode(65 + aIndex)}
                            </div>
                            <span className="text-black">{option}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={calculateScore}
                  className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
                >
                  Testi Tamamla
                </button>
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="mb-6">
                <div className="inline-block p-4 rounded-full bg-green-100 mb-4">
                  {score >= currentQuiz.questions.length * 0.7 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {score >= currentQuiz.questions.length * 0.7 ? 'Tebrikler!' : 'İyi Deneme!'}
                </h3>
                <p className="text-lg mb-2 text-black">
                  {currentQuiz.questions.length} sorudan {score} doğru yanıt verdiniz.
                </p>
                <p className="text-black">
                  {score >= currentQuiz.questions.length * 0.7
                    ? 'Harika iş çıkardınız! Bu konuya iyi hakimsiniz.'
                    : 'Biraz daha çalışabilirsiniz. İlgili konuları tekrar gözden geçirin.'}
                </p>
              </div>

              <div className="space-y-6 mt-8">
                <h3 className="text-xl font-semibold text-left">Sonuçlar</h3>
                {currentQuiz.questions.map((question, qIndex) => (
                  <div key={qIndex} className={`border rounded-lg p-4 text-left ${
                    answers[qIndex] === question.correctAnswer
                      ? 'border-green-300 bg-green-50'
                      : 'border-red-300 bg-red-50'
                  }`}>
                    <div className="flex items-start">
                      <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                        answers[qIndex] === question.correctAnswer
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                      }`}>
                        {answers[qIndex] === question.correctAnswer ? '✓' : '✗'}
                      </div>
                      <div>
                        <h4 className="text-black font-medium">{qIndex + 1}. {question.text}</h4>
                        <div className="mt-1 text-sm text-black">
                          <span className="font-medium">Sizin yanıtınız:</span> {answers[qIndex] >= 0 ? question.options[answers[qIndex]] : 'Yanıt yok'}
                        </div>
                        <p className="mt-1 text-sm text-green-800 font-medium">
                          Doğru yanıt: {question.options[question.correctAnswer]}
                        </p>
                        {question.explanation && (
                          <div className="mt-2 text-sm p-2 bg-gray-100 rounded">
                            <span className="font-medium text-black">Açıklama:</span> <span className="text-black">{question.explanation}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end space-x-4">
                <button
                  onClick={resetQuiz}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Testi Tekrar Çöz
                </button>
                <Link
                  href={currentQuiz.relatedContentUrl}
                  className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
                >
                  İlgili İçeriğe Git
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Quiz data
const quizzes = [
  {
    title: 'Temel Kavramlar',
    description: 'Yenilenebilir enerji kaynakları hakkında temel bilgiler',
    relatedContentUrl: '/temel-kavramlar',
    questions: [
      {
        text: 'Aşağıdakilerden hangisi yenilenebilir enerji kaynağı değildir?',
        options: ['Güneş Enerjisi', 'Rüzgâr Enerjisi', 'Kömür', 'Jeotermal Enerji'],
        correctAnswer: 2,
        image: '/images/quiz/renewable.jpg',
        explanation: 'Kömür, fosil yakıtlar kategorisine girer ve yenilenebilir değildir. Milyonlarca yıl içinde oluşmuştur ve tüketildiğinde yenilenmesi pratik olarak mümkün değildir.'
      },
      {
        text: 'Yenilenebilir enerji kaynaklarının en önemli çevresel avantajı nedir?',
        options: [
          'Daha ucuz olmaları',
          'Her yerde bulunabilmeleri',
          'Düşük veya sıfır sera gazı emisyonları',
          'Kurulumlarının kolay olması'
        ],
        correctAnswer: 2,
        explanation: 'Yenilenebilir enerji kaynakları, fosil yakıtlarla karşılaştırıldığında çok daha düşük sera gazı emisyonuna sahiptir veya hiç emisyon üretmez, bu da iklim değişikliğiyle mücadelede kritik öneme sahiptir.'
      },
      {
        text: 'Yenilenebilir enerji kaynakları ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
        options: [
          'Tüm yenilenebilir kaynaklar her bölgede eşit derecede verimlidir',
          'Yenilenebilir kaynaklar depolanması en kolay enerji kaynaklarıdır',
          'Yenilenebilir kaynaklar genellikle fosil yakıtlardan daha yüksek enerji yoğunluğuna sahiptir',
          'Yenilenebilir kaynaklar kullanıldıkça tükenmez ve doğal süreçlerle yenilenirler'
        ],
        correctAnswer: 3,
        explanation: 'Yenilenebilir enerji kaynakları, doğal süreçler tarafından sürekli olarak yenilenir ve insan ömrüne kıyasla tükenmezler. Doğru yerde, doğru teknoloji kullanıldığında sürekli enerji sağlayabilirler.'
      },
      {
        text: 'Aşağıdaki enerji kaynaklarından hangisi yenilenebilir enerji kaynağı olarak sınıflandırılmaktadır?',
        options: [
          'Doğal gaz',
          'Petrol',
          'Biyokütle',
          'Kömür'
        ],
        correctAnswer: 2,
        explanation: 'Biyokütle enerjisi, organik maddelerden (bitkiler, ağaç atıkları, tarımsal atıklar vb.) elde edilir ve sürdürülebilir şekilde yönetildiğinde yenilenebilir bir enerji kaynağıdır.'
      },
      {
        text: 'Yenilenebilir enerji kaynaklarının ekonomik faydaları arasında aşağıdakilerden hangisi yer almaz?',
        options: [
          'Enerji bağımsızlığını artırması',
          'Yerel istihdam oluşturması',
          'Yakıt maliyetlerinin olmaması',
          'İlk yatırım maliyetlerinin düşük olması'
        ],
        correctAnswer: 3,
        explanation: 'Yenilenebilir enerji teknolojilerinin ilk yatırım maliyetleri genellikle fosil yakıt alternatiflerine göre daha yüksektir. Ancak, yakıt maliyetlerinin olmaması ve işletme maliyetlerinin düşük olması nedeniyle uzun vadede daha ekonomik olabilirler.'
      }
    ]
  },
  {
    title: 'Güneş Enerjisi',
    description: 'Güneş enerjisi teknolojileri ve uygulamaları',
    relatedContentUrl: '/gunes-enerjisi',
    questions: [
      {
        text: 'Güneş enerjisinden elektrik üretiminde kullanılan fotovoltaik hücrelerin temel çalışma prensibi nedir?',
        options: [
          'Güneş ışığını ısıya dönüştürme',
          'Güneş ışığını doğrudan elektriğe dönüştürme',
          'Güneş ışığını hidrojen gazına dönüştürme',
          'Güneş ışığını manyetik enerjiye dönüştürme'
        ],
        correctAnswer: 1,
        explanation: 'Fotovoltaik hücreler, güneş ışığını doğrudan elektrik enerjisine dönüştüren yarı iletken malzemelerden yapılır. Bu olay fotovoltaik etki olarak bilinir.'
      },
      {
        text: 'Yoğunlaştırılmış güneş enerjisi (CSP) sistemlerinin çalışma prensibi nedir?',
        options: [
          'Güneş ışığını doğrudan elektriğe dönüştürme',
          'Güneş ışığını yoğunlaştırarak yüksek sıcaklıkta ısı üretme',
          'Güneş ışığını rüzgâr enerjisine dönüştürme',
          'Güneş ışığını hidrojen enerjisine dönüştürme'
        ],
        correctAnswer: 1,
        image: '/images/quiz/solar.jpg',
        explanation: 'Yoğunlaştırılmış güneş enerjisi (CSP) sistemleri, aynalar veya lensler kullanarak güneş ışığını belirli bir noktaya yoğunlaştırır ve yüksek sıcaklıkta ısı üretir. Bu ısı, genellikle buhar türbini çalıştırmak için kullanılır.'
      },
      {
        text: 'Güneş enerjisinin en büyük dezavantajı aşağıdakilerden hangisidir?',
        options: [
          'Sadece sıcak bölgelerde kullanılabilmesi',
          'Çok yüksek sera gazı emisyonlarına neden olması',
          'Kesintili olması ve gece saatlerinde üretim yapılamaması',
          'Uygulanabilir teknolojilerin olmaması'
        ],
        correctAnswer: 2,
        explanation: 'Güneş enerjisinin en büyük dezavantajlarından biri kesintili olmasıdır. Gece saatlerinde ve bulutlu havalarda elektrik üretimi azalır veya durur, bu da enerji depolama sistemlerine ihtiyaç doğurur.'
      },
      {
        text: 'Aşağıdakilerden hangisi güneş enerjisinin çevresel avantajlarından biri değildir?',
        options: [
          'İşletme sırasında sera gazı emisyonunun olmaması',
          'Su tüketiminin az olması',
          'Fotovoltaik panel üretiminde hiçbir toksik malzeme kullanılmaması',
          'Gürültü kirliliğine neden olmaması'
        ],
        correctAnswer: 2,
        explanation: 'Fotovoltaik panel üretiminde bazı toksik malzemeler (örn. kadmiyum, kurşun) kullanılabilir. Ancak, endüstri standartları ve düzenlemeler bu maddelerin çevreye salınımını sınırlar ve geri dönüşüm çözümleri geliştirilmektedir.'
      },
      {
        text: 'Güneş enerjisi teknolojileri için aşağıdaki gelecek beklentilerinden hangisi doğru değildir?',
        options: [
          'Panel verimliliğinin artması',
          'Maliyetlerin düşmesi',
          'Depolama teknolojilerinin gelişmesi',
          'Güneş enerjisinin sadece küçük ölçekli uygulamalarla sınırlı kalması'
        ],
        correctAnswer: 3,
        explanation: 'Güneş enerjisi teknolojileri hem küçük hem de büyük ölçekli uygulamalarda kullanılabilir ve kullanımı giderek yaygınlaşmaktadır. Günümüzde büyük güneş çiftlikleri yüzlerce megawatt enerji üretebilmektedir.'
      }
    ]
  },
  {
    title: 'Rüzgâr Enerjisi',
    description: 'Rüzgâr türbinleri ve rüzgâr enerjisi teknolojileri',
    relatedContentUrl: '/ruzgar-enerjisi',
    questions: [
      {
        text: 'Modern rüzgâr türbinleri genellikle kaç kanada sahiptir?',
        options: ['1', '2', '3', '5'],
        correctAnswer: 2,
        explanation: 'Modern rüzgâr türbinleri genellikle 3 kanada sahiptir. Bu tasarım, aerodinamik verimlilik, maliyet ve yapısal sağlamlık arasında optimum bir denge sağlar.'
      },
      {
        text: 'Rüzgâr türbinlerinin rüzgâr hızına bağlı olarak elektrik üretmeye başladığı minimum hız (cut-in hızı) genellikle ne kadardır?',
        options: ['1-2 m/s', '3-4 m/s', '7-8 m/s', '10-12 m/s'],
        correctAnswer: 1,
        explanation: 'Tipik bir rüzgâr türbini yaklaşık 3-4 m/s rüzgâr hızında elektrik üretmeye başlar (cut-in hızı). Nominal gücüne 12-15 m/s civarında ulaşır ve çok yüksek hızlarda (25 m/s üzeri) hasar görmemek için otomatik olarak durur.'
      },
      {
        text: 'Rüzgâr enerjisi ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
        options: [
          'Rüzgâr türbinleri sadece karada kurulabilir',
          'Rüzgâr enerjisi, tüm yenilenebilir enerji kaynakları arasında en yüksek karbon ayak izine sahiptir',
          'Rüzgâr türbinlerinin altındaki arazi, tarım veya hayvancılık için kullanılabilir',
          'Rüzgâr enerjisi, sadece küçük ölçekli elektrik ihtiyaçları için uygundur'
        ],
        correctAnswer: 2,
        image: '/images/quiz/wind.jpg',
        explanation: 'Rüzgâr çiftliklerinde türbinlerin altındaki ve arasındaki araziler genellikle tarım ve hayvancılık gibi diğer amaçlar için kullanılabilir. Bu, arazi kullanım verimliliğini artırır.'
      },
      {
        text: 'Aşağıdakilerden hangisi deniz üstü (offshore) rüzgâr türbinlerinin avantajlarından biri değildir?',
        options: [
          'Daha güçlü ve kararlı rüzgârlardan yararlanma',
          'Görsel etkinin azalması',
          'Daha düşük kurulum ve bakım maliyetleri',
          'Daha büyük türbinlerin kurulabilmesi'
        ],
        correctAnswer: 2,
        explanation: 'Deniz üstü rüzgâr türbinleri genellikle karasal türbinlere göre daha yüksek kurulum ve bakım maliyetlerine sahiptir. Ancak, daha güçlü rüzgârlardan yararlanabilir ve görsel etki endişelerini azaltabilir.'
      },
      {
        text: 'Rüzgâr türbinlerinin çevresel etkileriyle ilgili aşağıdaki ifadelerden hangisi doğrudur?',
        options: [
          'Rüzgâr türbinleri kuş ve yarasa ölümlerine neden olabilir, ancak bu etki diğer insan kaynaklı faktörlere göre çok daha düşüktür',
          'Rüzgâr türbinleri, çevrelerinde sera gazı emisyonlarını artırır',
          'Rüzgâr türbinleri, toprak kirliliğine neden olan en önemli faktörlerden biridir',
          'Rüzgâr türbinleri, yeraltı su kaynaklarının kirlenmesine neden olur'
        ],
        correctAnswer: 0,
        explanation: 'Rüzgâr türbinleri, kuş ve yarasa ölümlerine neden olabilir, ancak araştırmalar bu etkinin diğer insan kaynaklı faktörlere (binalar, elektrik hatları, evcil kediler vb.) göre çok daha düşük olduğunu göstermektedir. Modern türbin tasarımları ve dikkatli yer seçimi ile bu etki azaltılabilir.'
      }
    ]
  },
  {
    title: 'Hidroelektrik Enerji',
    description: 'Hidroelektrik enerji üretimi ve baraj sistemleri',
    relatedContentUrl: '/hidroelektrik-enerji',
    questions: [
      {
        text: 'Hidroelektrik enerji hangi enerji dönüşümünü kullanır?',
        options: [
          'Rüzgâr enerjisinden elektrik enerjisine',
          'Güneş enerjisinden elektrik enerjisine',
          'Kinetik enerjiden elektrik enerjisine',
          'Nükleer enerjiden elektrik enerjisine'
        ],
        correctAnswer: 2,
        image: '/images/quiz/hydro.jpg',
        explanation: 'Hidroelektrik enerji, suyun potansiyel enerjisinin önce kinetik enerjiye, sonra da türbinler aracılığıyla elektrik enerjisine dönüştürülmesi prensibine dayanır.'
      },
      {
        text: 'Aşağıdakilerden hangisi bir hidroelektrik santralin temel bileşeni değildir?',
        options: [
          'Baraj',
          'Türbin',
          'Jeneratör',
          'Güneş paneli'
        ],
        correctAnswer: 3,
        explanation: 'Güneş panelleri, güneş enerjisi santrallerinin temel bileşenidir, hidroelektrik santrallerde kullanılmaz. Hidroelektrik santrallerin temel bileşenleri baraj (veya su rezervuarı), su girişi, türbinler, jeneratörler ve elektrik iletim hatlarıdır.'
      },
      {
        text: 'Pompalı depolama hidroelektrik santrallerinin temel amacı nedir?',
        options: [
          'Sürekli elektrik üretimi sağlamak',
          'Elektrik şebekesinde yük dengeleme ve enerji depolama',
          'Tarımsal sulama için su sağlamak',
          'İçme suyu arıtma işlemi gerçekleştirmek'
        ],
        correctAnswer: 1,
        explanation: 'Pompalı depolama hidroelektrik santralleri, elektrik talebinin düşük olduğu zamanlarda suyu alt rezervuardan üst rezervuara pompalamak için elektrik kullanır ve talep yüksek olduğunda suyu üst rezervuardan alt rezervuara bırakarak elektrik üretir. Bu, elektrik şebekesinde yük dengeleme ve enerji depolama sağlar.'
      },
      {
        text: 'Hidroelektrik enerjinin en büyük çevresel etkisi aşağıdakilerden hangisidir?',
        options: [
          'Hava kirliliği',
          'Gürültü kirliliği',
          'Ekosistem ve habitat değişimleri',
          'Toprak kirliliği'
        ],
        correctAnswer: 2,
        explanation: 'Büyük barajlar ve hidroelektrik santraller, nehir ekosistemlerini değiştirir, balık göçlerini etkiler, habitat kaybına neden olabilir ve bazen insan topluluklarının yer değiştirmesine yol açabilir. Bu nedenle, ekosistem ve habitat değişimleri, hidroelektrik enerjinin en önemli çevresel etkisidir.'
      },
      {
        text: 'Nehir tipi (run-of-river) hidroelektrik santraller hakkında aşağıdakilerden hangisi doğrudur?',
        options: [
          'Büyük barajlara ihtiyaç duyarlar',
          'Elektrik üretimi için nehrin doğal akışını kullanırlar',
          'Çok yüksek miktarlarda elektrik üretirler',
          'Sadece dağlık bölgelerde kurulabilirler'
        ],
        correctAnswer: 1,
        explanation: 'Nehir tipi hidroelektrik santraller, büyük barajlar ve rezervuarlar oluşturmadan, nehrin doğal akışını kullanarak elektrik üretirler. Bu sistemler genellikle çevresel etkileri daha az olan küçük veya orta ölçekli tesislerdir.'
      }
    ]
  },
  {
    title: 'Jeotermal Enerji',
    description: 'Jeotermal enerji sistemleri ve uygulamaları',
    relatedContentUrl: '/jeotermal-enerji',
    questions: [
      {
        text: 'Jeotermal enerji kaynağı nedir?',
        options: [
          'Güneşten gelen ısı',
          'Yerkürenin derinliklerindeki ısı',
          'Rüzgârın kinetik enerjisi',
          'Okyanus dalgalarının enerjisi'
        ],
        correctAnswer: 1,
        image: '/images/quiz/geothermal.jpg',
        explanation: 'Jeotermal enerji, yerkürenin derinliklerinde bulunan ısının kullanılmasıyla elde edilen enerjidir. Bu ısı, yer kabuğunun altındaki magma tarafından üretilir ve radyoaktif elementlerin bozunması sonucu oluşur.'
      },
      {
        text: 'Jeotermal elektrik santrallerinde en yaygın kullanılan teknoloji aşağıdakilerden hangisidir?',
        options: [
          'Doğrudan buhar sistemleri',
          'Buhar türbini',
          'Fotovoltaik hücreler',
          'Yakıt hücreleri'
        ],
        correctAnswer: 1,
        explanation: 'Jeotermal elektrik santrallerinde, jeotermal akışkanın (buhar veya sıcak su) enerjisi buhar türbinlerini çalıştırmak için kullanılır. Buhar türbinleri, jeotermal akışkanın basıncını mekanik enerjiye ve sonra elektrik enerjisine dönüştürür.'
      },
      {
        text: 'Jeotermal enerjinin doğrudan kullanım uygulamaları arasında aşağıdakilerden hangisi yer almaz?',
        options: [
          'Bölgesel ısıtma sistemleri',
          'Sera ısıtma',
          'Elektrik üretimi',
          'Termal kaplıcalar'
        ],
        correctAnswer: 2,
        explanation: 'Elektrik üretimi, jeotermal enerjinin dolaylı kullanımıdır; jeotermal akışkanın ısısı önce mekanik enerjiye, sonra elektrik enerjisine dönüştürülür. Doğrudan kullanım uygulamaları, jeotermal ısının ara bir dönüşüm olmadan doğrudan kullanıldığı uygulamalardır (bölgesel ısıtma, sera ısıtma, termal kaplıcalar, endüstriyel işlemler vb.).'
      },
      {
        text: 'Jeotermal enerjinin en önemli avantajı nedir?',
        options: [
          'Düşük kurulum maliyeti',
          'Her yerde erişilebilir olması',
          'Kesintisiz ve hava koşullarından bağımsız enerji sağlaması',
          'Sıfır karbon emisyonu'
        ],
        correctAnswer: 2,
        explanation: 'Jeotermal enerji, güneş ve rüzgâr gibi diğer yenilenebilir enerji kaynaklarının aksine, hava koşullarından bağımsızdır ve günün her saati kesintisiz enerji sağlayabilir. Bu, elektrik şebekesi için baz yük sağlama kapasitesi açısından önemli bir avantajdır.'
      },
      {
        text: 'Jeotermal enerjinin çevresel etkileri arasında aşağıdakilerden hangisi yer alabilir?',
        options: [
          'Yüksek sera gazı emisyonları',
          'Ciddi hava kirliliği',
          'Jeolojik istikrarsızlık ve sismik aktivite',
          'Geniş arazilerin kullanımı'
        ],
        correctAnswer: 2,
        explanation: 'Jeotermal enerji projeleri, yeraltı suyunun çıkarılması ve yeniden enjeksiyonu nedeniyle mikro-sismik olaylara veya daha büyük sismik aktivitelere neden olabilir. Ayrıca, doğru yönetilmezse, jeotermal akışkanlar yeraltı sularını kirletebilir veya yüzey sularına zarar verebilir.'
      }
    ]
  },
  {
    title: 'Biyokütle Enerjisi',
    description: 'Biyokütle kaynakları ve enerji dönüşüm teknolojileri',
    relatedContentUrl: '/biyokutle-enerjisi',
    questions: [
      {
        text: 'Biyokütle enerjisi hangi kaynaklardan elde edilir?',
        options: [
          'Sadece orman atıklarından',
          'Bitki ve hayvan atıklarından, enerji bitkilerinden ve organik atıklardan',
          'Sadece tarımsal ürünlerden',
          'Sadece evsel atıklardan'
        ],
        correctAnswer: 1,
        image: '/images/quiz/biomass.jpg',
        explanation: 'Biyokütle enerjisi, bitki ve hayvan atıkları, tarımsal artıklar, orman ürünleri, enerji bitkileri, gıda endüstrisi atıkları ve diğer organik atıklardan elde edilir. Bu geniş kaynak yelpazesi, biyokütle enerjisinin önemli avantajlarından biridir.'
      },
      {
        text: 'Aşağıdakilerden hangisi bir biyokütle enerji dönüşüm teknolojisi değildir?',
        options: [
          'Fermantasyon',
          'Piroliz',
          'Fotovoltaik dönüşüm',
          'Gazlaştırma'
        ],
        correctAnswer: 2,
        explanation: 'Fotovoltaik dönüşüm, güneş enerjisini elektrik enerjisine çevirmek için kullanılan bir teknolojidir ve biyokütle enerji dönüşümünde kullanılmaz. Fermantasyon, piroliz ve gazlaştırma, biyokütleyi farklı formlarda enerjiye dönüştürmek için kullanılan teknolojilerdir.'
      },
      {
        text: 'Biyokütle enerjisinin karbon-nötr kabul edilmesinin nedeni nedir?',
        options: [
          'Hiç karbon emisyonu olmaması',
          'Emisyonların tamamen tutulup depolanması',
          'Yanma sırasında salınan karbonun, bitkilerin büyümesi sırasında atmosferden alınan karbona eşdeğer olması',
          'Atmosferdeki karbonu azaltması'
        ],
        correctAnswer: 2,
        explanation: 'Biyokütle enerjisi teorik olarak karbon-nötr kabul edilir çünkü yanma sırasında salınan karbondioksit, bitkilerin büyümesi sırasında fotosentez yoluyla atmosferden alınan karbon miktarına eşdeğerdir. Ancak biyokütle üretimi, hasadı, taşınması ve işlenmesi sırasında fosil yakıt kullanımı, tam karbon nötrlüğünü etkileyebilir.'
      },
      {
        text: 'Biyodizel üretiminde kullanılan temel kimyasal süreç hangisidir?',
        options: [
          'Fermantasyon',
          'Transesterifikasyon',
          'Anaerobik sindirim',
          'Piroliz'
        ],
        correctAnswer: 1,
        explanation: 'Biyodizel, bitkisel yağlar veya hayvansal yağların bir alkol (genellikle metanol veya etanol) ve katalizör eşliğinde transesterifikasyon adı verilen kimyasal reaksiyon ile işlenmesiyle üretilir. Bu süreç, yağların kimyasal yapısını değiştirerek dizel motorlarda kullanılabilecek bir yakıt elde edilmesini sağlar.'
      },
      {
        text: 'Biyokütle enerjisinin diğer yenilenebilir enerji kaynaklarına göre en önemli avantajı nedir?',
        options: [
          'En düşük maliyetli olması',
          'En yüksek enerji verimliliğine sahip olması',
          'Depolanabilir olması ve istenildiğinde kullanılabilmesi',
          'Hiçbir çevresel etkisinin olmaması'
        ],
        correctAnswer: 2,
        explanation: 'Biyokütle enerjisinin en önemli avantajlarından biri, katı, sıvı veya gaz formunda depolanabilmesi ve elektrik talebi yüksek olduğunda veya diğer yenilenebilir kaynaklar (güneş, rüzgâr) mevcut olmadığında kullanılabilmesidir. Bu, enerji güvenliğini artırır ve kesintisiz enerji sağlar.'
      }
    ]
  },
  {
    title: 'Dalga ve Okyanus Enerjisi',
    description: 'Deniz dalgaları ve okyanus enerji kaynakları',
    relatedContentUrl: '/dalga-okyanus-enerjisi',
    questions: [
      {
        text: 'Dalga enerjisinin ilk kaynağı nedir?',
        options: [
          'Ayın çekim kuvveti',
          'Güneşin ısıtma etkisi',
          'Rüzgârların su yüzeyi üzerindeki etkisi',
          'Deniz tabanındaki sismik hareketler'
        ],
        correctAnswer: 2,
        image: '/images/quiz/wave.jpg',
        explanation: 'Dalga enerjisi, rüzgârların deniz yüzeyi üzerinde oluşturduğu dalgaların kinetik ve potansiyel enerjisinden elde edilir. Rüzgârlar, enerjilerini su yüzeyine aktararak dalgaları oluşturur, bu da bir enerji kaynağı olarak kullanılabilir.'
      },
      {
        text: 'Aşağıdakilerden hangisi bir dalga enerjisi dönüşüm cihazı değildir?',
        options: [
          'Salınımlı su sütunu (Oscillating Water Column)',
          'Salınımlı dalga dönüştürücüsü (Oscillating Wave Converter)',
          'Kabarma havuzu (Overtopping Device)',
          'Dinamik kaldırma çevirici (Dynamic Lift Converter)'
        ],
        correctAnswer: 3,
        explanation: '"Dinamik kaldırma çevirici", gerçek bir dalga enerjisi dönüşüm cihazı adı değildir. Dalga enerjisi dönüşüm teknolojileri arasında salınımlı su sütunu, yutan dalgalanma dönüştürücüsü (point absorber), salınımlı dalga dönüştürücüsü ve kabarma havuzu gibi çeşitli cihazlar bulunur.'
      },
      {
        text: 'Gelgit enerjisi ne tarafından oluşturulur?',
        options: [
          'Rüzgârların su yüzeyi üzerindeki etkisi',
          'Ay ve Güneş\'in çekim kuvvetleri',
          'Okyanus akıntıları',
          'Deniz suyunun sıcaklık farkları'
        ],
        correctAnswer: 1,
        explanation: 'Gelgit enerjisi, Ay ve Güneş\'in çekim kuvvetleri nedeniyle okyanus sularının yükselmesi ve alçalması sonucu oluşur. Bu periyodik hareket, gelgit barajları, gelgit akımı türbinleri ve diğer teknolojiler aracılığıyla elektrik enerjisine dönüştürülebilir.'
      },
      {
        text: 'Okyanus termal enerji dönüşümü (OTEC) hangi prensibe dayanır?',
        options: [
          'Deniz dalgalarının kinetik enerjisini kullanma',
          'Gelgit hareketlerinden enerji elde etme',
          'Okyanus yüzeyi ve derinliklerindeki sıcaklık farkını kullanma',
          'Tuzluluk gradyanından enerji elde etme'
        ],
        correctAnswer: 2,
        explanation: 'Okyanus termal enerji dönüşümü (OTEC), okyanus yüzeyindeki sıcak su ile daha derindeki soğuk su arasındaki sıcaklık farkını kullanarak elektrik üretir. Bu sıcaklık farkı, bir ısı motorunun çalışması için gerekli olan termodinamik gradyanı sağlar.'
      },
      {
        text: 'Dalga ve okyanus enerjisinin temel zorlukları arasında aşağıdakilerden hangisi yer almaz?',
        options: [
          'Sert deniz koşullarına dayanıklı ekipman geliştirme zorluğu',
          'Yüksek kurulum ve bakım maliyetleri',
          'Çok yüksek sera gazı emisyonları',
          'Çevresel etkilerin değerlendirilmesi ve azaltılması'
        ],
        correctAnswer: 2,
        explanation: 'Dalga ve okyanus enerjisi sistemleri, işletme sırasında sera gazı emisyonu üretmez. Temel zorluklar arasında zorlu deniz koşullarına dayanıklı ekipman geliştirme, deniz tabanına veya kıyı şeridine kurulum zorlukları, yüksek ilk yatırım maliyetleri ve deniz ekosistemi üzerindeki potansiyel etkilerin yönetilmesi yer alır.'
      }
    ]
  },
  {
    title: 'Hidrojen ve Nükleer Enerji',
    description: 'Hidrojen enerjisi ve nükleer güç teknolojileri',
    relatedContentUrl: '/hidrojen-nukleer-enerji',
    questions: [
      {
        text: 'Hidrojen enerjisinin en temel avantajı nedir?',
        options: [
          'Düşük maliyet',
          'Yanma sonucu sadece su oluşması',
          'Doğada serbest halde bulunması',
          'Kolay depolanması'
        ],
        correctAnswer: 1,
        image: '/images/quiz/hydrogen.jpg',
        explanation: 'Hidrojenin en önemli avantajlarından biri, yanması sonucunda sadece su oluşmasıdır. Bu, hidrojenin temiz bir enerji taşıyıcısı olmasını sağlar ve fosil yakıtların aksine, kullanımı sırasında sera gazı emisyonu veya hava kirliliği yaratmaz.'
      },
      {
        text: 'Yeşil hidrojen nasıl üretilir?',
        options: [
          'Doğal gazın reformasyonu ile',
          'Kömürün gazlaştırılması ile',
          'Yenilenebilir enerji kaynaklarından elde edilen elektrik ile suyun elektrolizi yoluyla',
          'Nükleer enerji kullanılarak'
        ],
        correctAnswer: 2,
        explanation: 'Yeşil hidrojen, yenilenebilir enerji kaynaklarından (güneş, rüzgâr, hidroelektrik vb.) elde edilen elektrik kullanılarak suyun elektrolizi yoluyla üretilir. Bu yöntem, hidrojen üretiminde sera gazı emisyonlarını ortadan kaldırır.'
      },
      {
        text: 'Nükleer fisyon nedir?',
        options: [
          'Hafif atom çekirdeklerinin birleşerek daha ağır bir atom çekirdeği oluşturması',
          'Ağır atom çekirdeklerinin bölünerek daha hafif atom çekirdekleri oluşturması',
          'Nötronların elektronlara dönüşmesi',
          'Atomların elektron kaybederek iyon haline gelmesi'
        ],
        correctAnswer: 1,
        image: '/images/quiz/nuclear.jpg',
        explanation: 'Nükleer fisyon, ağır bir atom çekirdeğinin (genellikle uranyum-235 veya plütonyum-239) nötronlarla bombardıman edildiğinde daha hafif atom çekirdeklerine bölünmesi ve bu süreçte büyük miktarda enerji açığa çıkması olayıdır. Bu enerji, nükleer santrallerde elektrik üretmek için kullanılır.'
      },
      {
        text: 'Hidrojen yakıt hücreleri nasıl çalışır?',
        options: [
          'Hidrojenin yanmasıyla',
          'Hidrojenin ve oksijenin elektrokimyasal reaksiyonu ile elektrik üretimi',
          'Hidrojenin nükleer fisyonu ile',
          'Hidrojenin sıvılaştırılması ile'
        ],
        correctAnswer: 1,
        explanation: 'Hidrojen yakıt hücreleri, hidrojen ve oksijen arasındaki elektrokimyasal reaksiyon yoluyla elektrik üretir. Bu süreçte, hidrojen anotta elektron ve protonlara ayrılır, elektronlar elektrik devresinden geçerken, protonlar elektrolitten geçerek katotta oksijen ile birleşir ve su oluşturur.'
      },
      {
        text: 'Nükleer enerjinin en önemli çevresel endişesi nedir?',
        options: [
          'Radyoaktif atıkların uzun süreli yönetimi',
          'Yüksek su tüketimi',
          'Gürültü kirliliği',
          'Arazi kullanımı'
        ],
        correctAnswer: 0,
        explanation: 'Nükleer enerjinin en önemli çevresel endişesi, radyoaktif atıkların güvenli bir şekilde depolanması ve yönetilmesidir. Bu atıklar binlerce yıl radyoaktif kalabilir ve uygun şekilde izole edilmezse çevre ve insan sağlığı için önemli risklere neden olabilir.'
      }
    ]
  }
]; 