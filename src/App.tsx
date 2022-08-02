import { useEffect } from 'react';
import * as THREE from 'three';
import './App.css';
import DefaultLayout from '@/components/';
interface ISocials {
  label: string;
  link: string;
  icon: string;
}
function App() {
  useEffect(() => {
    const scene = new THREE.Scene();
  }, []);
  return (
    <div className='App w-100'>
      {/* <canvas id='myThreeJsCanvas' /> */}
      <div className='w-100'>
        <DefaultLayout />
      </div>
    </div>
  );
}

export default App;
