import Head from 'next/head'
import Navbar from '../components/Navbar'
import ParticleBackground from '../components/ParticleBackground'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="My Portfolio Website" />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </Head>
      {/* <Navbar className='z-10' /> */}
      <ParticleBackground />
      <Footer />
    </div>
  )
}
