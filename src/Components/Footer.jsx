const Footer = () => {
  return (
    <>
<footer className="text-white  py-4 px-8 md:px-16 mt-12 lg:mt-36 bg-gradient-to-r from-start from-0% via-35% via-pink-400 to-end to-100%">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    <div className="text-center md:text-left mb-4 md:mb-0">&copy; 2023 Copyright. All rights reserved by QodeMatrix</div>
    <div>
      <a href="#" className="text-gray-400 hover:text-white mr-4">Documentation</a>
      <a href="#" className="text-gray-400 hover:text-white">Support</a>
    </div>
  </div>
</footer>
  
    </>
  )
}

export default Footer