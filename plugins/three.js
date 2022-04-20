import Vue from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Three = {
  install(Vue, options) {
    Vue.prototype.$THREE = THREE;
    Vue.prototype.$GLTFLoader = GLTFLoader;
  },
};
console.log(THREE)

Vue.use(Three);