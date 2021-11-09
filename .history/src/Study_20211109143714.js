import React, { useEffect, useMemo, useRef } from 'react'
import { render } from 'react-dom'

import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import { Text, OrbitControls } from '@react-three/drei'

const textProps = {
    fontSize: 3.9,
    font: 'http://fonts.gstatic.com/s/modak/v5/EJRYQgs1XtIEskMA-hI.woff'
  }

export default function Study({ layers = undefined) {

 
  return (
    <div>
      <div ref={ref} />
      {/* {reflection} */}
    </div>
  );
}
