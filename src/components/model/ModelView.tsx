import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react' 
import Model from './Mobile3D' 

export default function ModelView() {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas camera={{ position: [2, 1, 5], fov: 50 }}>
        <ambientLight />
        <directionalLight position={[0, 0, 0]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls
           enablePan={true}          // Habilita el movimiento lateral
          enableZoom={false}       // Desactiva el zoom
          minPolarAngle={Math.PI / 4} // Permite un poco de inclinación hacia abajo
          maxPolarAngle={Math.PI / 2.2} // Permite un poco de inclinación hacia arriba
          minAzimuthAngle={-Math.PI / 6} // Permite girar ligeramente a la izquierda
          maxAzimuthAngle={Math.PI / 6}  // Permite girar ligeramente a la derecha
          minDistance={1}          // Distancia mínima de la cámara
          maxDistance={4}          // Distancia máxima de la cámara          // Distancia máxima de la cámara         
        />
      </Canvas>
    </div>
  )
}
