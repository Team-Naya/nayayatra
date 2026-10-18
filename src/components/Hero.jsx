import React, { useRef, useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, PresentationControls, RoundedBox, Float, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

// --- CUTE ISOMETRIC CITY MATERIALS ---
const matDirt = new THREE.MeshStandardMaterial({ color: '#8d6e63', roughness: 1 })
const matGrass = new THREE.MeshStandardMaterial({ color: '#aed581', roughness: 0.8 })
const matRoad = new THREE.MeshStandardMaterial({ color: '#78909c', roughness: 0.6 })
const matWhite = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.2 })
const matPink = new THREE.MeshStandardMaterial({ color: '#f48fb1', roughness: 0.3 })
const matBlue = new THREE.MeshStandardMaterial({ color: '#81d4fa', roughness: 0.3 })
const matYellow = new THREE.MeshStandardMaterial({ color: '#fff59d', roughness: 0.3 })
const matTree = new THREE.MeshStandardMaterial({ color: '#4caf50', roughness: 0.9 })
const matTrunk = new THREE.MeshStandardMaterial({ color: '#795548', roughness: 0.9 })
const matWindow = new THREE.MeshStandardMaterial({ color: '#ffee58', emissive: '#ffee58', emissiveIntensity: 0.8 })
const matCloud = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 1, transparent: true, opacity: 0.9 })
const matCar = new THREE.MeshStandardMaterial({ color: '#ff5252', roughness: 0.4 })

const Building = ({ position, colorMat, size, layers, windowLayout }) => {
  return (
    <group position={position}>
      <RoundedBox args={size} radius={0.05} material={colorMat} position={[0, size[1]/2, 0]} />
      {/* Windows */}
      {Array.from({ length: layers }).map((_, i) => (
        <group key={i} position={[0, 0.3 + i * 0.4, 0]}>
          {windowLayout === 'front' && (
            <>
              <mesh material={matWindow} position={[size[0]/4, 0, size[2]/2 + 0.01]}><planeGeometry args={[0.15, 0.2]} /></mesh>
              <mesh material={matWindow} position={[-size[0]/4, 0, size[2]/2 + 0.01]}><planeGeometry args={[0.15, 0.2]} /></mesh>
            </>
          )}
          {windowLayout === 'wrap' && (
             <>
              <mesh material={matWindow} position={[size[0]/4, 0, size[2]/2 + 0.01]}><planeGeometry args={[0.15, 0.2]} /></mesh>
              <mesh material={matWindow} position={[-size[0]/4, 0, size[2]/2 + 0.01]}><planeGeometry args={[0.15, 0.2]} /></mesh>
              <mesh material={matWindow} position={[size[0]/2 + 0.01, 0, size[2]/4]} rotation={[0, Math.PI/2, 0]}><planeGeometry args={[0.15, 0.2]} /></mesh>
              <mesh material={matWindow} position={[size[0]/2 + 0.01, 0, -size[2]/4]} rotation={[0, Math.PI/2, 0]}><planeGeometry args={[0.15, 0.2]} /></mesh>
             </>
          )}
        </group>
      ))}
    </group>
  )
}

const Tree = ({ position, scale = 1 }) => (
  <group position={position} scale={scale}>
    <mesh material={matTrunk} position={[0, 0.1, 0]}><cylinderGeometry args={[0.04, 0.04, 0.2]} /></mesh>
    <mesh material={matTree} position={[0, 0.3, 0]}><sphereGeometry args={[0.15, 16, 16]} /></mesh>
    <mesh material={matTree} position={[0.08, 0.25, 0.08]}><sphereGeometry args={[0.1, 16, 16]} /></mesh>
    <mesh material={matTree} position={[-0.08, 0.35, -0.05]}><sphereGeometry args={[0.12, 16, 16]} /></mesh>
  </group>
)

