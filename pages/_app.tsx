import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '@libs/createEmotionCache'
import getDesignTokens from '@libs/theme'
import { createTheme, PaletteMode, responsiveFontSizes } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'
import Layout from 'src/components/layout'
import '../src/styles/swiper.css'

//Todo

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const [mode, setMode] = React.useState<PaletteMode>('light')
  // const colorMode = React.useMemo(
  //   () => ({
  //     // The dark mode switch would invoke this method
  //     toggleColorMode: () => {
  //       setMode((prevMode: PaletteMode) =>
  //         prevMode === 'light' ? 'dark' : 'light',
  //       );
  //     },
  //   }),
  //   [],
  // );

  let customtheme = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  )
  customtheme = responsiveFontSizes(customtheme)
  const clientRef = React.useRef<null | any>(null)

  clientRef! && console.log(clientRef)

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={customtheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <Layout>
          <CssBaseline />
          <Component ref={clientRef} {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}
