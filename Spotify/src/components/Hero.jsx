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
            <img src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/main-smoke.png" className="absolute h-full w-full z-40" alt="" />
            <div className="  flex flex-col gap-10 items-center justify-center absolute w-full h-full backdrop-blur-sm  bg-[#0000009a]">
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
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }}
                    transition={{ duration: 1, delay: 2 }}
                    className='text-slate-50  text-lg w-1/2 text-center  tracking-wide font-normal italic'>Dive into a world of rhythm and harmony with our Music Player,
                    designed to deliver a seamless and personalized audio experience
                    tailored to your musical preferences</motion.div>
              
            </div>
        </div>
    )
}
// https://preview.wolfthemes.live/app/uploads/sites/31/2019/11/neonbrand-MENIBa0eZeA-unsplash.jpg
export default Hero
