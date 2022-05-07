
import Head from 'next/head'
import Navbar from "../components/Navbar" 
import Banner from "../components/Banner"
import Text from '../components/Text';
import Text2 from "../components/Text2"
import Fask_ques from "../components/Fask_ques"
import Footer from "../components/Footer"
import Script from 'next/script'

export async function getStaticProps(){
  return {
    props:{
      meta:{
        title:"HBO Max Watch Party - Sync with Your Friends | HBO Max Party",
        description:"HBO Max Watch Party allows you to Stream HBO Max with friends/family, anytime, anywhere! Install HBO Max Party Extension Now.",
        keywords:"HBO Watch Party, Watch Party HBO Max, HBO Go Watch Party, HBO Max Watch Party, HBO Party, HBO Max Party",
        pageUrl:"https://www.hbomaxwatchparty.com/",
        featuredImage:""
      }
    }
  }
}


const Home = () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
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
