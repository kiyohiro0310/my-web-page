import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Aboutme from '../components/aboutme'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Portfolio from '../components/portfolio'
import Skills from '../components/skills'
import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
  const [show, setShow] = useState(false);

  function setTrue() {
    setShow(true);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Kiyohiro Kambayashi</title>
        <meta name="description" content="This website is about Kiyohiro Kambayashi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero show={show} onSet={setTrue}/>
      {show &&
          <div>
            <Aboutme />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
          </div>
    }
    </div>
  )
}

export default Home