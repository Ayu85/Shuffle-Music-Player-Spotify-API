const Hero = () => {
    return (
        <div className="relative h-[90vh] overflow-hidden bg-right bg-[url('https://preview.wolfthemes.live/app/uploads/sites/31/2019/11/keagan-henman-fGbcnnkkFqI-unsplash.jpg')] bg-no-repeat ">
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
