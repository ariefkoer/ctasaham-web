import { ArrowRight, CheckCircle, Phone } from 'lucide-react'

export default function CTASection() {
  const benefits = [
    'Rekomendasi trading harian dengan Entry-TP-SL jelas',
    'Akses ke market outlook dan analisis mendalam',
    'Support via WhatsApp group 24/7',
    'Edukasi lengkap dari basic hingga advanced',
    'Free trial 7 hari untuk member baru'
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-gold-600"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🎉 Promo Khusus Bulan Ini
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Siap untuk Trading 
            <span className="text-gold-300"> for A Living?</span>
          </h2>

          <p className="text-xl text-gray-100 mb-12 leading-relaxed">
            Bergabunglah dengan ribuan trader yang telah meraih kesuksesan bersama CTASaham. 
            Mulai perjalanan trading profesional Anda hari ini!
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 text-left max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-gold-300 flex-shrink-0 mt-0.5" />
                <span className="text-gray-100">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://wa.me/6281234567890?text=Halo%20CTASaham,%20saya%20ingin%20bergabung%20dan%20mendapatkan%20free%20trial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              Bergabung Sekarang - Free Trial 7 Hari
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-gray-200">
            *No credit card required • Cancel anytime • Money-back guarantee
          </p>
        </div>

        {/* Bottom Decorative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-gold-300 mb-2">24/7</div>
            <div className="text-sm text-gray-200">Support Available</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-gold-300 mb-2">100%</div>
            <div className="text-sm text-gray-200">Money-Back Guarantee</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-gold-300 mb-2">5000+</div>
            <div className="text-sm text-gray-200">Happy Traders</div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
