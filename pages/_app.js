import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AnimateSharedLayout } from 'framer-motion'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>

    </>
  )
}

export default MyApp
