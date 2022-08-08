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
      <div className='sketchfab-embed-wrapper'>
        {' '}
        <iframe
          title='Virtual Reality Brain User Interface Tilt Brush'
          frameBorder='0'
          allowFullScreen
          // mozallowfullscreen='true'
          // webkitallowfullscreen='true'
          allow='autoplay; fullscreen; xr-spatial-tracking'
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src='https://sketchfab.com/models/285bbd0d6b9b4bb7bb988f8320cd4d30/embed'>
          {' '}
        </iframe>{' '}
      </div>
    </div>
  );
}

export default App;
