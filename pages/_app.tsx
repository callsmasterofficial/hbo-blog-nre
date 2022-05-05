import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import siteConfig from '../siteConfig'
import Seotags from '../components/Seotags'

function MyApp({ Component, pageProps }: AppProps) {
  const schema = {
    '@context': 'https://schema.org/',
    '@type': 'WebSite',
    name: siteConfig.siteName,
    url: siteConfig.url,
  }
  const mySchema = JSON.stringify(schema)
  return (
    <>
      <Head> 
        <link rel="icon" href="/favicon.ico" style={{objectFit: "contain"}} />
      </Head>
      <Head>
        <Seotags meta={pageProps.meta}/>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:sitename" content={siteConfig.siteName} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: mySchema }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
