import { Star, Quote } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Andi Wijaya',
      role: 'Swing Trader',
      location: 'Jakarta',
      avatar: 'AW',
      rating: 5,
      text: 'Saya bergabung dengan CTASaham sudah 2 tahun. Rekomendasi tradingnya sangat akurat dan selalu disertai analisis yang jelas. Profit saya meningkat 300% sejak ikut program mereka!',
      highlight: 'Profit +300%'
    },
    {
      name: 'Siti Rahayu',
      role: 'Day Trader',
      location: 'Surabaya',
      avatar: 'SR',
      rating: 5,
      text: 'Workshop dari CTASaham sangat aplikatif. Materinya langsung bisa dipraktikkan. Sekarang saya sudah bisa scalping dengan konsisten. Terima kasih Pak Andri!',
      highlight: 'Konsisten Profit'
    },
    {
      name: 'Bambang Hermawan',
      role: 'Investor',
      location: 'Bandung',
      avatar: 'BH',
      rating: 5,
      text: 'Market outlook bulanan dari CTASaham selalu spot on. Membantu saya untuk timing entry dan exit yang tepat. Highly recommended untuk trader pemula maupun advanced!',
      highlight: 'Timing Perfect'
    },
    {
      name: 'Diana Putri',
      role: 'Scalper',
      location: 'Medan',
      avatar: 'DP',
      rating: 5,
      text: 'Awalnya skeptis dengan financial astrology, tapi setelah belajar di CTASaham, saya paham bagaimana menggunakannya untuk enhance timing. Amazing!',
      highlight: 'Win Rate 90%+'
    },
    {
      name: 'Rizki Firmansyah',
      role: 'Part-time Trader',
      location: 'Semarang',
      avatar: 'RF',
      rating: 5,
      text: 'Sebagai trader paruh waktu, signal daily morning dari CTASaham sangat membantu. Saya bisa trading sambil kerja tanpa miss momentum. Support grupnya juga sangat solid!',
      highlight: 'Fleksibel'
    },
    {
      name: 'Linda Kusuma',
      role: 'New Trader',
      location: 'Yogyakarta',
      avatar: 'LK',
      rating: 5,
      text: 'Baru 6 bulan belajar trading di CTASaham, sudah bisa konsisten profit. Edukasinya sistematis dari fundamental sampai advanced. Worth every penny!',
      highlight: '6 Bulan Profit'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Testimoni Klien
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apa Kata <span className="text-gold-600">Trader Kami?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ribuan trader telah merasakan manfaat bergabung dengan CTASaham. 
            Berikut beberapa cerita sukses mereka.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-gold-200">
                <Quote className="w-12 h-12" />
              </div>

              {/* Avatar & Info */}
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-4 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Highlight Badge */}
              <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                ✓ {testimonial.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-gold-300 mb-2">5000+</div>
              <div className="text-sm text-gray-200">Trader Bergabung</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-300 mb-2">98%</div>
              <div className="text-sm text-gray-200">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-300 mb-2">4.9/5</div>
              <div className="text-sm text-gray-200">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-300 mb-2">26 Thn</div>
              <div className="text-sm text-gray-200">Pengalaman</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
