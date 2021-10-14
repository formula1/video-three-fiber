import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'

export default function VideoMesh(props){

  const video = props.video


  const texture = new THREE.VideoTexture( video );

  console.log(JSON.stringify({
    width: video.videoWidth,
    height: video.videoHeight
  }))

  return (
    <mesh
      position={[0, 0, -100]} rotation={[0, 0, Math.PI]}
    >
      <planeBufferGeometry
        args={[video.videoWidth / 32, video.videoHeight / 16]}
      />
      <meshBasicMaterial
        map={texture}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
