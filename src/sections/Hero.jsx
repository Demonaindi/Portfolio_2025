/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { HackerRoom } from '../components/HackersRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index.js';
import Target from '../components/Target.jsx'
import Angular from '../components/Angular.jsx'
import Cube from '../components/Cube.jsx'
import Rings from '../components/Rings.jsx'
import HeroCamera from '../components/HeroCamera.jsx'
import Button from '../components/Button.jsx'

const Hero = () => {

  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // const ctrls = useControls('HackerRoom', {
  //   positionX: { value: 2.5, min: -10, max: 10 },
  //   positionY: { value: 2.5, min: -10, max: 10 },
  //   positionZ: { value: 2.5, min: -10, max: 10 },
  //   rotationX: { value: 0, min: -10, max: 10 },
  //   rotationY: { value: 0, min: -10, max: 10 },
  //   rotationZ: { value: 0, min: -10, max: 10 },
  //   scale: { value: 1, min: 0.1, max: 10 },
  // }
  // );

  return (
    <section className='min-h-screen w-full flex flex-col 
    relative' id='Hero'>
      <div className='w-full mx-auto flex flex-col 
      sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-xl font-medium
         text-white text-center font-generalsans'>Hola, soy <span className='text-gray_gradient'>Demian</span>
          <span className='waving-hand'>👋</span></p>
        <p className='hero_tag text-gray_gradient'>Desarrollador Fullstack</p>
      </div>

      <div className='w-full h-full absolute inset-0'>
        <Canvas>
          <Suspense fallback={<CanvasLoader />}>

            <perspectiveCamera makeDefault position={[0, 0, 20]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={sizes.deskRotation}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.reactLogoPosition} scale={[0.7, 0.7, 0.7]} rotation={[0, 2.4, 0]} />
              <Angular position={sizes.AngularPosition} rotation={[0, 2, 0]} scale={[0.5, 0.5, 0.5]} />
              <Cube position={sizes.cubePosition} scale={[0.5, 0.5, 0.5]} />
              <Rings position={sizes.ringPosition} />
            </group>


            <ambientLight intensity={1.5} />

            <directionalLight position={[10, 10, 10]} intensity={1.3} />

          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href='#About' className='w-fit'>
          <Button name="Comenzemos a trabajar" isBeam
            containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  )
}

export default Hero