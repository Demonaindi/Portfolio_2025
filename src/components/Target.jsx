import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGLTF } from '@react-three/drei';

const Target = (props) => {
  const TargetRef = useRef(null);
  const { scene } = useGLTF('/models/react.glb');

  useEffect(() => {
    if (TargetRef.current) {
      gsap.to(TargetRef.current.rotation, {
        z: Math.PI * 500, 
        duration: 8000,    
        repeat: -1,     
      });
    }
  }, [TargetRef]);

  return (
    <mesh ref={TargetRef} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;

