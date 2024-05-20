import section from "../img/motionarteffect-img11.png"
import page from  "../img/motionarteffect-img10.png"
const Pages = () => {
  return (
    <>
       {/* <div className="flex flex-col items-center justify-between"> 
       <h1 className="text-white mt-12  text-4xl font-semibold ">
       Apply On Any Section Or Enable For</h1>
       <h1 className="text-white mt-4  text-4xl font-semibold ">
              Whole Page</h1>
        </div>
      {/*Card*/}
      {/*  
      <div className="flex m-8"> 
        <div className="w-1/2 shadow-md border  border-2 border-gray-700 bg-gray-900 m-auto pl-12  pt-4 text-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
        <h1 className="text-2xl font-semibold p-4">Apply On Section</h1>
        <h1 className="text-xl  text-zinc-400 p-4">Apply on section is a game-changer, offering an unparalleled way to
         manage applications directly from your website. </h1>
         <img className="p-4" src={section}/>
        </div>

        <div className="w-1/2 shadow-md border  border-2 border-gray-700 m-auto mt-36 ml-4 text-white  bg-gray-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <h1 className="text-2xl font-semibold p-4">Apply On Page</h1>
        <h1 className="text-xl  text-zinc-400 p-4">
        Take your website to new heights with Motion Art for Elementor.
         Embrace the power of motion and animation.
         </h1>
         <img className="p-4" src={page}/>
     
        </div>
        </div> */}
<div className="flex flex-col items-center justify-between">
  <h1 className="text-white mt-4 ml-12 text-2xl font-semibold sm:text-4xl truncate ">
    Apply On Any Section Or Enable For
  </h1>
  <h1 className="text-white mt-4 ml-12 text-2xl font-semibold sm:text-4xl truncate ">
      Whole Page
  </h1>

  
</div>

{/* Cards */}
<div className="flex flex-col md:flex-row m-8">
  <div className="w-full md:w-1/2 shadow-md border border-2 border-gray-700 bg-gray-900 mx-auto mt-8 md:mt-0 md:mr-4 pl-12 pt-4 text-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <h1 className="text-2xl font-semibold p-4">Apply On Section</h1>
    <h1 className="text-xl text-zinc-400 p-4">
      Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.
    </h1>
    <img className="p-4" src={section} alt="Section" />
  </div>

  <div className="w-full md:w-1/2 shadow-md border border-2 border-gray-700 mx-auto mt-8 md:mt-0 md:ml-4 text-white bg-gray-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <h1 className="text-2xl font-semibold p-4">Apply On Page</h1>
    <h1 className="text-xl text-zinc-400 p-4">
      Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.
    </h1>
    <img className="p-4" src={page} alt="Page" />
  </div>
</div>






    
    </>
  )
}

export default Pages