import React from 'react'
import {usePlane} from '@react-three/cannon'
import {TextureLoader,RepeatWrapping} from 'three'
import grass from '../image/images.jpg'
function Ground(props) {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0],...props}))
    console.log(ref)
    const texture=new TextureLoader().load(grass)
    texture.wrapS=RepeatWrapping;
    texture.wrapT=RepeatWrapping;
    texture.repeat.set(100,100)
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}  position={[0,10,0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} rotation={[-Math.PI / 2, 0, 0]}/>
      <meshStandardMaterial map={texture} attach="material" />
    </mesh>
  )
}

export default Ground