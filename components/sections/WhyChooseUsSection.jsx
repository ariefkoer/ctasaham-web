import { 
  Target, TrendingUp, Users, Award, 
  Shield, Zap, CheckCircle, Star 
} from 'lucide-react'

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Award,
      title: '26 Tahun Pengalaman',
      description: 'Pengalaman mendalam sejak 1998 di berbagai kondisi market - bull, bear, dan sideways.'
    },
    {
      icon: Target,
      title: '98% Akurasi Signal',
      description: 'Track record terbukti dengan tingkat akurasi tinggi dalam rekomendasi trading.'
    },
    {
      icon: Users,
      title: '5000+ Trader Aktif',
      description: 'Komunitas trader yang solid dengan sharing knowledge dan support system.'
    },
    {
      icon: TrendingUp,
      title: 'Profit Konsisten',
      description: 'Metode trading yang terbukti menghasilkan profit konsisten untuk scalping hingga long term.'
    },
    {
      icon: Zap,
      title: 'Fast Response',
      description: 'Rekomendasi real-time dan support cepat melalui WhatsApp dan Telegram group.'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Setiap rekomendasi dilengkapi dengan Entry, TP, dan SL yang jelas untuk protect capital.'
    }
  ]

  const missionPoints = [
    'Menyediakan rekomendasi trading saham yang akurat, cepat, dan mudah dieksekusi',
    'Meningkatkan kualitas trader Indonesia melalui edukasi yang efektif dan praktis',
    'Menyederhanakan kompleksitas pasar sehingga trader dapat mengambil keputusan lebih percaya diri',
    'Menghadirkan analisis berbasis data, chart pattern, momentum, cycles, dan pendekatan profesional',
    'Membantu trader ritel mencapai konsistensi profit untuk Trading for A Living'
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Mengapa CTASaham?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Keunggulan yang Membuat Kami 
            <span className="text-gold-600"> Berbeda</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dipercaya oleh ribuan trader untuk mencapai financial freedom melalui trading saham.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mb-4">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Mission Points */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Misi CTASaham
              </h3>
              <ul className="space-y-4">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-profit flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Stats Card */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-8 h-8 text-gold-300" />
                <h3 className="text-2xl font-bold">Testimonial</h3>
              </div>
              
              <blockquote className="text-lg mb-6 leading-relaxed italic">
                "CTASaham benar-benar mengubah cara saya trading. Dari yang tadinya sering loss, 
                sekarang bisa profit konsisten setiap bulan. Analisnya akurat dan edukasinya lengkap!"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center font-bold text-gray-900">
                  BS
                </div>
                <div>
                  <div className="font-semibold">Budi Santoso</div>
                  <div className="text-sm text-gray-300">Trader Aktif, Jakarta</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mt-6 pt-6 border-t border-white/20">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-gold-300 text-gold-300" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
