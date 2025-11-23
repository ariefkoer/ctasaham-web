import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="CTASaham - Platform trading dan edukasi saham profesional dengan pengalaman 26 tahun. Rekomendasi harian, analisis teknikal, dan workshop trading." />
        <meta name="keywords" content="saham, trading, rekomendasi saham, analisis teknikal, edukasi trading, CTASaham" />
        <meta name="author" content="CTASaham - Andri Zakarias S" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