const Cloud = ({ position, scale = 1, speed = 1 }) => {
  const ref = useRef()
  useFrame((state) => {
    if(ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + position[0]) * 0.1
      ref.current.position.x += 0.005 * speed
      if (ref.current.position.x > 5) ref.current.position.x = -5
    }
  })
  return (
    <group ref={ref} position={position} scale={scale}>
      <mesh material={matCloud} position={[0, 0, 0]}><sphereGeometry args={[0.3, 16, 16]} /></mesh>
      <mesh material={matCloud} position={[0.2, -0.05, 0.1]}><sphereGeometry args={[0.2, 16, 16]} /></mesh>
      <mesh material={matCloud} position={[-0.2, -0.05, -0.1]}><sphereGeometry args={[0.25, 16, 16]} /></mesh>
      <mesh material={matCloud} position={[0.1, 0.1, -0.15]}><sphereGeometry args={[0.2, 16, 16]} /></mesh>
    </group>
  )
}

const Car = () => {
  const ref = useRef()
  useFrame((state) => {
    // Simple loop around the city road
    const t = (state.clock.elapsedTime * 0.5) % 4
    if (t < 1) {
      ref.current.position.set(-1.2 + t*2.4, 0.05, 1.2)
      ref.current.rotation.y = Math.PI / 2
    } else if (t < 2) {
      ref.current.position.set(1.2, 0.05, 1.2 - (t-1)*2.4)
      ref.current.rotation.y = Math.PI
    } else if (t < 3) {
      ref.current.position.set(1.2 - (t-2)*2.4, 0.05, -1.2)
      ref.current.rotation.y = -Math.PI / 2
    } else {
      ref.current.position.set(-1.2, 0.05, -1.2 + (t-3)*2.4)
      ref.current.rotation.y = 0
    }
  })
  return (
    <group ref={ref}>
      <RoundedBox args={[0.15, 0.1, 0.3]} radius={0.02} material={matCar} position={[0, 0.05, 0]} />
      <RoundedBox args={[0.12, 0.08, 0.15]} radius={0.02} material={matWhite} position={[0, 0.12, 0.02]} />
    </group>
  )
}

function IsometricCityBlock() {
  const group = useRef()
  const atmosphere = useRef()
  const surface = useRef()
  const bedrock = useRef()

  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 900, 1)
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame((state, delta) => {
    const t = scrollProgress
    
    // Auto rotation
    group.current.rotation.y += delta * 0.1

    // Parallax explosion into discrete layers
    atmosphere.current.position.y = THREE.MathUtils.lerp(atmosphere.current.position.y, t * 4, 0.1)
    surface.current.position.y = THREE.MathUtils.lerp(surface.current.position.y, t * 1.5, 0.1)
    bedrock.current.position.y = THREE.MathUtils.lerp(bedrock.current.position.y, -t * 3, 0.1)

    // Tilt the camera angle slightly on scroll
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, t * 0.2, 0.1)
  })

  return (
    <group ref={group}>
      
      {/* LAYER 1: ATMOSPHERE (Clouds) */}
      <group ref={atmosphere}>
        <Cloud position={[-1.5, 2.5, -1]} scale={1.2} speed={0.8} />
        <Cloud position={[2, 3, 1]} scale={0.8} speed={1.2} />
        <Cloud position={[-2, 1.8, 2]} scale={1} speed={1} />
        <Cloud position={[1, 2.2, -2]} scale={1.5} speed={0.6} />
      </group>

      {/* LAYER 2: SURFACE (Buildings, Trees, Cars, Grass) */}
      <group ref={surface}>
        {/* Grass Block */}
        <RoundedBox args={[3.2, 0.2, 3.2]} radius={0.05} material={matGrass} position={[0, -0.1, 0]} />
        
        {/* Ring Road */}
        <mesh material={matRoad} position={[0, 0.01, 0]} rotation={[-Math.PI/2, 0, 0]}>
           <ringGeometry args={[1.0, 1.4, 4, 1, Math.PI/4]} />
        </mesh>

        {/* Central Hub Buildings */}
        <Building position={[0, 0, -0.2]} size={[0.8, 1.6, 0.8]} colorMat={matWhite} layers={3} windowLayout="wrap" />
        <Building position={[-0.4, 0, 0.4]} size={[0.5, 1.0, 0.5]} colorMat={matBlue} layers={2} windowLayout="front" />
        <Building position={[0.4, 0, 0.3]} size={[0.6, 0.8, 0.4]} colorMat={matPink} layers={1} windowLayout="front" />
        <Building position={[-0.2, 0, 0.7]} size={[0.4, 0.5, 0.4]} colorMat={matYellow} layers={1} windowLayout="wrap" />

        {/* Outer Rim Buildings & Parks */}
        <Building position={[-1.2, 0, -1.2]} size={[0.4, 0.8, 0.4]} colorMat={matWhite} layers={1} windowLayout="front" />
        <Building position={[1.2, 0, -1.2]} size={[0.4, 1.2, 0.4]} colorMat={matBlue} layers={2} windowLayout="wrap" />
        <Building position={[1.2, 0, 1.2]} size={[0.5, 0.6, 0.5]} colorMat={matPink} layers={1} windowLayout="front" />
        
        {/* Trees */}
        <Tree position={[-1.2, 0, 0]} scale={1} />
        <Tree position={[-1.0, 0, 0.3]} scale={0.8} />
        <Tree position={[-1.3, 0, 1.2]} scale={1.2} />
        <Tree position={[1.3, 0, 0]} scale={0.9} />
        <Tree position={[0, 0, -1.3]} scale={1.1} />
        <Tree position={[0.4, 0, -1.2]} scale={0.7} />

        {/* Moving Car */}
        <Car />
      </group>

      {/* LAYER 3: BEDROCK (Dirt Foundation) */}
      <group ref={bedrock} position={[0, -0.4, 0]}>
        <RoundedBox args={[3.0, 0.4, 3.0]} radius={0.05} material={matDirt} />
        {/* Lower bedrock layers */}
        <RoundedBox args={[2.6, 0.3, 2.6]} radius={0.05} material={matDirt} position={[0, -0.3, 0]} />
        <RoundedBox args={[1.8, 0.4, 1.8]} radius={0.1} material={matDirt} position={[0, -0.6, 0]} />
      </group>

    </group>
  )
}

