import * as THREE from 'three'
import { useEffect } from 'react'
import profile from '../assets/threeassets/profile.jpg'
export default function Threebg() {

    useEffect(() => {

        const scence = new THREE.Scene()
        const spaceTexture = new THREE.TextureLoader().load('https://i.ibb.co/X3Vj5G7/space.jpg')
        scence.background = spaceTexture;

        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#bg')
        })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight)
        camera.position.setZ(30)

        renderer.render(scence, camera)


        const ambentLight = new THREE.AmbientLight(0xfffff)
        scence.add(ambentLight)


        function addstar() {
            const goematry = new THREE.SphereGeometry(0.25, 24, 24)
            const matriel = new THREE.MeshBasicMaterial({ color: 0xffffff })
            const star = new THREE.Mesh(goematry, matriel)

            const x = THREE.MathUtils.randFloatSpread(200)
            const y = THREE.MathUtils.randFloatSpread(1000)
            const z = THREE.MathUtils.randFloatSpread(200)
            star.position.set(x, y, z)
            scence.add(star)
        }
        Array(2000).fill().forEach(addstar)


        var skillcubelist = []
        var skillY
        if (innerWidth < 400) {
            skillY = 0
        } else if (innerWidth < 800) {
            skillY = 0
        }
        else {
            skillY = 100
        }
        function createskillcube(imgurl, shape, x, y, z) {
            const textureLoader = new THREE.TextureLoader()
            textureLoader.crossOrigin = "Anonymous"
            const myTexture = textureLoader.load(imgurl)
            const skillcube = new THREE.Mesh(
                shape,
                new THREE.MeshBasicMaterial({ map: myTexture })
            )
            skillcubelist = [...skillcubelist, skillcube]
            skillcube.position.x = x - skillY
            skillcube.position.y = y - skillY
            skillcube.position.z = z
            scence.add(skillcubelist[skillcubelist.length - 1])
        }
        createskillcube('https://i.ibb.co/tPVDQ4T/tailwindcssicon.png', new THREE.CylinderGeometry(3, 3, 3), 100, 0, 0)
        createskillcube('https://i.ibb.co/fMYyjnT/html-icon.png', new THREE.BoxGeometry(4, 4, 4), 140, 14, 0)
        createskillcube('https://i.ibb.co/68ybrXD/next-icon.png', new THREE.BoxGeometry(4, 4, 4), 150, 0, 0)
        createskillcube('https://i.ibb.co/Bt3QyMp/svelte-icon.png', new THREE.BoxGeometry(4, 4, 4), 120, 10, 0)
        createskillcube('https://i.ibb.co/WkxYJ0S/github-icon.png', new THREE.BoxGeometry(4, 4, 4), 130, 0, 0)
        createskillcube('https://i.ibb.co/r5LRCmY/js-icon.png', new THREE.BoxGeometry(4, 4, 4), 100, 15, 0)
        createskillcube('https://i.ibb.co/THPh4NV/react-icon.png', new THREE.BoxGeometry(6, 6, 6), 130, 15, 0)
        createskillcube('https://i.ibb.co/JzV3NgH/css-icon.png', new THREE.BoxGeometry(4, 4, 4), 110, -5, 0)


        createskillcube('https://i.ibb.co/tPVDQ4T/tailwindcssicon.png', new THREE.CylinderGeometry(3, 3, 3), 100, -100, 0)
        createskillcube('https://i.ibb.co/fMYyjnT/html-icon.png', new THREE.BoxGeometry(4, 4, 4), 140, -140, 0)
        createskillcube('https://i.ibb.co/68ybrXD/next-icon.png', new THREE.BoxGeometry(4, 4, 4), 150, -100, 0)
        createskillcube('https://i.ibb.co/Bt3QyMp/svelte-icon.png', new THREE.BoxGeometry(4, 4, 4), 120, -100, 0)
        createskillcube('https://i.ibb.co/WkxYJ0S/github-icon.png', new THREE.BoxGeometry(4, 4, 4), 130, -1000, 0)
        createskillcube('https://i.ibb.co/r5LRCmY/js-icon.png', new THREE.BoxGeometry(4, 4, 4), 100, -150, 0)
        createskillcube('https://i.ibb.co/THPh4NV/react-icon.png', new THREE.BoxGeometry(6, 6, 6), 130, -150, 0)
        createskillcube('https://i.ibb.co/JzV3NgH/css-icon.png', new THREE.BoxGeometry(4, 4, 4), 110, -500, 0)

        createskillcube('https://i.ibb.co/tPVDQ4T/tailwindcssicon.png', new THREE.CylinderGeometry(3, 3, 3), 100, -100, 0)
        createskillcube('https://i.ibb.co/fMYyjnT/html-icon.png', new THREE.BoxGeometry(4, 4, 4), 140, -140 - 100, 0)
        createskillcube('https://i.ibb.co/68ybrXD/next-icon.png', new THREE.BoxGeometry(4, 4, 4), 150, -100 - 100, 0)
        createskillcube('https://i.ibb.co/Bt3QyMp/svelte-icon.png', new THREE.BoxGeometry(4, 4, 4), 120, -100 - 100, 0)
        createskillcube('https://i.ibb.co/WkxYJ0S/github-icon.png', new THREE.BoxGeometry(4, 4, 4), 130, -100 - 100, 0)
        createskillcube('https://i.ibb.co/r5LRCmY/js-icon.png', new THREE.BoxGeometry(4, 4, 4), 100, -150 - 100, 0)
        createskillcube('https://i.ibb.co/THPh4NV/react-icon.png', new THREE.BoxGeometry(6, 6, 6), 130, -150 - 100, 0)
        createskillcube('https://i.ibb.co/JzV3NgH/css-icon.png', new THREE.BoxGeometry(4, 4, 4), 110, -500 - 100, 0)





        const textureLoader = new THREE.TextureLoader()
        const baraaTexture = textureLoader.load(profile)
        const baraa = new THREE.Mesh(
            new THREE.BoxGeometry(4, 4, 4),
            new THREE.MeshBasicMaterial({ map: baraaTexture })
        )
        scence.add(baraa)
        const points = [];
        points.push(new THREE.Vector3(- 10, 0, 0));
        points.push(new THREE.Vector3(0, 0, 0));
        points.push(new THREE.Vector3(10000, 0, 0));

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
        const line = new THREE.Line(geometry, material);

        scence.add(line)
        function moveCamera() {
            const t = document.body.getBoundingClientRect().top;
            camera.position.x = t * -0.01
            baraa.rotation.x += 0.05
            baraa.rotation.z += 0.005
            baraa.rotation.y += 0.01
            console.log(t)

        }

        document.body.onscroll = moveCamera
        var Ypos
        window.addEventListener('resize', onWindowResize, false);

        function onWindowResize() {

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        const axesHelper = new THREE.AxesHelper(5);
        scence.add(axesHelper);
        function animate() {
            requestAnimationFrame(animate)
            onWindowResize()
            baraa.rotation.x += 0.005
            for (var i = 0; i < skillcubelist.length; i++) {
                skillcubelist[i].rotation.x += 0.005
                skillcubelist[i].rotation.y += 0.01
            }
            renderer.render(scence, camera)
        }
        animate()
    }, [])
    return (
        <canvas id='bg'>
        </canvas>
    )
}
