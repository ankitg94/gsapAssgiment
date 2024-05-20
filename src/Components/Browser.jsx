import section from "../img/motionarteffect-img8.png"
import shape from "../img/motionarteffect-img6.png"
import shape1 from  "../img/motionarteffect-img7.png"
import shape2 from "../img/motionarteffect-img9.png"

const Browser = () => {
  return (
    <>
        {/* card-2 */}
    {/* First Section */}
<div className="bg-gray-900 rounded-xl shadow-md overflow-hidden m-8 md:m-12">
  <div className="p-8 text-white flex flex-col items-center justify-center">
    <h1 className="text-2xl font-semibold p-4">Supported by All Popular Browsers</h1>
    <h1 className="text-xl text-zinc-400 p-4">Rest assured, Motion Art is designed to be compatible with all major web browsers.</h1>
    <img className="p-4" src={section} alt="Browser Support" />
  </div>
</div>

{/* Next Section */}
<div className="p-8 text-white flex flex-col items-center justify-center">
  <h1 className="text-4xl font-semibold mb-4 ">An All-Round Plugin With Powerful Features</h1>
  <h1 className="text-xl text-zinc-400 mb-4">Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</h1>
</div>

{/* Last Card */}
<div className="flex flex-wrap justify-center m-8 sm:flex-wrap">
  <div className="w-full md:w-1/4 m-4 shadow-md border border-2 border-gray-700 text-white bg-gray-900 rounded-xl overflow-hidden md:max-w-2xl">
    <img className="p-4" src={shape} alt="Light Weight" />
    <h1 className="text-2xl font-semibold p-4">Light Weight</h1>
    <h1 className="text-xl text-zinc-400 p-4">Motion Art for Elementor is designed to be lightweight.</h1>
  </div>

  <div className="w-full md:w-1/4 m-4 shadow-md border border-2 border-gray-700 text-white bg-gray-900 rounded-xl overflow-hidden md:max-w-2xl">
    <img className="p-4" src={shape1} alt="100% Responsive" />
    <h1 className="text-2xl font-semibold p-4">100% Responsive</h1>
    <h1 className="text-xl text-zinc-400 p-4">Create a consistent visual experience across all devices.</h1>
  </div>

  <div className="w-full md:w-1/4 m-4 shadow-md border border-2 border-gray-700 text-white bg-gray-900 rounded-xl overflow-hidden md:max-w-2xl">
    <img className="p-4" src={shape2} alt="User Friendly Interface" />
    <h1 className="text-2xl font-semibold p-4">User Friendly Interface</h1>
    <h1 className="text-xl text-zinc-400 p-4">Ensure a smooth experience for both applicants and administrators.</h1>
  </div>
</div>




    </>
  )
}

export default Browser