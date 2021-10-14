import * as THREE from 'three'


export function videoByURL(videoUrl){
  const video = document.createElement("video")
  video.src = videoUrl;
  video.muted = true;
  video.loop = true;
  setTimeout(()=>{
    video.play()
  }, 1)
  return video;
}

export function videoById(videoId){
  const video = document.getElementById( videoId );
	video.play();
  return video
}
