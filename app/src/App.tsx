import './App.css'
import Walk from './Walk'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Vector3 } from 'three'
import Sidewalk from './Sidewalk'

function App() {
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  camera.position.x = -3
  camera.position.y = 2
  camera.position.z = 0
  camera.lookAt(new Vector3(0, 1, 0))

  return (
    <Canvas camera={camera}>
      <ambientLight intensity={0.5} />
      <axesHelper />
      <directionalLight />
      <Walk />
      <Sidewalk />
    </Canvas>
  )
}

export default App
