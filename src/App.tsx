import { RetroPc } from '@/components/models/RetroPc';
import { Canvas } from '@react-three/fiber';
import './App.css';
interface ISocials {
  label: string;
  link: string;
  icon: string;
}
function App() {
  return (
    <div className='App'>
      {/* <canvas id='myThreeJsCanvas' /> */}
      <Canvas style={{ height: 'calc(100vh - 170px)', width: '100vw' }}>
        <pointLight position={[10, 10, 10]} />
        <RetroPc />
        {/* <DefaultLayout /> */}
      </Canvas>
    </div>
  );
}

export default App;
