import logo from "../img/MotionArtEffect-logo.png"
const Home = () => {
  return (
    <>
     <div className="py-4 sm:w-full md:w-full">
      <div className="container mx-auto flex items-center  justify-between">
        <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-15 w-auto ml-4 "/>
        </div>
        <button className="bg-white text-black px-9 py-3 
        rounded-lg border border-white hover:bg-opacity-0
        hover:text-white transition  shadow-md border 
        border-2 border-gray-100  duration-100 mr-4 text-xl m-auto 
        sm:mr-1 text-sm
         ">
        Purchase Now</button>      
    </div>
    {/* second */}
     {/* <div className="bg-opacity-0 sm:flex sm:text-4xl "> */}
        {/* <!-- First Div --> */}
        {/* 
        <div className="w-1/4 p-4 mt-16 ml-4  sm:text-4xl   ">
        <h1 className="text-xl   font-sora bg-gradient-to-r from-start from-0% to-end to-25%  bg-clip-text  text-transparent">Transform</h1>
        <h1 className="text-xl font-sora bg-gradient-to-r from-start from-0% to-end to-20%  bg-clip-text  text-transparent">Your Website</h1> 
        <h1 className="text-white mt-4">With Motion </h1>
        <h1 className="text-white">Art Effect</h1>
        </div>

 */}
        {/* <!-- Second Div --> */}
        {/* 
        <div className="w-2/4  p-4 mt-16 py-8">
            <h2 className="text-6xl font-semibold w-12/12 mb-4 text-white  gap-y-1.5">
            Attract Your Visitors Attention With Colorful
            </h2>
         <h1 className="text-7xl font-sora bg-gradient-to-r from-start from-0% to-end to-40%  bg-clip-text  text-transparent">Motion Art Effect</h1> 
          <h1 className="w-12/12 text-zinc-400 m-auto mt-12">Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly inte grating captivating animations into your website </h1>
        </div>
 */}
        {/* <!-- Third Div --> */}
        {/* 
        <div className="w-1/4 p-4">
           
        </div>
        </div> */}


<div className="bg-opacity-0 sm:flex sm:text-4xl">
  {/* <!-- First Div --> */}
  <div className="w-full sm:w-1/4 p-4 mt-16 ml-4 text-6xl sm:text-4xl">
    <h1 className="text-6xl sm:text-4xl font-sora bg-gradient-to-r from-start from-0% to-end to-25% bg-clip-text text-transparent">Transform</h1>
    <h1 className="text-6xl sm:text-4xl font-sora bg-gradient-to-r from-start from-0% to-end to-20% bg-clip-text text-transparent">Your Website</h1>
    <h1 className="text-white mt-4">With Motion</h1>
    <h1 className="text-white">Art Effect</h1>
  </div>

  {/* <!-- Second Div --> */}
  <div className="w-full sm:w-2/4 p-4 mt-16 py-8">
    <h2 className="text-6xl font-semibold w-12/12 mb-4 text-white gap-y-1.5">
      Attract Your Visitors Attention With Colorful
    </h2>
    <h1 className="text-7xl font-sora bg-gradient-to-r from-start from-0% to-end to-40% bg-clip-text text-transparent">Motion Art Effect</h1>
    <h1 className="w-12/12 text-zinc-400 m-auto mt-12">Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website</h1>
  </div>

  {/* <!-- Third Div --> */}
  <div className="hidden sm:w-1/4 p-4">
    {/* Content for the third div */}
  </div>
</div>





</div>  
    
    </>
  )
}

export default Home