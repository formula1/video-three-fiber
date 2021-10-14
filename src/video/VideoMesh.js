import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'

export default function VideoMesh(props){

  const video = props.video;
  const dims = props.cameraDimensions;

  console.log(props);


  const texture = new THREE.VideoTexture( video );

  console.log("vid dim:", JSON.stringify({
    width: video.videoWidth,
    height: video.videoHeight
  }))
  console.log("plane dim:", JSON.stringify({
    width: video.videoWidth / 16,
    height: video.videoHeight / 16
  }))

  console.log("camera dim:", JSON.stringify({
    width: dims.width,
    height: dims.height
  }))

  const targetDimensions = {
    width: dims.width,
    height: dims.height
  }

  if(video.videoWidth > video.videoHeight){
    const vidRatio = video.videoWidth / video.videoHeight
    const tarRatio = targetDimensions.width / targetDimensions.height;
    if(tarRatio < vidRatio){
      targetDimensions.height = targetDimensions.width * video.videoHeight / video.videoWidth;
    } else if (tarRatio >  vidRatio) {
      targetDimensions.width = targetDimensions.height * video.videoWidth / video.videoHeight;
    } else {
      // target dimensions are correct
    }
  } else if(video.videoWidth < video.videoHeight) {
    targetDimensions.width = targetDimensions.height * video.videoWidth / video.videoHeight
  } else {
    targetDimensions.width = targetDimensions.height
  }

  console.log("target dim:", JSON.stringify({
    width: targetDimensions.width,
    height: targetDimensions.height
  }))


  return (
    <mesh
      position={[0, 0, -1]} rotation={[0, Math.PI, Math.PI]}
    >
      <planeBufferGeometry
        args={[targetDimensions.width, targetDimensions.height]}
      />
      <meshBasicMaterial
        map={texture}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
