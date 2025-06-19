import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './index.css'

const App: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    if (mountRef.current) mountRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.TorusKnotGeometry(10, 2, 80, 16)
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    camera.position.z = 7

    const animate = () => {
      requestAnimationFrame(animate)
      mesh.rotation.x += 0.003
      mesh.rotation.y += 0.005
      renderer.render(scene, camera)
    }
    animate()
    

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div ref={mountRef} className="canvas-container">
      <div id="container">
        <h1>trollmeight</h1>
        <div className="links">
          <a href="https://github.com/trollmeight" title="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://x.com/@trollmeight" title="Twitter / X">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://bsky.app/profile/trollmeight.bsky.social" title="Bluesky">
            <i className="fa-brands fa-bluesky"></i>
          </a>
          <a href="https://discordapp.com/users/" title="Discord">
            <i className="fa-brands fa-discord"></i>
          </a>
        </div>
        <div className="quote">"He is not here, for He is risen"</div>
      </div>
    </div>
  )
}

export default App
