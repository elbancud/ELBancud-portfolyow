import { useEffect } from 'react';
import * as THREE from 'three';
import './App.css';
import { socials } from './data/contents';

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
      {/* <canvas id='myThreeJsCanvas' />
       */}
      <ul>
        {socials &&
          socials.map((social: ISocials) => {
            return <li>{social.label}</li>;
          })}
      </ul>
    </div>
  );
}

export default App;
