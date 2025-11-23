import Link from 'next/link'
import Image from 'next/image'
import { 
  MapPin, Phone, Mail, Clock,
  Facebook, Instagram, Youtube, Linkedin,
  TrendingUp, Award, Users, Target
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const layanan = [
    { name: 'Daily Trading Recommendations', href: '/layanan#daily-trading' },
    { name: 'Market Outlook', href: '/layanan#market-outlook' },
    { name: 'Chart Analysis', href: '/layanan#chart-analysis' },
    { name: 'Workshop & Training', href: '/layanan#workshop' },
    { name: 'Financial Astrology', href: '/layanan#astrology' },
    { name: 'Konsultasi Pribadi', href: '/layanan#konsultasi' },
  ]

  const quickLinks = [
    { name: 'Tentang Kami', href: '/tentang-kami' },
    { name: 'Layanan', href: '/layanan' },
    { name: 'Analisis', href: '/analisis' },
    { name: 'Paket Harga', href: '/paket-harga' },
    { name: 'Kontak', href: '/kontak' },
  ]

  const socialMedia = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
  ]

  const stats = [
    { icon: Award, label: '26 Tahun', sublabel: 'Pengalaman' },
    { icon: Users, label: '5000+', sublabel: 'Trader Aktif' },
    { icon: Target, label: '98%', sublabel: 'Akurasi Signal' },
    { icon: TrendingUp, label: 'Konsisten', sublabel: 'Profit' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Stats Section */}
      <div className="section-container py-12 border-b border-gray-700">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-500 rounded-full mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gold-400">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="CTASaham Logo"
              width={160}
              height={50}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm mb-4">
              Platform profesional untuk trading dan edukasi saham dengan pengalaman 26 tahun. 
              Membantu trader Indonesia mencapai Trading for A Living.
            </p>
            <div className="flex space-x-3">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center transition ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Layanan Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-400">Layanan Kami</h3>
            <ul className="space-y-2">
              {layanan.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-gold-400 text-sm transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-gold-400 text-sm transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-400">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Jakarta, Indonesia
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+6281234567890" className="text-gray-400 hover:text-gold-400 transition">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@ctasaham.com" className="text-gray-400 hover:text-gold-400 transition">
                  info@ctasaham.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Senin - Jumat<br />
                  08:00 - 17:00 WIB
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/6281234567890?text=Halo%20CTASaham,%20saya%20ingin%20bertanya"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Chat via WhatsApp"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
      </a>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} <span className="text-gold-400 font-semibold">CTASaham</span>. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-gold-400 transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gold-400 transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
