import * as THREE from 'three';
import gsap from 'gsap';

//Canvas
const canvas = document.querySelector('.webgl')

//Scene
const scene = new THREE.Scene()

//Object
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

 //Sizes 
 const sizes = {
    width: 800,
    height: 600
 }

 //Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

// //Time

// let time = Date.now()

// //Animations

// const tick = () =>
// {
//     //Time
//     const currentTime = Date.now()
//     const deltaTime = currentTime - time
//     time = currentTime

//     //Update objects
//     mesh.rotation.y += 0.001 * deltaTime

//     //Render
    // renderer.render(scene, camera)

//     window.requestAnimationFrame(tick)
// }

// tick()

/**
 * Animate gsap
 */
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })

const tick = () =>
{
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
