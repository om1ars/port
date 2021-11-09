import React, { useEffect, useMemo, useRef } from 'react'
import { render } from 'react-dom'

import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import { Text, OrbitControls } from '@react-three/drei'

export default function Study() {
  const [ref, reflection] = useMirror({ className: "mirror-frame" });

  return (
    <div>
      <div ref={ref} />
      {/* {reflection} */}
    </div>
  );
}
