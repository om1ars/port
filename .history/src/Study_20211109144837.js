import React, { useEffect, useMemo, useRef } from "react";
import './Study.css'

export default function Study() {
  const { viewport } = useThree()
  // viewport = canvas in 3d units (meters)

  const ref = useRef()
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    ref.current.position.set(x, y, 0)
    ref.current.rotation.set(-y, x, 0)
  })

  return (
    <mesh ref={ref} castShadow>
      <dodecahedronBufferGeometry attach="geometry" />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}
  return <div
  className='study'
  >hey</div>;
}
