import * as THREE from 'https://unpkg.com/three@0.156.1/build/three.module.js';

//Canvas
const canvas = document.querySelector('.webgl')

//Scene
const scene = new THREE.Scene()

//Objects
 const geometry = new THREE.BoxGeometry(1, 1, 1)
 const material = new THREE.MeshBasicMaterial({ color: 0x73C2FB })
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
renderer.render(scene, camera)
