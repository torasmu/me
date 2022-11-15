import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { DoubleSide, MeshStandardMaterial, PlaneGeometry } from 'three'

const Sidewalk = () => {
  const ref = useRef()
  const geometry = new PlaneGeometry(2, 20, 2, 20)
  const material = new MeshStandardMaterial({
    color: 0xffff00,
    side: DoubleSide,
  })

  geometry.rotateX(Math.PI / 2)
  material.wireframe = true

  // @ts-ignore
  useFrame(
    (state, delta) =>
      (ref.current.position.z = (ref.current.position.z - 0.03) % 1)
  )

  return <mesh ref={ref} geometry={geometry} material={material} />
}

export default Sidewalk
