// import  { useEffect } from 'react';
// import { gsap } from 'gsap';

// const SmokeEffect = () => {
//   useEffect(() => {
//     // GSAP Timeline for the smoke animation
//     const tl = gsap.timeline({ repeat: -1 });

//     // Define the smoke animation
//     tl.to("#smoke", {
//       opacity: 1,
//       scale: 2,
//       duration: 2,
//       ease: "power2.inOut",
//     }).to("#smoke", {
//       opacity: 0,
//       scale: 1,
//       duration: 2,
//       ease: "power2.inOut",
//     });

//     // Track cursor movement
//     const handleMouseMove = (event) => {
//       gsap.set("#smoke", {
//         x: event.clientX,
//         y: event.clientY
//       });
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     // Clean up
//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       tl.kill(); // Stop the GSAP animation when the component unmounts
//     };
//   }, []);

//   return (
//     <div id="smoke" className="smoke"></div>
//   );
// };

// export default SmokeEffect;
