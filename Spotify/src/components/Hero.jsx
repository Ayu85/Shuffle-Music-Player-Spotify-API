import s from '../assets/landing-slider-layer-1.png'
import h from '../assets/landing-slider-layer-2.png'
import u from '../assets/landing-slider-layer-3.png'
import f1 from '../assets/landing-slider-layer-4.png'
import f2 from '../assets/landing-slider-layer-5.png'
import l from '../assets/landing-slider-layer-6.png'
import e from '../assets/landing-slider-layer-7.png'
import { easeIn, motion } from 'framer-motion'
const Hero = () => {
    return (
        <div className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-top-left bg-[url('https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/main-home-slide-1a.jpg')] bg-no-repeat ">
            {/* <img src="https://preview.wolfthemes.live/app/uploads/sites/31/2019/11/neonbrand-MENIBa0eZeA-unsplash.jpg" className="absolute" alt="" /> */}
            <div className="  flex  items-center justify-center absolute w-full h-full  backdrop-blur-sm bg-[#000000a8]">
                <div className='flex  items-center justify-center tilter'>
                    <motion.img initial={{ translateY: -1000 }} animate={{ translateY: 0 }}
                        transition={{ duration: 1, ease: easeIn }}
                        src={s} alt="" className={` w-52 -ml-5 aspect-square`} />
                    <motion.img initial={{ translateY: -1000 }} animate={{ translateY: 0 }}
                        transition={{ duration: 0.5, ease: easeIn, delay: 0.5 }}
                        src={h} alt="" className={` w-52 -ml-5 aspect-square`} />
                    <motion.img initial={{ translateY: -1000 }} animate={{ translateY: 0 }}
                        transition={{ duration: 0.5, ease: easeIn, delay: 0.7 }}
                        src={u} alt="" className={` w-52 -ml-5 aspect-square`} />
                    <motion.img initial={{ translateY: -1000, delay: 0.5 }} animate={{ translateY: 0 }}
                        transition={{ duration: 0.5, ease: easeIn, delay: 0.9 }}
                        src={f1} alt="" className={` w-52 -ml-5 aspect-square`} />
                    <motion.img initial={{ translateY: -1000 }} animate={{ translateY: 0 }}
                        transition={{ duration: 0.5, ease: easeIn, delay: 1.1 }}
                        src={f2} alt="" className={` w-52 -ml-5 aspect-square`} />
                    <motion.img initial={{ translateY: -1000 }} animate={{ translateY: 0 }}
                        transition={{ duration: 0.5, ease: easeIn, delay: 1.3 }}
                        src={l} alt="" className={` w-52 -ml-5 aspect-square`} />
                    <motion.img initial={{ translateY: -1000 }} animate={{ translateY: 0 }}
                        transition={{ duration: 0.5, ease: easeIn, delay: 1.5 }}
                        src={e} alt="" className={` w-52 -ml-5 aspect-square`} />

                </div>
            </div>
        </div>
    )
}
// https://preview.wolfthemes.live/app/uploads/sites/31/2019/11/neonbrand-MENIBa0eZeA-unsplash.jpg
export default Hero
