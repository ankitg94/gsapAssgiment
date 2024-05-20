import Sticker from "../img/motionarteffect-img5.png"
import {FiArrowRight} from "react-icons/fi";
const Stick = () => {
  return (
    <>
<div className="flex flex-col mt-20 sm:flex-row">
  <div className="left w-full sm:w-10/12">
    <h2 className="text-4xl ml-8 sm:ml-0 font-semibold w-full sm:w-8/12 mb-4 text-white gap-y-1.5">
      Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
    </h2>
    <h2 className="text-md ml-8 sm:ml-0 text-zinc-400 w-12/12 sm:w-8/12 mb-4 text-white gap-y-1.5">
      Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
    </h2>
    <button className="text-white px-9 py-3 rounded-xl ml-24 sm:ml-0 bg-gradient-to-r from-end from-0% via-35% via-end to-start to-80% duration-100 mr-4 text-xl flex items-center">
      Purchase from Envato
      <FiArrowRight className="ml-2" />
    </button>
  </div>
  <div className="p-24 w-full sm:w-6/12">
    <img src={Sticker} alt="Logo" className="h-15 w-auto" />
  </div>
</div>



    </>
  )
}

export default Stick