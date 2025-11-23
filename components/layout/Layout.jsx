import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, title, description, keywords }) {
  const defaultTitle = 'CTASaham - Trading & Edukasi Saham Profesional'
  const defaultDescription = 'Platform trading dan edukasi saham profesional dengan pengalaman 26 tahun. Rekomendasi harian, analisis teknikal, workshop trading, dan konsultasi pribadi untuk Trading for A Living.'
  const defaultKeywords = 'saham, trading, rekomendasi saham, analisis teknikal, edukasi trading, CTASaham, Andri Zakarias, workshop saham, konsultasi trading'

  return (
    <>
      <Head>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="keywords" content={keywords || defaultKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title || defaultTitle} />
        <meta property="og:description" content={description || defaultDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || defaultTitle} />
        <meta name="twitter:description" content={description || defaultDescription} />
        <link rel="canonical" href="https://ctasaham.com" />
      </Head>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
