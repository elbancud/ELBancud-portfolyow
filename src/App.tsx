import { useEffect } from 'react';
import * as THREE from 'three';
import './App.css';
import NavBar from './components/layouts/NavBar';
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
        <NavBar />
      </div>
    </div>
  );
}

export default App;
