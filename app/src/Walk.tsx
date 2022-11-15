import { Canvas, useLoader } from '@react-three/fiber'
import { useAnimations } from '@react-three/drei'
import { Suspense, useEffect, useRef } from 'react'
import { AnimationMixer } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Walk = () => {
  const gltf = useLoader(GLTFLoader, '/walk-bot.gltf')
  const ref = useRef()
  const { actions } = useAnimations(gltf.animations, ref) /* highlight-line */

  useEffect(() => {
    actions['Armature|mixamo.com|Layer0']?.play()
  })

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} ref={ref} />
    </Suspense>
  )
}

export default Walk
