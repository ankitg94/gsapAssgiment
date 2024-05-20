import logo from "../img/motionarteffect-img2.png"
import star from "../img/motionarteffect-img4.png"
import star2 from "../img/motionarteffect-img1.png"
import star3 from "../img/motionarteffect-img3.png"
const Review = () => {
  return (
    <>
    
<div className="flex flex-col items-center justify-between">
  <h1 className="text-white mt-12 text-xl sm:text-2xl">Trusted by thousands of users around the world</h1>
</div>

<div className="flex flex-wrap mt-16">
  {/* First Div */}
  <div className="w-full  pl-24  sm:w-1/3 p-4">
    <div className="flex">
      <img src={logo} alt="Logo" className="h-15 w-auto" />
      <div className="ml-4 mt-6">
        <img src={star} alt="Star" className="h-15 w-auto" />
        <h1 className="w-full text-zinc-400 mt-2">4.5 Score, 9 Reviews</h1>
      </div>
    </div>
  </div>

  {/* Second Div */}
  <div className="w-full  pl-24  sm:w-1/3 p-4">
    <div className="flex">
      <img src={star2} alt="Star" className="h-15 w-auto" />
      <div className="ml-4 mt-6">
        <img src={star} alt="Star" className="h-15 w-auto" />
        <h1 className="w-full text-zinc-400 mt-2">4.5 Score, 9 Reviews</h1>
      </div>
    </div>
  </div>

  {/* Third Div */}
  <div className="w-full   pl-24 sm:w-1/3 p-4">
    <div className="flex">
      <img src={star3} alt="Star" className="h-15 w-auto" />
      <div className="ml-4 mt-6">
        <img src={star} alt="Star" className="h-15 w-auto" />
        <h1 className="w-full text-zinc-400 mt-2">4.5 Score, 9 Reviews</h1>
      </div>
    </div>
  </div>
</div>



    </>

  )
}

export default Review