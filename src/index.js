import { render } from 'react-dom'
import React from 'react'
import App from './App'
import './styles.css'

import {videoById, videoByURL} from "./video/VideoElement"

const oldVideo = videoById("pepevid");
const newVideo = videoByURL("/MANDALA_1.mp4");

console.log(newVideo);

render(
  (
    <App
      video={newVideo}
    />
  ), document.querySelector('#root'))