export default function Hero() {
  return (
    <section className="p-4 md:p-6 h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full rounded-[2rem] overflow-hidden relative bg-[#1B2430]"
      >
        {/* Twilight gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E50] to-[#1B2430] pointer-events-none" />
        
        {/* Distant stars */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjUiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSIxNTAiIHI9IjEuNSIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC4zIi8+PGNpcmNsZSBjeD0iMzUwIiBjeT0iODAiIHI9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuOCIvPjwvc3ZnPg==')] opacity-50 pointer-events-none" />

        {/* 3D Canvas Background */}
        <div className="absolute inset-0 z-0">
          {/* Using a very narrow FOV from far away to simulate Isometric Projection */}
          <Canvas camera={{ position: [20, 20, 20], fov: 12 }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 20, 10]} intensity={1.2} color="#fff0dd" castShadow />
            <directionalLight position={[-10, 5, -10]} intensity={0.5} color="#90caf9" />
            
            <PresentationControls 
              global 
              config={{ mass: 2, tension: 500 }} 
              snap={{ mass: 4, tension: 1500 }} 
              rotation={[0, 0, 0]} 
              polar={[-Math.PI / 4, Math.PI / 4]} 
              azimuth={[-Math.PI, Math.PI]}
            >
              <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.1}>
                <IsometricCityBlock />
              </Float>
            </PresentationControls>
            
            {/* Soft reflections */}
            <Environment preset="city" />
          </Canvas>
        </div>
        
        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16 pointer-events-none z-10">
          <div className="mt-20 max-w-4xl">
            <span className="text-[#aed581] font-bold tracking-widest uppercase text-xs mb-6 block">Naya Yatra Pvt. Ltd.</span>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] text-white font-bold leading-[1.05] tracking-tight drop-shadow-lg">
              We build digital <br/> ecosystems serving <br/> Nepal and beyond.
            </h1>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <p className="text-white/80 text-lg md:text-xl max-w-md font-medium leading-relaxed drop-shadow-md">
              Balancing commercial product development with specialized hardware and civic engineering.
            </p>
            <div className="flex gap-4 pointer-events-auto">
              <button className="bg-white text-[#1B2430] px-8 py-4 rounded-full text-sm font-bold hover:bg-gray-200 shadow-xl transition-all hover:scale-105 active:scale-95">
                Explore Work
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
