import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../utils/themeConfig'
import Head from 'next/head'
import Layouts from '../Layout'
import Fonts from '../utils/Fonts'
import ScrollObserver from '../helpers/ScrollObserver'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (<ChakraProvider theme={theme} >
          <Fonts/>
          <Head>
            <link rel="icon" sizes='32x32' href="/assets/revolut/revolut32.png" />
            <link rel="icon" sizes="16x16" href="/assets/revolut/revolut16.png" />
            <meta name="description" content="A clone of revolut.com by porkytheblack" />
            <title>Revolut – Business – Open your business account online </title>
          </Head>
          <ScrollObserver>
            <Layouts>
              <Component {...pageProps} />
            </Layouts>
          </ScrollObserver>
        </ChakraProvider> )
}

export default MyApp
