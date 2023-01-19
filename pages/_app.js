import { NextSeo } from 'next-seo'
import '@/styles/normalize.css'
import '@/styles/globals.css'
import Header from '@/componentes/header/Header'
import Footer from '@/componentes/footer/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        description="Este es el sitio de la empresa DenveDev."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'DenveDev company',
          description: 'Este es el sitio de la empresa DenveDev.',
          images: [
            {
              url: '/imagenes/proyect-1.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: '/imagenes/proyect-2.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: '/imagenes/proyect-3.jpg' },
            { url: '/imagenes/proyect-4.jpg' },
          ],
          siteName: 'DenveDev',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
