import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from "../components/Navbar" 
import Banner from "../components/Banner"
import Text from '../components/Text';
import Text2 from "../components/Text2"
import Fask_ques from "../components/Fask_ques"
import Footer from "../components/Footer"
import Script from 'next/script'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Hbo-Watch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        />
      </Head>
      <Script src="https://cdn.tailwindcss.com" />

       <Navbar/>
       <Banner/>
       <Text/>
      <Text2/>
       <Fask_ques/>
       <Footer/>
       
       <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
    </div>
  )
}

export default Home
