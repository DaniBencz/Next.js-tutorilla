import '../styles/global.css'

// this file is used to define global .css rules
// component <App/> is not invoked anywhere explicitly, it is just a Next.js thing...
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}