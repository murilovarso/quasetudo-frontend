import '../css/style.css'
import { CartProvider } from '../lib/CartContext'

function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}
export default App
