import Layout from '../components/layout/Layout'
import { useState } from 'react'
import { 
  MapPin, Phone, Mail, Clock, Send,
  MessageCircle, Instagram, Facebook, Youtube, Linkedin
} from 'lucide-react'

export default function Kontak() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // WhatsApp message format
    const waMessage = `Halo CTASaham, saya ingin bertanya:%0A%0ANama: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubjek: ${formData.subject}%0A%0APesan:%0A${formData.message}`
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/6281234567890?text=${waMessage}`, '_blank')
    
    setFormStatus('success')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      content: 'Jakarta, Indonesia',
      detail: 'Konsultasi dapat dilakukan secara online atau offline (by appointment)'
    },
    {
      icon: Phone,
      title: 'Telepon',
      content: '+62 812-3456-7890',
      detail: 'Senin - Jumat: 08:00 - 17:00 WIB'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@ctasaham.com',
      detail: 'Kami akan membalas dalam 24 jam'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Senin - Jumat',
      detail: '08:00 - 17:00 WIB (Market Hours)'
    }
  ]

  const socialMedia = [
    { 
      name: 'WhatsApp', 
      icon: MessageCircle, 
      link: 'https://wa.me/6281234567890',
      color: 'hover:bg-green-500',
      handle: '+62 812-3456-7890'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      link: '#',
      color: 'hover:bg-pink-500',
      handle: '@ctasaham'
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      link: '#',
      color: 'hover:bg-blue-600',
      handle: 'CTASaham Official'
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      link: '#',
      color: 'hover:bg-red-600',
      handle: 'CTASaham Channel'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      link: '#',
      color: 'hover:bg-blue-700',
      handle: 'Andri Zakarias S'
    }
  ]

  const reasons = [
    'Konsultasi gratis untuk calon member',
    'Informasi lengkap tentang paket dan layanan',
    'Demo platform dan tools trading',
    'Pertanyaan tentang strategi trading',
    'Feedback & saran untuk CTASaham'
  ]

  return (
    <Layout
      title="Kontak Kami - CTASaham | Hubungi Expert Trading Saham"
      description="Hubungi CTASaham untuk konsultasi trading, informasi paket membership, atau pertanyaan seputar layanan. Available via WhatsApp, Email, Phone. Response cepat 24 jam."
      keywords="kontak ctasaham, hubungi andri zakarias, konsultasi trading, customer service, whatsapp trading"
    >
      {/* Hero */}
      <section className="gradient-gold-blue text-white py-16">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hubungi Kami
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Kami siap membantu Anda. Konsultasi gratis untuk calon member!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Kirim Pesan
                </h2>
                <p className="text-gray-600 mb-6">
                  Isi form di bawah atau klik tombol WhatsApp untuk response lebih cepat
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition"
                      placeholder="Nama Anda"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nomor Telepon *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition"
                        placeholder="08123456789"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subjek
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition"
                    >
                      <option value="">Pilih subjek...</option>
                      <option value="Konsultasi Gratis">Konsultasi Gratis</option>
                      <option value="Informasi Paket">Informasi Paket & Harga</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition resize-none"
                      placeholder="Tuliskan pesan Anda di sini..."
                    ></textarea>
                  </div>

                  {formStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                      Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Kirim via WhatsApp
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Dengan mengirim pesan, Anda setuju dengan kebijakan privasi kami
                  </p>
                </form>
              </div>

              {/* Reasons to Contact */}
              <div className="mt-8 bg-gold-50 border border-gold-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Anda bisa menghubungi kami untuk:</h3>
                <ul className="space-y-2">
                  {reasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info & Social Media */}
            <div>
              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-gold-600 font-semibold mb-1">{info.content}</p>
                        <p className="text-sm text-gray-600">{info.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Ikuti Kami
                </h3>
                <div className="space-y-3">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:text-white transition-all ${social.color} group`}
                    >
                      <div className="w-12 h-12 bg-white group-hover:bg-white/20 rounded-lg flex items-center justify-center">
                        <social.icon className="w-6 h-6 text-gray-700 group-hover:text-white transition" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-white">
                          {social.name}
                        </div>
                        <div className="text-sm text-gray-600 group-hover:text-gray-100">
                          {social.handle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Response Badge */}
              <div className="mt-8 bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">⚡</div>
                <h3 className="text-xl font-bold mb-2">Fast Response Guarantee</h3>
                <p className="text-sm text-gray-200">
                  Kami berkomitmen untuk membalas setiap pertanyaan Anda dalam waktu maksimal 24 jam di hari kerja
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-gray-200 h-96">
        <div className="w-full h-full flex items-center justify-center text-gray-600">
          <div className="text-center">
            <MapPin className="w-16 h-16 mx-auto mb-4" />
            <p className="text-lg font-semibold">Map Location</p>
            <p className="text-sm">Jakarta, Indonesia</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
