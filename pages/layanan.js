import Layout from '../components/layout/Layout'
import { 
  TrendingUp, BarChart3, LineChart, GraduationCap, 
  Moon, MessageSquare, CheckCircle, Clock, Target, Award
} from 'lucide-react'

export default function Layanan() {
  const services = [
    {
      id: 'daily-trading',
      icon: TrendingUp,
      title: 'Daily Trading Recommendations',
      subtitle: 'Rekomendasi Harian untuk Profit Konsisten',
      color: 'from-blue-500 to-blue-600',
      description: 'Dapatkan rekomendasi saham intraday dan harian dengan Entry Price, Take Profit, dan Stop Loss yang jelas. Watchlist dikirim setiap pagi sebelum market buka disertai analisis sentimen global dan lokal.',
      features: [
        'Daily Morning Report - Watchlist saham potensial sebelum market buka',
        'Buy Sore Jual Pagi - Strategy untuk overnight trading',
        'Scalping Signal - Alert breakout untuk quick profit',
        'Entry, TP, SL jelas - Risk management terperhitungkan',
        'Market Sentiment - Analisis sentimen global & lokal',
        'Real-time Alert - Via WhatsApp group untuk fast execution'
      ],
      benefits: [
        'Hemat waktu analisis, langsung action',
        'Profit opportunity setiap hari',
        'Risk terkontrol dengan SL yang jelas',
        'Cocok untuk trader sibuk'
      ]
    },
    {
      id: 'market-outlook',
      icon: BarChart3,
      title: 'Market Outlook',
      subtitle: 'Analisis Komprehensif Pasar',
      color: 'from-gold-500 to-gold-600',
      description: 'Analisis mendalam tentang kondisi pasar saham Indonesia, trend IHSG, rotasi sektor, serta level-level penting yang perlu diperhatikan untuk strategi trading Anda.',
      features: [
        'Yearly Outlook - Big picture view untuk strategi jangka panjang',
        'Monthly Analysis - Review bulanan dengan forecast bulan depan',
        'Weekly Review - Update mingguan kondisi market',
        'IHSG Analysis - Level support-resistance & target IHSG',
        'Sector Rotation - Sektor mana yang potensial',
        'Foreign Flow - Analisis aliran dana asing',
        'Volatility Index - Tingkat volatilitas pasar',
        'Astrological Cycle - Market timing dengan planetary cycles'
      ],
      benefits: [
        'Memahami big picture market',
        'Trading sejalan dengan trend',
        'Antisipasi turning point',
        'Portfolio allocation optimal'
      ]
    },
    {
      id: 'chart-analysis',
      icon: LineChart,
      title: 'Chart Analysis & Technical Review',
      subtitle: 'Analisis Teknikal Mendalam',
      color: 'from-green-500 to-green-600',
      description: 'Analisis detail chart saham individual menggunakan berbagai metode technical analysis untuk menentukan timing entry dan exit yang optimal.',
      features: [
        'Support & Resistance - Level kunci untuk entry/exit',
        'Chart Pattern - Triangle, H&S, Double Top/Bottom, dll',
        'Trend Analysis - Identifikasi trend dan struktur market',
        'Momentum Indicator - RSI, MACD, Stochastic',
        'Wave Structure - Elliott Wave & Fibonacci',
        'Volume Analysis - Konfirmasi pergerakan dengan volume',
        'Multiple Timeframe - Analisis dari daily sampai weekly',
        'Candlestick Pattern - Japanese candlestick reading'
      ],
      benefits: [
        'Entry timing lebih presisi',
        'Menghindari false breakout',
        'Target profit realistis',
        'Risk-reward ratio optimal'
      ]
    },
    {
      id: 'workshop',
      icon: GraduationCap,
      title: 'Workshop & Training Saham',
      subtitle: 'Edukasi Praktis & Aplikatif',
      color: 'from-purple-500 to-purple-600',
      description: 'Program training komprehensif dari basic hingga advanced dengan pendekatan praktis. Langsung praktek dengan studi kasus real chart dan simulasi trading.',
      features: [
        'Technical Analysis Fundamental - Chart reading dari nol',
        'Fast Trading System - Scalping & day trading strategies',
        'Swing Trading System - Multi-day holding strategies',
        'Risk Management - Position sizing & money management',
        'Trading Psychology - Mindset & emotional control',
        'Studi Kasus Real Chart - Belajar dari market sebenarnya',
        'Live Trading Session - Trading bersama mentor',
        'Lifetime Support - Akses grup alumni selamanya'
      ],
      benefits: [
        'Skill trading meningkat drastis',
        'Praktik langsung, bukan teori',
        'Mentor berpengalaman 26 tahun',
        'Komunitas trader solid'
      ]
    },
    {
      id: 'astrology',
      icon: Moon,
      title: 'Financial Astrology & Market Cycles',
      subtitle: 'Timing with Cosmic Cycles',
      color: 'from-indigo-500 to-indigo-600',
      description: 'Pendekatan unik menggunakan siklus planet dan time cycles untuk memprediksi turning point market. Metode yang telah digunakan oleh trader profesional dunia.',
      features: [
        'Planetary Cycles - Pengaruh posisi planet terhadap market',
        'Time Cycles - Pattern waktu berulang di market',
        'Trend Turning Points - Prediksi reversal trend',
        'Astrological Calendar - Tanggal-tanggal penting',
        'Integration dengan Technical - Kombinasi untuk akurasi tinggi',
        'Bradley Model - Model siklus market terkenal',
        'Gann Methods - Geometri & waktu market',
        'Seasonal Patterns - Pattern musiman di IHSG'
      ],
      benefits: [
        'Market timing lebih akurat',
        'Antisipasi trend reversal',
        'Edge tambahan dari metode unik',
        'Combine dengan technical analysis'
      ]
    },
    {
      id: 'konsultasi',
      icon: MessageSquare,
      title: 'Konsultasi Pribadi',
      subtitle: 'Personal Coaching 1-on-1',
      color: 'from-red-500 to-red-600',
      description: 'Sesi konsultasi personal dengan Andri Zakarias S untuk membahas trading plan, portfolio review, atau problem solving trading Anda secara mendalam.',
      features: [
        'Trading Plan Development - Buat sistem trading personal',
        'Portfolio Review - Evaluasi holding & strategi',
        'Trading Journal Analysis - Review trading history Anda',
        'Psychology Coaching - Atasi fear, greed, dll',
        'Strategy Customization - Adjust strategi sesuai karakter',
        'Problem Solving - Diskusi masalah trading spesifik',
        'Goal Setting - Target realistis & roadmap',
        'Accountability Partner - Monitoring progress Anda'
      ],
      benefits: [
        'Solusi personal sesuai kebutuhan',
        'Feedback langsung dari expert',
        'Progress lebih cepat',
        'Transformasi mindset trading'
      ]
    }
  ]

  return (
    <Layout
      title="Layanan - CTASaham | Rekomendasi, Analisis, Workshop Trading Saham"
      description="Layanan lengkap untuk trader: Daily trading recommendations, market outlook, chart analysis, workshop training, financial astrology, dan konsultasi pribadi."
      keywords="layanan trading, rekomendasi saham, workshop saham, analisis teknikal, konsultasi trading, edukasi saham"
    >
      {/* Hero */}
      <section className="gradient-gold-blue text-white py-16">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Layanan Kami
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Solusi lengkap untuk kesuksesan trading Anda, dari rekomendasi harian hingga edukasi mendalam
          </p>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section 
          key={service.id}
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="section-container">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              {/* Icon & Title */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl mb-6`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h2>
                <p className="text-xl text-gold-600 font-semibold mb-6">
                  {service.subtitle}
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="bg-gradient-to-br from-gold-50 to-yellow-50 rounded-xl p-6 border-l-4 border-gold-500">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-gold-600" />
                    Manfaat Utama:
                  </h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-profit flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Features List */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Target className="w-6 h-6 text-gold-600" />
                    Yang Anda Dapatkan:
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-gold-600 text-xs font-bold">{idx + 1}</span>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Memulai Perjalanan Trading Anda?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Pilih layanan yang sesuai kebutuhan Anda atau konsultasikan dengan kami untuk paket terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890?text=Halo%20CTASaham,%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20layanan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-primary-700 hover:bg-gray-100"
            >
              Konsultasi Gratis
            </a>
            <a
              href="/paket-harga"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary-700"
            >
              Lihat Paket & Harga
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
