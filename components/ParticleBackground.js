import React from 'react'
import Particles from 'react-tsparticles'
import particlesConfig from '../config/particle-config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faLocation } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faSpotify, faTwitter } from '@fortawesome/free-brands-svg-icons'
import useSWR from 'swr';
import { motion } from 'framer-motion'

export default function ParticleBackground() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const { data } = useSWR('/api/spotify', fetcher);
    return (
        // Particles background: 
        <div className='flex flex-1 h-screen max-h-fit flex-col' >
            <motion.div className='' initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 5 }}>
                <Particles params={particlesConfig} className=' w-full absolute z-0 h-screen max-h-fit'></Particles>
            </motion.div>
            {/* Greeting */}
            <div className='mt-40 flex flex-col justify-center items-center' >
                <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='flex flex-col items-center justify-center w-full font-dmSans z-2'>
                    <h1 className='text-white text-5xl md:text-6xl xl:text-7xl z-10'>hi, i&apos;m <span className='bg-gradient-to-r from-fuchsia-600 to-pink-600 font-bold bg-clip-text text-transparent'>vikram!</span></h1>
                    <h2 className='text-white text-3xl md:text-4xl lg:text-5xl mt-2'>cs student <span className='bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent'>+</span> dev</h2>
                    <h3 className='text-white mt-8 text-2xl md:text-2xl lg:text-3xl'><FontAwesomeIcon icon={faLocation} className='pr-4' /> NJ / NYC</h3>
                </motion.div>
                {/* Spotify Widget */}
                <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className='text-white mt-56 md:mt-56 lg:mt-80 font-dmSans z-2 w-5/6 sm:w-96 text-base'>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={
                            data?.isPlaying
                                ? data.songUrl
                                : 'https://open.spotify.com/user/mmarkiv7'
                        }
                        className='relative flex items-center p-4 gap-4 md:gap-8 bg-navMenu rounded-lg bg-opacity-50'
                    >

                        <div className='w-12 md:w-16 lg:w-20'>
                            {data?.isPlaying ? (
                                <img
                                    className='w-12 md:w-16 lg:w-20 shadow-sm'
                                    src={data?.albumImageUrl}
                                    alt={data?.album}
                                />
                            ) : (
                                <FontAwesomeIcon icon={faSpotify} className='text-3xl md:text-4xl lg:text-5xl' />
                            )}
                        </div>
                        <div className='flex-1 justify-center'>
                            <p className='font-bold component'>
                                {data?.isPlaying ? data.title : 'Not Playing'}
                            </p>
                            <p className='text-xs md:text-sm'>
                                {data?.isPlaying ? data.artist : 'Spotify'}
                            </p>
                        </div>

                    </a>
                </motion.div>
                {/* Icons */}
                <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} className='text-white flex gap-8 text-4xl mt-8 md:mt-20 z-10 pb-20'>
                    <a href='https://github.com/og-vikram'><FontAwesomeIcon icon={faGithub} className='z-10 hover:opacity-60 transition-opacity duration-200' /></a>
                    <a href='https://instagram.com/og.vikram'><FontAwesomeIcon icon={faInstagram} className='z-10 hover:text-instagram transition-colors duration-200' /></a>
                    <a href='mailto:vikram.sridharr@gmail.com'><FontAwesomeIcon icon={faEnvelopeOpen} className='z-10 hover:text-gmail transition-colors duration-200' /></a>
                    <a href='https://twitter.com/ogvikram'><FontAwesomeIcon icon={faTwitter} className='z-10 hover:text-twitter transition-colors duration-200' /></a>
                    <a href='https://open.spotify.com/user/mmarkiv7'><FontAwesomeIcon icon={faSpotify} className='z-10 hover:text-spotify transition-colors duration-200' /></a>

                </motion.div>
            </div>
        </div>


    )
}
