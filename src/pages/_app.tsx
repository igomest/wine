import { Header } from 'components/Header'
import { ProductsProvider } from 'contexts/useProducts'
import type { AppProps } from 'next/app'
import { GlobalStyle } from 'styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProductsProvider>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </ProductsProvider>
  )
}

export default MyApp
