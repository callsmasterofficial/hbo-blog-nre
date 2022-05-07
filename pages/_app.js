import '../styles/globals.css'
import Head from 'next/head'
import siteConfig from '../siteConfig'
import Seotags from '../components/Seotags'

function MyApp({ Component,pageProps }) {
  const schema = {
    '@context': 'https://schema.org/',
    '@type': 'WebSite',
    name: siteConfig.siteName,
    url: siteConfig.url,
  }
  const mySchema = JSON.stringify(schema)
  console.log("props",pageProps)
  return (
    <>
      <Head>
      <title>{pageProps.meta?pageProps.meta.title:"HBO Max Watch Party - Sync with Your Friends | HBO Max Party"}</title>
        {pageProps.meta && <Seotags meta={pageProps.meta}/>}
        <link rel="icon" href="/favicon.ico" style={{objectFit: "contain"}} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:sitename" content={siteConfig.siteName} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        />
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
