import { useEffect } from "react";
import * as THREE from "three";
import "./App.css";

function App() {
  useEffect(() => {
    const scene = new THREE.Scene();
  }, []);
  return (
    <div className='App'>
      <canvas id='myThreeJsCanvas' />
    </div>
  );
}

export default App;
