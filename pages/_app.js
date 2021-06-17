import '../assets/scss/main.scss'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import 'swiper/components/scrollbar/scrollbar.scss';
import { AnimatePresence } from 'framer-motion';


function MyApp({ Component, pageProps }) {
  return (
    // <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    // </AnimatePresence>
    
  )
}

export default MyApp
