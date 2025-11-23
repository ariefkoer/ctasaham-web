import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [layananDropdownOpen, setLayananDropdownOpen] = useState(false)

  const layananItems = [
    { name: 'Daily Trading Recommendations', href: '/layanan#daily-trading' },
    { name: 'Market Outlook', href: '/layanan#market-outlook' },
    { name: 'Chart Analysis', href: '/layanan#chart-analysis' },
    { name: 'Workshop & Training', href: '/layanan#workshop' },
    { name: 'Financial Astrology', href: '/layanan#astrology' },
    { name: 'Konsultasi Pribadi', href: '/layanan#konsultasi' },
  ]

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/tentang-kami' },
    { name: 'Layanan', href: '/layanan', hasDropdown: true },
    { name: 'Analisis', href: '/analisis' },
    { name: 'Paket Harga', href: '/paket-harga' },
    { name: 'Kontak', href: '/kontak' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-2">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
            <div className="flex items-center gap-4">
              <a href="tel:+6281234567890" className="flex items-center gap-2 hover:text-gold-300 transition">
                <Phone className="w-4 h-4" />
                <span>+62 812-3456-7890</span>
              </a>
              <a href="mailto:info@ctasaham.com" className="flex items-center gap-2 hover:text-gold-300 transition">
                <Mail className="w-4 h-4" />
                <span>info@ctasaham.com</span>
              </a>
            </div>
            <div className="text-xs sm:text-sm">
              <span className="font-semibold">26 Tahun Pengalaman</span> | Trading for A Living
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="CTASaham Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>
                <div>
                  <h1 className="text-2xl font-bold text-black">CTA-SAHAM</h1>
                  <p className="text-xs text-xbreaker-accent font-semibold">Professional Equity Trading & Market Intelligence</p>
                </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <Link
                      href={item.href}
                      className="flex items-center text-gray-700 hover:text-gold-600 font-medium transition"
                      onMouseEnter={() => setLayananDropdownOpen(true)}
                      onMouseLeave={() => setLayananDropdownOpen(false)}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {layananDropdownOpen && (
                      <div 
                        className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 border border-gray-100"
                        onMouseEnter={() => setLayananDropdownOpen(true)}
                        onMouseLeave={() => setLayananDropdownOpen(false)}
                      >
                        {layananItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gold-50 hover:text-gold-600 transition"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-gold-600 font-medium transition"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/6281234567890?text=Halo%20CTASaham,%20saya%20ingin%20bergabung"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Bergabung Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-gold-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-gray-700 hover:text-gold-600 font-medium transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {layananItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-sm text-gray-600 hover:text-gold-600 transition"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="https://wa.me/6281234567890?text=Halo%20CTASaham,%20saya%20ingin%20bergabung"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center text-sm"
              >
                Bergabung Sekarang
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
