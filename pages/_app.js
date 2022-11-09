import '../styles/globals.css';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <> 
      <NextNProgress 
          color='#84cc16'
          height={4}
        />
      
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
