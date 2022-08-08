import DefaultLayout from '@/components/';
import { useEffect } from 'react';
import * as THREE from 'three';
import './App.css';
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
    <div className='App'>
      {/* <canvas id='myThreeJsCanvas' /> */}
      <DefaultLayout />
    </div>
  );
}

export default App;
