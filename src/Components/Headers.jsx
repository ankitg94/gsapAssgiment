import logo from "../img/motionarteffect-img2.png"
const Headers = () => {
  return (
    <>
    <header className="bg-coutom-head py-4  sm:w-full md:w-full">
    <div className="container mx-auto flex items-center justify-between">
        
        <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto "/>
            <h1 className="text-white text-3xl font-sora">envato</h1>
            <h1 className="text-custom-green text-3xl  font-thin">market</h1>
        </div>
        
        
        <button className="bg-custom-green hover:bg-custom-green text-white font-sora py-1 px-3 mr-4 rounded">
            Buy Now
        </button>
    </div>
</header>  
    </>
  )
}

export default Headers