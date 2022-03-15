import './App.css'
import {Canvas} from 'react-three-fiber'
import {OrbitControls, Sky} from '@react-three/drei'
import {Physics} from '@react-three/cannon'
import Ground from './components/Ground';
import Player from './components/Player';
function App() {
  return (
   <Canvas pixelRatio={window.devicePixelRatio} shadowMap sRGB>
     <Sky sunPosition={[100,150,100]}/>
     <ambientLight intensity={0.25}/>
     <pointLight castShadow intensity={0.7} position={[100,100,100]}/>
<Physics gravity={[0,-30,0]}>
<Ground position={[0,0.5,0]}/>
<Player position={[0,3,10]}/>
</Physics>
<OrbitControls/>
  </Canvas> 
  );
}


export default App;
