import Layout from '../components/layout/Layout'
import Image from 'next/image'
import { 
  Award, Target, Users, TrendingUp, BookOpen, Shield,
  CheckCircle, LineChart, GraduationCap, Zap
} from 'lucide-react'

export default function TentangKami() {
  const timeline = [
    { year: '1998', event: 'Memulai karir di pasar modal Indonesia' },
    { year: '2005', event: 'Menjadi analis independen profesional' },
    { year: '2010', event: 'Meluncurkan workshop trading pertama' },
    { year: '2015', event: 'CTASaham resmi berdiri dengan 100+ member' },
    { year: '2020', event: 'Mencapai 3000+ trader aktif' },
    { year: '2024', event: '5000+ trader sukses & terus berkembang' },
  ]

  const values = [
    {
      icon: Target,
      title: 'Akurasi',
      description: 'Mengutamakan presisi dalam setiap rekomendasi dengan track record 98%'
    },
    {
      icon: Shield,
      title: 'Integritas',
      description: 'Transparansi penuh dalam analisis dan hasil trading'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Membangun komunitas trader yang saling support'
    },
    {
      icon: BookOpen,
      title: 'Edukasi',
      description: 'Memberdayakan trader melalui knowledge sharing'
    }
  ]

  const expertise = [
    'Technical Analysis (Chart Pattern, Support-Resistance, Trend Analysis)',
    'Fundamental Analysis (Valuasi Saham, Analisis Laporan Keuangan)',
    'Bandarmologi & Volume Analysis',
    'Financial Astrology & Market Cycles',
    'Risk Management & Position Sizing',
    'Trading Psychology & Discipline',
    'Scalping, Day Trading, Swing Trading Strategies',
    'IHSG & Sector Rotation Analysis'
  ]

  const achievements = [
    { number: '26', label: 'Tahun Pengalaman' },
    { number: '5000+', label: 'Trader Aktif' },
    { number: '98%', label: 'Signal Accuracy' },
    { number: '100+', label: 'Workshop Delivered' },
  ]

  return (
    <Layout
      title="Tentang Kami - CTASaham | 26 Tahun Pengalaman Trading Saham"
      description="Kenali CTASaham dan Andri Zakarias S, analis pasar modal dengan pengalaman 26 tahun. Membantu 5000+ trader mencapai Trading for A Living."
      keywords="tentang ctasaham, andri zakarias, analis saham, pengalaman trading, profile trader profesional"
    >
      {/* Hero Section */}
      <section className="gradient-gold-blue text-white py-16">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tentang CTASaham
            </h1>
            <p className="text-xl text-gray-100">
              26 Tahun Pengalaman Membantu Trader Indonesia Mencapai Financial Freedom
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/founder.jpg"
                  alt="Andri Zakarias S - Founder CTASaham"
                  width={600}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">26</div>
                <div className="text-sm">Tahun Expert</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-block bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Story
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Andri Zakarias S
                <span className="block text-gold-600 text-2xl mt-2">Founder & Head Analyst</span>
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Perjalanan saya di dunia pasar modal dimulai sejak tahun 1998. Lebih dari dua dekade 
                  pengalaman telah mengajarkan saya untuk memahami dinamika pasar dalam berbagai kondisi - 
                  bull market, bear market, hingga sideways.
                </p>
                
                <p>
                  CTASaham lahir dari passion saya untuk berbagi ilmu dan membantu trader retail Indonesia 
                  mencapai kesuksesan finansial melalui trading saham. Saya percaya bahwa dengan edukasi 
                  yang tepat, disiplin, dan strategi yang proven, setiap orang bisa menjadi trader profesional.
                </p>
                
                <p>
                  Sepanjang karir, saya telah mengembangkan metodologi trading yang menggabungkan 
                  technical analysis, fundamental analysis, bandarmologi, dan pendekatan unik menggunakan 
                  financial astrology untuk market timing yang optimal.
                </p>

                <p className="font-semibold text-primary-700">
                  &ldquo;Trading bukan tentang berapa kali Anda profit, tapi tentang konsistensi dan disiplin 
                  dalam menjalankan strategi yang terbukti efektif.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold-600 mb-2">
                  {item.number}
                </div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Area Keahlian
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kombinasi berbagai metode analisis untuk hasil trading yang optimal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {expertise.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-profit flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-gold-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-gray-600">Milestone penting dalam sejarah CTASaham</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {item.year}
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <p className="text-gray-700 font-medium">{item.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prinsip yang menjadi fondasi dalam setiap layanan CTASaham
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Bergabung dengan Kami?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Mari bersama-sama mencapai Trading for A Living
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20CTASaham,%20saya%20ingin%20bergabung"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-white text-primary-700 hover:bg-gray-100 inline-flex items-center gap-2"
          >
            Hubungi Kami Sekarang
            <TrendingUp className="w-5 h-5" />
          </a>
        </div>
      </section>
    </Layout>
  )
}
