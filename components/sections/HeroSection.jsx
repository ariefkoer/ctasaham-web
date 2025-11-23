import Link from 'next/link'
import { TrendingUp, Award, Users, Target } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative gradient-gold-blue text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="section-container relative z-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5" />
              <span className="text-sm font-semibold">26 Tahun Pengalaman di Pasar Modal</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Trading Saham <br />
              <span className="text-gold-300">For A Living</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
              Raih konsistensi profit dengan rekomendasi trading harian, analisis teknikal profesional, 
              dan edukasi lengkap dari analis berpengalaman 26 tahun.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a 
                href="https://wa.me/6281234567890?text=Halo%20CTASaham,%20saya%20ingin%20bergabung"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-white text-gold-600 hover:bg-gray-100 inline-flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                Mulai Trading Sekarang
              </a>
              <Link 
                href="/layanan"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center justify-center"
              >
                Lihat Layanan Kami
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/30">
              <div>
                <div className="text-3xl font-bold text-gold-300">5000+</div>
                <div className="text-sm text-gray-200">Trader Aktif</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-300">98%</div>
                <div className="text-sm text-gray-200">Akurasi Signal</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-300">26 Thn</div>
                <div className="text-sm text-gray-200">Pengalaman</div>
              </div>
            </div>
          </div>

          {/* Right Visual - Chart Illustration */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-gold-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"></div>
              
              {/* Main Card */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  {/* Stat Cards */}
                  <div className="bg-white rounded-xl p-4 text-gray-900">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">IHSG Today</span>
                      <span className="text-xs text-profit">+1.2%</span>
                    </div>
                    <div className="text-2xl font-bold">7,245.50</div>
                  </div>

                  <div className="bg-white rounded-xl p-4 text-gray-900">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">Win Rate</span>
                      <Target className="w-5 h-5 text-profit" />
                    </div>
                    <div className="text-2xl font-bold">98.5%</div>
                  </div>

                  <div className="bg-white rounded-xl p-4 text-gray-900">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">Active Members</span>
                      <Users className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="text-2xl font-bold">5,247</div>
                  </div>
                </div>
              </div>
            </div>
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
