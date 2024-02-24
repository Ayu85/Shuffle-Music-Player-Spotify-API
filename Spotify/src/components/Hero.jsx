const Hero = () => {
    return (
        <div className="relative h-[100vh] overflow-hidden bg-top-left bg-[url('https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/main-home-slide-1a.jpg')] bg-no-repeat ">
            {/* <img src="https://preview.wolfthemes.live/app/uploads/sites/31/2019/11/neonbrand-MENIBa0eZeA-unsplash.jpg" className="absolute" alt="" /> */}
            <div className="font-[spotify] text-[20rem]  uppercase font-extrabold absolute">
                {['s', 'h', 'u', 'f', 'f', 'l', 'e'].map((items, key) => {
                    return <span key={key}>{items}</span>
                })}
            </div>
        </div>
    )
}
// https://preview.wolfthemes.live/app/uploads/sites/31/2019/11/neonbrand-MENIBa0eZeA-unsplash.jpg
export default Hero
