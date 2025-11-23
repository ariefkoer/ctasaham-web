import Link from 'next/link'
import { 
  TrendingUp, BarChart3, LineChart, GraduationCap, 
  Moon, MessageSquare, ArrowRight 
} from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Daily Trading Recommendations',
      description: 'Rekomendasi intraday & harian saham pilihan dengan Entry - TP - SL yang jelas. Watchlist pagi sebelum market buka.',
      features: ['Daily Morning', 'Buy Sore Jual Pagi', 'Scalping Breakout'],
      color: 'from-blue-500 to-blue-600',
      href: '/layanan#daily-trading'
    },
    {
      icon: BarChart3,
      title: 'Market Outlook',
      description: 'Analisis komprehensif IHSG, sektor potensial, flow asing, dan volatilitas pasar dengan level kunci.',
      features: ['Yearly Outlook', 'Monthly Review', 'Weekly Analysis'],
      color: 'from-gold-500 to-gold-600',
      href: '/layanan#market-outlook'
    },
    {
      icon: LineChart,
      title: 'Chart Analysis & Technical Review',
      description: 'Analisis mendalam support-resistance, chart pattern, trend, momentum, wave structure, dan behavior market.',
      features: ['Support-Resistance', 'Chart Pattern', 'Volume Analysis'],
      color: 'from-green-500 to-green-600',
      href: '/layanan#chart-analysis'
    },
    {
      icon: GraduationCap,
      title: 'Workshop & Training Saham',
      description: 'Pelatihan teknikal analisis full-practical dengan fast trading & swing trading system yang terbukti.',
      features: ['Teknikal Analisis', 'Risk Management', 'Studi Kasus Real'],
      color: 'from-purple-500 to-purple-600',
      href: '/layanan#workshop'
    },
    {
      icon: Moon,
      title: 'Financial Astrology & Market Cycles',
      description: 'Pendekatan unik menggunakan planetary cycles, time cycles, dan trend turning points untuk timing entry.',
      features: ['Planetary Cycles', 'Time Cycles', 'Turning Points'],
      color: 'from-indigo-500 to-indigo-600',
      href: '/layanan#astrology'
    },
    {
      icon: MessageSquare,
      title: 'Konsultasi Pribadi',
      description: 'Coaching personal untuk penyusunan trading plan, evaluasi portofolio, dan psikologi trading.',
      features: ['Trading Plan', 'Portfolio Review', 'Trading Psychology'],
      color: 'from-red-500 to-red-600',
      href: '/layanan#konsultasi'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Layanan Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solusi Lengkap untuk <span className="text-gold-600">Trading Success</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dari rekomendasi harian hingga edukasi mendalam, kami menyediakan semua yang 
            Anda butuhkan untuk menjadi trader profesional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index}
              href={service.href}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gold-200">
                {/* Icon Header */}
                <div className={`bg-gradient-to-br ${service.color} p-6`}>
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <div className="flex items-center text-gold-600 font-semibold group-hover:text-gold-700 transition">
                    <span>Pelajari Lebih Lanjut</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/layanan"
            className="btn-primary inline-flex items-center gap-2"
          >
            Lihat Semua Layanan
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
