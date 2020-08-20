//import * as THREE from 'https://unpkg.com/three@0.119.1/build/three.module.js';
import "./style.scss";


console.log('hello world');

let btn = document.getElementById('go');
btn.addEventListener('click', go);

function go() {
  window.location.assign('./index2.html')
}


const fancyFunc = () => {
  return [1, 2];
};

const [a, b] = fancyFunc();