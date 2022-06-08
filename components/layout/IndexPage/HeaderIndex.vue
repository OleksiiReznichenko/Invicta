<template>
    <div ref="header" class="header relative-container">
        <header class="section">
            <img src="@/assets/img/gridIndexHeader.png" alt="Grid" class="grid-image">
            <div class="info">
                <span class="border-text-blue">buy, sell & save money</span>
                <h1>
                    T<img src="@/assets/svg/bigH.svg" alt="H" class="h">e best giftcard hub
                </h1>
                <p>
                    Led as possible mistress relation elegance eat likewise debating. <br> By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands. Is be upon sang fond must show.
                </p>
                <div class="btn-container">
                    <nuxt-link class="btn btn-transparent" to="/browse"><div class="background"></div><span>Browse products</span></nuxt-link>
                </div>
            </div>
            <div class="cards-scene"></div>
        </header>
    </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

export default {
    mounted () {
        // VARIABLES
        let cardsModel;
        let mixer;
        let clips;


        // SCENE
        const container = document.querySelector('.cards-scene');
        const scene = new THREE.Scene();


        // CAMERA SETUP
        const fov = 35;
        const aspect = window.innerWidth / window.innerHeight;
        const near = 0.1;
        const far = 600;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(8, 8, 15);
        camera.lookAt(scene.position);


        // RENDERER SETUP
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.outputEncoding = THREE.sRGBEncoding;
        container.appendChild(renderer.domElement);


        // LIGHTNING SETUP
        const ambient = new THREE.AmbientLight(0xaaaaaa);
        scene.add(ambient);

        const pointLight2 = new THREE.PointLight(0x2c14e1, 2, 1000);
        pointLight2.position.set(10, 5, -10);
        scene.add(pointLight2);

        const pointLight3 = new THREE.PointLight(0x4B36DA, 1, 500);
        pointLight3.position.set(5, 5, -10);
        scene.add(pointLight3);

        const pointLight4 = new THREE.PointLight(0x2c14e1, 10, 500);
        pointLight4.position.set(15, 15, -10);
        scene.add(pointLight4);


        // SCAILING
        function cardsModelScailing(model) {
            model.scale.set(1.65, 1.65, 1.65);
            if (window.outerWidth < 1000 && window.outerHeight > 600 || window.outerWidth < 600) {
                model.scale.set(1.3, 1.3, 1.3);
                model.position.set(-1, 0, 0);
            }

            if (window.outerWidth < 1000 && window.outerHeight < 520 && window.outerWidth > 600) {
                model.scale.set(1.85, 1.85, 1.85);
            }
            
            if (window.outerWidth < 700 && window.outerHeight > 600 || window.outerWidth < 600) {
                model.scale.set(1.1, 1.1, 1.1);
            }
        }
        

        // LOAD SETUP
        // const dracoLoader = new DRACOLoader();
        // dracoLoader.setDecoderPath('jst/libs/draco/gltf');

        const loader = new GLTFLoader();
        // loader.setDRACOLoader(dracoLoader);
        loader.load('/projects/Invicta/cards.glb', (gltf) => {
            cardsModel = gltf.scene;
            scene.add(cardsModel);
            
            cardsModelScailing(cardsModel);

            clips = gltf.animations;
            
            mixer = new THREE.AnimationMixer(cardsModel);
            clips.forEach(clip => {
                mixer.clipAction(clip).play();
            })

            // renderer.render( scene, camera );
            animate();
        });


        // ANIMATION
        const clock = new THREE.Clock();

        function animate() {
            const delta = clock.getDelta();
            
            if ( mixer ) mixer.update( delta );

            renderer.render( scene, camera );

            requestAnimationFrame( animate );
        }

        // RESIZE
        function onWindowResize() {
            cardsModelScailing(cardsModel);

            camera.aspect = window.innerWidth / window.innerHeight;

            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener('resize', onWindowResize);
    },
}
</script>

<style lang="scss" scoped>
header {
    height: 100vh;
    min-height: -webkit-fill-available;

    @media only screen and (max-width: 600px) {
        min-height: 600px;
    }

    .cards-scene {
        position: absolute;
        top: 0;
        left: 0;
        width: 100% !important;
        height: 100% !important;
    }

    .grid-image {
        position: absolute;
        right: 0;
        bottom: -20%;
        width: 45rem;

        @media only screen and (max-width: 1000px) and (max-height: 600px),
        only screen and (max-width: 1000px) {
            display: none;
        }
    }

    .info {
        position: absolute;
        width: 55rem;
        z-index: 100;

        @media only screen and (max-width: 1200px) and (min-height: 800px) {
            bottom: 35%;
        }

        @media only screen and (max-width: 1000px) and (min-height: 600px) and (min-width: 600px) {
            bottom: 6%;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
        }

        @media only screen and (max-width: 1000px) and (max-height: 600px) and (min-width: 600px) {
            width: 50rem;
            bottom: 8%;
        }

        @media only screen and (max-width: 600px) {
            bottom: 15%;
        }

        @media only screen and (min-width: 1200px),
        only screen and (min-width: 1000px) and (max-height: 800px) {
            top: 50%;
            transform: translateY(-50%);
        }

        .border-text-blue {
            padding: .75rem 1.5rem;

            @media only screen and (max-width: 600px) {
                display: none;
            }
        }

        h1 {
            text-transform: uppercase;
            font-size: 5.6rem;
            margin: 2rem 0;

            .h {
                width: 10.4rem;
                margin: 0 1rem;
            }
        }

        p {
            color: $color-text-grey;
            line-height: 1.3;
            margin-bottom: 6rem;

            @media only screen and (max-width: 1000px) and (max-height: 600px) and (min-width: 600px) {
                margin-bottom: 4rem;

                br {
                    display: none;
                }
            }

            @media only screen and (max-width: 600px) {
                margin-bottom: 4rem;
            }

            @media only screen and (max-width: 450px) {
                width: 48rem;
                font-size: 12px;

                br {
                    display: none;
                }
            }
        }

        .btn {
            padding: 1.45rem 5.65rem;

            .background {
                background-image: linear-gradient(to right bottom, #191522, #16131B);
            }
        }
    }
}
</style>