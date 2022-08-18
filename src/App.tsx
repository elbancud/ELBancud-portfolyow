import DefaultLayout from '@/components/';
import { Canvas } from '@react-three/fiber';
import './App.css';
import { RetroPc } from './components/models/RetroPc';
interface ISocials {
  label: string;
  link: string;
  icon: string;
}
function App() {
  return (
    <div className='App'>
      {/* <canvas id='myThreeJsCanvas' /> */}
      <Canvas
        style={{
          // backgroundColor: '#000',
          height: 'calc(100vh)',
          width: '100%',
          position: 'absolute',
          // zIndex: -1,
        }}>
        {/* <OrbitControls /> */}
        <ambientLight intensity={0.1} />
        <hemisphereLight args={['#9e0090', '#71c18e']} />

        <RetroPc />
      </Canvas>
      <DefaultLayout />
    </div>
  );
}

export default App;
