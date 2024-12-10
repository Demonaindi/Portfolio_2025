import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGLTF } from '@react-three/drei';

const Angular = (props) => {
  const AngularRef = useRef(null);
  const { scene } = useGLTF('/models/AngularLogo.glb');

  useEffect(() => {
    if (AngularRef.current) {
      gsap.to(AngularRef.current.position, {
        y: AngularRef.current.position.y + 0.5, 
        duration: 3, 
        repeat: -1, 
        yoyo: true, 
        ease: "easeInOutSine" 
      });
    }
  }, [AngularRef]);

  return (
    <>
    <mesh ref={AngularRef} {...props} >
      <primitive object={scene} />
    </mesh>
    <spotLight intensity={1} />
    </>
  );
};

export default Angular;

