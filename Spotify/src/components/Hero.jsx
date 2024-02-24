import s from '../assets/landing-slider-layer-1.png'
import h from '../assets/landing-slider-layer-2.png'
import u from '../assets/landing-slider-layer-3.png'
import f1 from '../assets/landing-slider-layer-4.png'
import f2 from '../assets/landing-slider-layer-5.png'
import l from '../assets/landing-slider-layer-6.png'
import e from '../assets/landing-slider-layer-7.png'
const Hero = () => {
    return (
        <div className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-top-left bg-[url('https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/main-home-slide-1a.jpg')] bg-no-repeat ">
            {/* <img src="https://preview.wolfthemes.live/app/uploads/sites/31/2019/11/neonbrand-MENIBa0eZeA-unsplash.jpg" className="absolute" alt="" /> */}
            <div className="font-[spotify] flex  absolute w-full h-full  items-center justify-center backdrop-blur-sm bg-[#0000001f]">
                {[s, h, u, f1, f2, l, e].map((items, key) => {
                    return <span key={key}><img src={items} alt="" className='w-52 -ml-5 aspect-square' /></span>
                })}
            </div>
        </div>
    )
}
// https://preview.wolfthemes.live/app/uploads/sites/31/2019/11/neonbrand-MENIBa0eZeA-unsplash.jpg
export default Hero
