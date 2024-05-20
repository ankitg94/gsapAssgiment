import "./App.css";
import gsap from 'gsap';
import 'aos/dist/aos.css';
import Headers from "./Components/Headers";
import Home from "./Components/Home";
import Review from "./Components/Review";
import Stick from "./Components/Stick";
import Pages from "./Components/Pages";
import Browser from "./Components/Browser";
import Footer from "./Components/Footer";
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const App = () => {
  const canvasRef = useRef();
  const [sizes, setSizes] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // 1- Scene
    const scene = new THREE.Scene();

    // 2- Create element

    //   const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 ); 
    //  const material = new THREE.MeshBasicMaterial({ color: '#D68270' });
    const length = 12, width = 8;

    const shape = new THREE.Shape();
    shape.moveTo( 0,0 );
    shape.lineTo( 0, width );
    shape.lineTo( length, width );
    shape.lineTo( length, 0 );
    shape.lineTo( 0, 0 );
    
    const extrudeSettings = {
      steps: 2,
      depth: 16,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 1,
      bevelOffset: 0,
      bevelSegments: 1
    };
    
    const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
    const material = new THREE.MeshBasicMaterial( { color: "#70D6A0" } );

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Light
    const light = new THREE.PointLight('#0041ff', 1, 10);
    light.position.set(0, 0, 0);
    light.intensity = 25;
    scene.add(light);

    // 3- Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 50;
    scene.add(camera);

    // 4- Renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Controls
    const controls = new OrbitControls(camera, canvasRef.current);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    // Animation loop
    const loop = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(loop);
    };
    loop();

    // Timeline magic
    const tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
    
  
    let mouseDown = false;
    let rgb = [];

    const handleMouseDown = () => (mouseDown = true);
    const handleMouseUp = () => (mouseDown = false);
    const handleMouseMove = (e) => {
      if (mouseDown) {
        rgb = [
          Math.round((e.pageX / sizes.width) * 255),
          Math.round((e.pageY / sizes.height) * 255),
          150,
        ];
        const newColor = new THREE.Color(`rgb(${rgb.join(',')})`);
        gsap.to(mesh.material.color, {
          r: newColor.r,
          g: newColor.g,
          b: newColor.b,
        });
      }
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      setSizes({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [sizes]);

  const movingMainHandler = (e) => {
    console.log("Event Performed main", e.clientX, e.clientY);
    gsap.to(".webgl", {
      x: e.clientX,
      y: e.clientY,
      // duration: 1,
      // opacity: 1,
      // borderRadius: "50%",
    });
  };

  return (
    <div className='main overflow-x-auto' onMouseMove={movingMainHandler}>
      <canvas className='webgl' ref={canvasRef}></canvas>
      <Headers />
      <Home />
      <Review />
      <Stick />
      <Pages />
      <Browser />
      <Footer />
    </div>
  );
};

export default App;
