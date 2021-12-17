import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import myLogo from '../public/Logo.png'


const Home: NextPage = () => {




  return (
    <>
    
      <Head>
        <title>MagTheDev</title>
        <meta name="description" content="Portfolio of MagTheDev" />
        <link rel="icon" href="/favicon.ico" />

        <link
            rel="preload"
            href="/assets/fonts/AtkinsonHyperlegible/AtkinsonHyperlegible-Regular.ttf"
            as="font"
            crossOrigin=""
          />

      </Head>

      <div className='content_block'>
        <div className={styles.headline_container}>
          <div className={styles.headline}>
            <p className={`${styles.headline_main} ${styles.gradient}`}>Hello</p>
            <p className={styles.headline_sub}>My name is Jakub - aka Mag</p>

            <div>
              <button className={styles.button}>Github</button>
              <button className={styles.button}>Github</button>
              <button className={styles.button}>Github</button>
            </div>

          </div>

          <div className={styles.headline_image}>
            <Image src={myLogo} height={450} width={750}/>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
