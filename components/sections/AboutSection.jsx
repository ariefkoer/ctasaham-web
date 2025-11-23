import Image from 'next/image'
import { Award, TrendingUp, Users, BookOpen } from 'lucide-react'

export default function AboutSection() {
  const highlights = [
    {
      icon: Award,
      title: '26 Tahun Pengalaman',
      description: 'Pengalaman mendalam di pasar modal Indonesia sejak 1998'
    },
    {
      icon: TrendingUp,
      title: 'Track Record Terbukti',
      description: '98% akurasi signal trading dengan konsistensi profit'
    },
    {
      icon: Users,
      title: '5000+ Trader Sukses',
      description: 'Membantu ribuan trader mencapai financial freedom'
    },
    {
      icon: BookOpen,
      title: 'Edukasi Lengkap',
      description: 'Dari fundamental, teknikal, hingga financial astrology'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Founder Photo */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/founder.jpg"
                alt="Andri Zakarias S - Founder CTASaham"
                width={600}
                height={700}
                className="w-full h-auto"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-sm text-gray-600 mb-1">Founder & Head Analyst</div>
                <div className="text-2xl font-bold text-gray-900">Andri Zakarias S</div>
                <div className="text-sm text-gold-600 font-semibold mt-1">26 Years Experience</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-400/20 rounded-full blur-2xl"></div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-block bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Tentang CTASaham
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dipercaya oleh Ribuan Trader untuk 
              <span className="text-gold-600"> Trading for A Living</span>
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Dibangun dan dikelola oleh seorang analis pasar berpengalaman 26 tahun, 
              CTASaham menghadirkan insight yang akurat, praktis, dan dapat langsung 
              digunakan untuk keputusan trading.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Kami hadir dengan misi menyediakan rekomendasi trading saham yang akurat, 
              cepat, dan mudah dieksekusi, serta meningkatkan kualitas trader Indonesia 
              melalui edukasi yang efektif dan dapat dipraktikkan.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-gold-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/tentang-kami"
                className="btn-primary"
              >
                Pelajari Lebih Lanjut
              </a>
              <a 
                href="/kontak"
                className="btn-outline"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
