import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Burger } from './models/Burger';
import { RetroPc } from './models/RetroPc';

function CanvasDefaultLayout() {
  return (
    <>
      <Canvas
        style={{
          // backgroundColor: '#000',
          height: 'calc(100vh)',
          width: '100%',
          position: 'absolute',
          // zIndex: -1,
        }}>
        <OrbitControls />
        <ambientLight intensity={0.3} />
        {/* <hemisphereLight args={['#9e0090', '#71c18e']} /> */}
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <spotLight intensity={1} position={[1000, 0, 0]} />
        <Burger />
        <RetroPc />
      </Canvas>
    </>
  );
}

export default CanvasDefaultLayout;
