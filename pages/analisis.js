import Layout from '../components/layout/Layout'
import Link from 'next/link'
import { Calendar, User, TrendingUp, ArrowRight, Tag } from 'lucide-react'

export default function Analisis() {
  const articles = [
    {
      id: 1,
      title: 'IHSG Berpotensi Test Level 7,500 - Ini Saham yang Harus Diperhatikan',
      excerpt: 'Analisis teknikal IHSG menunjukkan momentum bullish dengan target 7,500. Berikut rekomendasi saham yang berpotensi breakout minggu ini.',
      category: 'Market Outlook',
      author: 'Andri Zakarias S',
      date: '20 November 2024',
      readTime: '5 min',
      image: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=IHSG+Analysis',
      tags: ['IHSG', 'Technical Analysis', 'Outlook']
    },
    {
      id: 2,
      title: 'Top 5 Saham Perbankan untuk Swing Trading Bulan Ini',
      excerpt: 'Sektor perbankan menunjukkan strength dengan foreign buying meningkat. Ini 5 saham bank terbaik untuk swing trading dengan target 15-20%.',
      category: 'Stock Picks',
      author: 'Andri Zakarias S',
      date: '18 November 2024',
      readTime: '7 min',
      image: 'https://via.placeholder.com/600x400/f59e0b/ffffff?text=Banking+Sector',
      tags: ['Banking', 'Swing Trading', 'Stock Picks']
    },
    {
      id: 3,
      title: 'Cara Menggunakan RSI untuk Entry Point yang Tepat',
      excerpt: 'Tutorial lengkap menggunakan RSI indicator untuk menentukan oversold/overbought dan mencari entry point dengan risk-reward ratio optimal.',
      category: 'Tutorial',
      author: 'Andri Zakarias S',
      date: '15 November 2024',
      readTime: '10 min',
      image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=RSI+Tutorial',
      tags: ['Technical Analysis', 'RSI', 'Tutorial']
    },
    {
      id: 4,
      title: 'Financial Astrology: Mercury Retrograde dan Dampaknya ke Market',
      excerpt: 'Bagaimana planetary cycle Mercury Retrograde mempengaruhi volatilitas market dan strategi trading yang tepat menghadapinya.',
      category: 'Astrology',
      author: 'Andri Zakarias S',
      date: '12 November 2024',
      readTime: '8 min',
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Astrology',
      tags: ['Financial Astrology', 'Market Cycles', 'Advanced']
    },
    {
      id: 5,
      title: 'Strategi Scalping dengan Breakout Pattern - Win Rate 85%',
      excerpt: 'Teknik scalping menggunakan breakout pattern yang terbukti efektif. Lengkap dengan contoh entry, SL, dan TP di real chart.',
      category: 'Strategy',
      author: 'Andri Zakarias S',
      date: '10 November 2024',
      readTime: '12 min',
      image: 'https://via.placeholder.com/600x400/ef4444/ffffff?text=Scalping+Strategy',
      tags: ['Scalping', 'Breakout', 'Strategy']
    },
    {
      id: 6,
      title: 'Risk Management: Cara Protect Capital di Market Volatile',
      excerpt: 'Panduan lengkap risk management untuk melindungi modal trading Anda di kondisi market yang volatile. Position sizing dan stop loss strategy.',
      category: 'Education',
      author: 'Andri Zakarias S',
      date: '8 November 2024',
      readTime: '6 min',
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Risk+Management',
      tags: ['Risk Management', 'Education', 'Money Management']
    },
    {
      id: 7,
      title: 'Sektor Teknologi Memimpin Rally - Saham Mana yang Layak Dibeli?',
      excerpt: 'Rotasi sektor ke teknologi memberikan opportunity bagus. Analisis fundamental dan teknikal saham-saham teknologi potensial.',
      category: 'Sector Analysis',
      author: 'Andri Zakarias S',
      date: '5 November 2024',
      readTime: '9 min',
      image: 'https://via.placeholder.com/600x400/14b8a6/ffffff?text=Tech+Sector',
      tags: ['Technology', 'Sector Rotation', 'Fundamental']
    },
    {
      id: 8,
      title: 'Trading Psychology: Mengatasi Fear dan Greed',
      excerpt: 'Aspek psikologis trading yang sering diabaikan. Bagaimana mengenali dan mengatasi emosi yang dapat merusak trading Anda.',
      category: 'Psychology',
      author: 'Andri Zakarias S',
      date: '3 November 2024',
      readTime: '8 min',
      image: 'https://via.placeholder.com/600x400/f97316/ffffff?text=Psychology',
      tags: ['Psychology', 'Mindset', 'Education']
    }
  ]

  const categories = [
    { name: 'Semua', count: articles.length },
    { name: 'Market Outlook', count: 1 },
    { name: 'Stock Picks', count: 1 },
    { name: 'Tutorial', count: 1 },
    { name: 'Strategy', count: 1 },
    { name: 'Education', count: 2 },
    { name: 'Astrology', count: 1 },
    { name: 'Psychology', count: 1 }
  ]

  return (
    <Layout
      title="Analisis & Artikel Trading - CTASaham | Market Outlook, Tutorial, Strategy"
      description="Artikel, analisis market, tutorial trading, dan insight dari analis berpengalaman 26 tahun. Update rutin tentang IHSG, saham potensial, dan strategi trading."
      keywords="analisis saham, artikel trading, market outlook, tutorial trading, strategi trading, edukasi saham"
    >
      {/* Hero */}
      <section className="gradient-gold-blue text-white py-16">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Analisis & Artikel
            </h1>
            <p className="text-xl text-gray-100">
              Market insight, tutorial, dan strategi trading dari expert dengan pengalaman 26 tahun
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Kategori</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gold-50 transition flex items-center justify-between group">
                        <span className="text-gray-700 group-hover:text-gold-600 font-medium">
                          {category.name}
                        </span>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full group-hover:bg-gold-100 group-hover:text-gold-700">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Newsletter Box */}
                <div className="mt-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-6 text-white">
                  <h4 className="font-bold mb-2">Newsletter</h4>
                  <p className="text-sm text-gray-200 mb-4">
                    Dapatkan analisis terbaru langsung di email Anda
                  </p>
                  <a
                    href="#"
                    className="block text-center bg-white text-primary-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition text-sm"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article) => (
                  <article 
                    key={article.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
                  >
                    {/* Image */}
                    <div className="relative h-48 bg-gray-200 overflow-hidden">
                      <div 
                        className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300"
                        style={{
                          backgroundImage: `url(${article.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                      </div>
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition">
                        {article.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More */}
                      <Link 
                        href={`/analisis/${article.id}`}
                        className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-700 transition"
                      >
                        Baca Selengkapnya
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center gap-2">
                <button className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition font-semibold text-gray-700 hover:text-gold-600">
                  Previous
                </button>
                <button className="px-4 py-2 bg-gold-500 text-white rounded-lg shadow hover:shadow-md transition font-semibold">
                  1
                </button>
                <button className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition font-semibold text-gray-700 hover:text-gold-600">
                  2
                </button>
                <button className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition font-semibold text-gray-700 hover:text-gold-600">
                  3
                </button>
                <button className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition font-semibold text-gray-700 hover:text-gold-600">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ingin Analisis Lebih Dalam?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Member CTASaham mendapat akses ke analisis premium, rekomendasi harian, dan support langsung dari expert
            </p>
            <a
              href="/paket-harga"
              className="btn-primary bg-white text-primary-700 hover:bg-gray-100 inline-flex items-center gap-2"
            >
              Lihat Paket Member
              <TrendingUp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
