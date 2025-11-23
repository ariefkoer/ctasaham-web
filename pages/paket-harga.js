import Layout from '../components/layout/Layout'
import { CheckCircle, X, Star, Zap, Crown, Sparkles, ArrowRight } from 'lucide-react'

export default function PaketHarga() {
  const packages = [
    {
      name: 'Starter',
      icon: Sparkles,
      price: '500K',
      period: '/bulan',
      description: 'Cocok untuk trader pemula yang ingin mulai profit konsisten',
      color: 'from-blue-500 to-blue-600',
      features: [
        { text: 'Daily Trading Recommendations', included: true },
        { text: 'Market Outlook Mingguan', included: true },
        { text: 'WhatsApp Group Support', included: true },
        { text: 'Basic Chart Analysis', included: true },
        { text: 'Monthly Webinar', included: true },
        { text: 'Chart Analysis Mendalam', included: false },
        { text: 'Workshop Access', included: false },
        { text: 'Financial Astrology', included: false },
        { text: 'Personal Consultation', included: false },
      ],
      cta: 'Mulai Sekarang',
      popular: false
    },
    {
      name: 'Professional',
      icon: Zap,
      price: '1.5JT',
      period: '/bulan',
      description: 'Paling populer! Untuk trader serius yang ingin maksimal profit',
      color: 'from-gold-500 to-gold-600',
      features: [
        { text: 'Daily Trading Recommendations', included: true },
        { text: 'Market Outlook Lengkap (Yearly/Monthly/Weekly)', included: true },
        { text: 'WhatsApp Group VIP Support', included: true },
        { text: 'Chart Analysis Mendalam', included: true },
        { text: 'Workshop Access (2x/bulan)', included: true },
        { text: 'Financial Astrology Analysis', included: true },
        { text: 'Priority Support', included: true },
        { text: 'Personal Consultation (1x/bulan)', included: true },
        { text: 'Trading Plan Template', included: true },
      ],
      cta: 'Pilih Professional',
      popular: true,
      badge: 'MOST POPULAR'
    },
    {
      name: 'Elite',
      icon: Crown,
      price: '3JT',
      period: '/bulan',
      description: 'Paket ultimate dengan personal mentoring untuk hasil maksimal',
      color: 'from-purple-500 to-purple-600',
      features: [
        { text: 'Semua fitur Professional', included: true },
        { text: 'Personal Mentoring 1-on-1 (4x/bulan)', included: true },
        { text: 'Custom Trading Strategy', included: true },
        { text: 'Portfolio Management Consultation', included: true },
        { text: 'Unlimited WhatsApp Consultation', included: true },
        { text: 'Workshop Unlimited Access', included: true },
        { text: 'Exclusive Trading System', included: true },
        { text: 'Priority Alert & Early Bird Signal', included: true },
        { text: 'Lifetime Alumni Support', included: true },
      ],
      cta: 'Hubungi Kami',
      popular: false
    }
  ]

  const addons = [
    {
      title: 'Workshop Premium',
      description: 'Akses ke workshop premium dengan studi kasus real & live trading',
      price: '1JT',
      period: '/workshop'
    },
    {
      title: 'Personal Coaching',
      description: 'Sesi 1-on-1 dengan Andri Zakarias S untuk problem solving',
      price: '500K',
      period: '/sesi'
    },
    {
      title: 'Trading System Development',
      description: 'Bangun sistem trading personal sesuai karakter Anda',
      price: '2JT',
      period: '/paket'
    }
  ]

  const faqs = [
    {
      q: 'Apakah ada garansi profit?',
      a: 'Kami tidak menjamin profit karena trading memiliki risiko. Namun, kami memberikan analisis terbaik dengan track record 98% akurasi. Hasil akhir tergantung eksekusi dan disiplin masing-masing trader.'
    },
    {
      q: 'Bagaimana cara pembayaran?',
      a: 'Pembayaran dapat dilakukan via transfer bank (BCA, Mandiri, BNI) atau e-wallet (OVO, GoPay, DANA). Setelah transfer, konfirmasi ke WhatsApp kami untuk aktivasi instant.'
    },
    {
      q: 'Apakah bisa trial dulu?',
      a: 'Ya! Kami menyediakan FREE TRIAL 7 hari untuk member baru. Anda bisa merasakan langsung kualitas layanan sebelum memutuskan berlangganan.'
    },
    {
      q: 'Berapa modal minimal untuk trading?',
      a: 'Modal minimal yang kami rekomendasikan adalah 10 juta rupiah untuk dapat melakukan risk management yang proper dan diversifikasi portfolio.'
    },
    {
      q: 'Apakah cocok untuk pemula?',
      a: 'Sangat cocok! Kami menyediakan edukasi dari basic hingga advanced. Paket Starter dirancang khusus untuk pemula dengan panduan lengkap.'
    }
  ]

  return (
    <Layout
      title="Paket & Harga - CTASaham | Investasi Terbaik untuk Trading Success"
      description="Pilihan paket membership CTASaham: Starter, Professional, Elite. Dapatkan rekomendasi trading, analisis, workshop, dan mentoring dari expert 26 tahun. Free trial 7 hari!"
      keywords="paket trading, harga membership, paket saham, biaya edukasi trading, investasi trading"
    >
      {/* Hero */}
      <section className="gradient-gold-blue text-white py-16">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Paket & Harga
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-6">
            Investasi terbaik untuk kesuksesan trading Anda. Pilih paket yang sesuai dengan kebutuhan dan budget.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <Star className="w-5 h-5 text-gold-300" />
            <span className="font-semibold">FREE TRIAL 7 HARI untuk Member Baru!</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  pkg.popular ? 'ring-4 ring-gold-400 transform md:scale-105' : ''
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gold-500 text-white px-4 py-1 text-xs font-bold">
                    {pkg.badge}
                  </div>
                )}

                {/* Header */}
                <div className={`bg-gradient-to-br ${pkg.color} text-white p-8 text-center`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <pkg.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-sm text-gray-100 mb-6">{pkg.description}</p>
                  <div className="flex items-end justify-center gap-2">
                    <span className="text-5xl font-bold">{pkg.price}</span>
                    <span className="text-lg text-gray-200 mb-2">{pkg.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <CheckCircle className="w-5 h-5 text-profit flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href={`https://wa.me/6281234567890?text=Halo%20CTASaham,%20saya%20ingin%20berlangganan%20paket%20${pkg.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 rounded-xl font-bold transition ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white hover:from-gold-600 hover:to-gold-700 shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Semua paket termasuk:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-profit" />
                <span>7 Hari Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-profit" />
                <span>Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-profit" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Tambahan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tingkatkan hasil trading dengan layanan premium tambahan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {addons.map((addon, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{addon.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-3xl font-bold text-gold-600">{addon.price}</span>
                    <span className="text-sm text-gray-500">{addon.period}</span>
                  </div>
                  <a
                    href="#"
                    className="text-gold-600 font-semibold hover:text-gold-700 flex items-center gap-1"
                  >
                    Pesan
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Pertanyaan yang sering diajukan</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Masih Ragu? Coba GRATIS 7 Hari!
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Rasakan sendiri kualitas layanan CTASaham tanpa risiko. 
            Jika tidak puas dalam 7 hari, uang kembali 100%.
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20CTASaham,%20saya%20ingin%20mengambil%20free%20trial%207%20hari"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-white text-primary-700 hover:bg-gray-100 inline-flex items-center gap-2 text-lg"
          >
            Mulai Free Trial Sekarang
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm text-gray-200 mt-4">
            No credit card required • Aktivasi instant
          </p>
        </div>
      </section>
    </Layout>
  )
}
