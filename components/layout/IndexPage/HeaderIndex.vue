<template>
    <div ref="header" class="header relative-container">
        <!-- <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light"> -->
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
            <div class="cards-scene">
                
                <!-- <img src="@/assets/img/cardsShadow.png" alt="Shadow" class="cards-shadow"> -->
            </div>
        </header>
    </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default {
    mounted () {
        let check = true;

        // const header = document.querySelector('.header');
        // const main = document.querySelector('.main');

        // const observerOptions = {
        //     root: null,
        //     rootMargin: "0px",
        //     threshold: 1,
        // };

        // const observerOptions2 = {
        //     root: null,
        //     rootMargin: "0px",
        //     threshold: 1,
        // };


        // const observerCallback = (entries) => {
        //     entries.forEach((entry) => {
        //         console.log(entry, 'header')
        //         // if (!entry.isIntersecting && (window.outerWidth > 600 && window.outerHeight > 520 || window.outerWidth > 1000)) return;
        //         if (!entry.isIntersecting) return;

        //             if (check === false) {
        //                 console.log('HEADER', true);
        //                 check = true;
        //                 requestAnimationFrame( animate );
        //             }
        //     });
        // }

        // const observerCallback2 = (entries) => {
        //     entries.forEach((entry) => {
        //         console.log(entry, 'main')
        //         // if (!entry.isIntersecting && (window.outerWidth > 600 && window.outerHeight > 520 || window.outerWidth > 1000)) return;
        //         if (!entry.isIntersecting) return;

        //             if (check === true) {
        //                 console.log('MAIN', false);
        //                 check = false;
        //             }
        //     });
        // }

        // const observer = new IntersectionObserver(
        //     observerCallback,
        //     observerOptions
        // );

        // const observer2 = new IntersectionObserver(
        //     observerCallback2,
        //     observerOptions2
        // );

        // observer.observe(header);
        // observer2.observe(main);

        let cardsModel;
        let mixer;
        let clips;
        let action;
        const container = document.querySelector('.cards-scene');

        const scene = new THREE.Scene();

        // CAMERA SETUP
        const fov = 35;
        const aspect = window.innerWidth / window.innerHeight;
        const near = 0.1;
        const far = 600;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        // camera.position.set(10, 8, 15);
        camera.position.set(8, 8, 15);
        camera.lookAt(scene.position);

        // RENDERER SETUP
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.outputEncoding = THREE.sRGBEncoding;
        // renderer.shadowMap.enabled = true;
        // renderer.shadowMap.type = THREE.PCFSoftShadowMap;


        container.appendChild(renderer.domElement);

        // LIGHTNING SETUP
        const ambient = new THREE.AmbientLight(0xaaaaaa);
        // const ambient = new THREE.AmbientLight(0x999999);
        scene.add(ambient);

        // const directionalLightning = new THREE.DirectionalLight(0xaaaaaa, 1);
        // directionalLightning.position.set(10, 10, 10);
        // scene.add(directionalLightning);

        // const hemisphereLight = new THREE.HemisphereLight( 0x2c14e1, 0x4B36DA, 1 );
        // scene.add( hemisphereLight );

        // const pointLight = new THREE.PointLight(0x2c14e1, 2, 1000);
        // pointLight.position.set(-30, -30, -10);
        // scene.add(pointLight);

        // const spotLight = new THREE.SpotLight( 0xffffff );
        // spotLight.position.set( 10, 10, 10 );

        const pointLight2 = new THREE.PointLight(0x2c14e1, 2, 1000);
        pointLight2.position.set(10, 5, -10);
        scene.add(pointLight2);

        const pointLight3 = new THREE.PointLight(0x4B36DA, 1, 500);
        pointLight3.position.set(5, 5, -10);
        scene.add(pointLight3);

        const pointLight4 = new THREE.PointLight(0x2c14e1, 10, 500);
        pointLight4.position.set(15, 15, -10);
        // pointLight4.castShadow = true;
        scene.add(pointLight4);

        // const pointLight5 = new THREE.PointLight(0xaaaaaa, 1, 1000);
        // pointLight5.position.set(5, 5, 1);
        // scene.add(pointLight5);

        // const light = new THREE.HemisphereLight(0xF037C7, 0x4530E0, 5);
        // scene.add(light);

        const clock = new THREE.Clock();

        function cardsModelScailing(model) {
            model.scale.set(1.65, 1.65, 1.65);
            // if (window.outerWidth < 1000 && window.outerHeight > 520) {
            //     model.scale.set(1.55, 1.55, 1.55);
            // }

            if (window.outerWidth < 1000 && window.outerHeight > 600) {
                model.scale.set(1.3, 1.3, 1.3);
                model.position.set(-1, 0, 0);
            }

            if (window.outerWidth < 1000 && window.outerHeight < 520) {
                model.scale.set(1.85, 1.85, 1.85);
            }
            
            if (window.outerWidth < 700 && window.outerHeight > 600) {
                model.scale.set(1.1, 1.1, 1.1);
            }
        }
        
        // LOAD SETUP
        const loader = new GLTFLoader();
        // loader.load('/kermaWaits.glb', (gltf) => {
        loader.load('/cards.glb', (gltf) => {
            cardsModel = gltf.scene;
            scene.add(cardsModel);
            // cardsModel.castShadow = true;
            // // cardsModel.receiveShadow = true;
            
            cardsModelScailing(cardsModel);

            clips = gltf.animations;

            // cardsModel.children.forEach(el => {
            //     el.castShadow = true;
            //     el.receiveShadow = true;
            // })
            // console.log(cardsModel)
            
            mixer = new THREE.AnimationMixer(cardsModel);
            clips.forEach(clip => {
                mixer.clipAction(clip).play();
            })
            // let action = mixer.clipAction(gltf.animations);
            // action.play();

            renderer.render(scene, camera);
            // animate();

            if (window.outerWidth > 1000) {
                const canvas = document.querySelector('.cards-scene canvas');

                document.querySelector('.header').addEventListener('mousemove', (e) => {
                    cardsModel.position.x = -(e.clientX - window.innerWidth / 2) / 200;
                    cardsModel.position.y = -(e.clientY - window.innerHeight / 2) / 200;
                    cardsModel.position.z = -(e.clientX - window.innerWidth / 2) / 1000;
                    // parallax(e, 10, container)
                });
            }
        });

        function animate() {
            // if (!check) return;
            const delta = clock.getDelta();
            
            if ( mixer ) mixer.update( delta );

            renderer.render( scene, camera );

            requestAnimationFrame( animate );

        }

        function onWindowResize() {
            cardsModelScailing(cardsModel);

            camera.aspect = window.innerWidth / window.innerHeight;

            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener('resize', onWindowResize);

        // const parallax = (mouse, resistance, el) => {
        //     el.style.transform = `translateX(${-(mouse.clientX - window.innerWidth / 2) / resistance})`
        //     // this.$gsap.to(el, {duration: .2,
        //     //     x: -((mouse.clientX - window.innerWidth / 2) / resistance),
        //     //     // y: -((mouse.clientY - window.innerHeight / 2) / resistance)
        //     // })
        // };
    },
}
</script>

<style lang="scss" scoped>
header {
    height: 100vh;

    .cards-scene {
        position: absolute;
        top: 0;
        left: 0;
        width: 100% !important;
        height: 100% !important;

        // @media only screen and (max-width: 1000px) {
        //     transform: scale(.8) !important;
        // }
    }

    // .cards-shadow {
    //     position: absolute;
    //     width: 50rem;
    //     height: 50rem;
    //     top: 35%;
    //     left: 53%;
    //     // width: 60rem;
    //     // height: 60rem;
    //     // top: 23%;
    //     // left: 51%;
    // }

    .grid-image {
        position: absolute;
        right: 0;
        bottom: -20%;
        width: 45rem;

        @media only screen and (max-width: 1000px) and (max-height: 520px),
        only screen and (max-width: 1000px) {
            // bottom: 0%;
            // width: 25rem;
            display: none;
        }
    }

    .info {
        position: absolute;
        // top: 20%;
        // bottom: 30%;
        width: 55rem;
            z-index: 100;

            @media only screen and (min-width: 1300px) {
            top: 50%;
            transform: translateY(-50%);
        }

        @media only screen and (max-width: 1300px) {
            bottom: 30%;
            // transform: translateY(50%);
        }

        @media only screen and (max-width: 1300px) and (min-height: 700px) {
            bottom: 35%;
            // transform: translateY(50%);
        }

        @media only screen and (max-width: 1000px) and (max-height: 520px) {
            width: 50rem;
            bottom: 8%;
        }

        @media only screen and (max-width: 1000px) and (min-height: 600px) and (min-width: 600px) {
            // top: 60%;
            bottom: 6%;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
        }

        @media only screen and (max-width: 600px) and (min-height: 600px) {
            // top: 60%;
            bottom: 15%;
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

            @media only screen and (max-width: 1000px) and (max-height: 520px) {
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